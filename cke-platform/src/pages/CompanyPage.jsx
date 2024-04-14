import React, { useState, useEffect } from 'react';
import CompanyOverview from '../components/Company/CompanyOverview/CompanyOverview';
import CurrentListing from '../components/Company/CurrentListing/CurrentListing';
import RegisterNewCredits from '../components/Company/RegisterCredit/RegisterCredit';
import FinancialOverview from '../components/Company/FinancialOverview/FinancialOverview';
import TabButton from '../components/Company/Common/TabButton';
import '../components/Company/CompanyPage.css';

const CompanyPage = () => {
    const [activeTab, setActiveTab] = useState('currentListings');
    const [userInfo, setUserInfo] = useState({
        userName: '',
        isSeller: true, // Seller OR Buyer
        logo: '',
        about: '',
        location: ''
    });


    // get user info from DB using userId stored in browser.
    useEffect(() => {
        const fetchUserInfo = async () => {


            const userInfoResponse = await fetch(`http://localhost:5050/users/${localStorage.getItem('userId')}`)

            if (!userInfoResponse.ok) {
                const msg = `An error has occured: ${userInfoResponse.statusText}`
                console.error(msg)
                return
            }
            const userInfo = await userInfoResponse.json()
            if (!userInfo) {
                console.warn(`User with id: ${id} not found`)
                navigate("/")
                return
            }
            setUserInfo(userInfo)
        }
        fetchUserInfo()
    }, []);






    return (
        <div className='company-page-container'>

            <CompanyOverview userInfo={userInfo} />

            <div className="tab-buttons">
                <TabButton isActive={activeTab === 'currentListings'} onClick={() => setActiveTab('currentListings')}>
                    Your Listings
                </TabButton>
                <TabButton isActive={activeTab === 'registerCredits'} onClick={() => setActiveTab('registerCredits')}>
                    Register New Listing
                </TabButton>
                <TabButton isActive={activeTab === 'financialOverview'} onClick={() => setActiveTab('financialOverview')}>
                    Financial Overview
                </TabButton>
            </div>
            <div className="page-content">
                {activeTab === 'currentListings' && <CurrentListing />}
                {activeTab === 'registerCredits' && <RegisterNewCredits userInfo={userInfo} />}
                {activeTab === 'financialOverview' && <FinancialOverview userInfo={userInfo} />}
            </div>
        </div>
    );
};

export default CompanyPage;
