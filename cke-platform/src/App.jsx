import React, {useState , useEffect} from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Modal from './components/WelcomeModal/Modal.jsx';

import NavBar from './components/Navbar/navbar.jsx';
import Footer from './components/Footer/Footer.jsx';

import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Home from './pages/Home.jsx';
import AboutPage from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Login from './pages/Login.jsx';
import CompanyPage from './pages/CompanyPage.jsx';
import Register from './pages/Register.jsx';
import User from './pages/User.jsx';
import Listing from './components/Portfolio/Listing/Listing.jsx'
import Certificate from './components/Portfolio/Certificate/Certificate.jsx';
import UserSettings from './components/Company/UserSettings/UserSettings.jsx'

import { PurchaseProvider } from './components/logic/PurchaseContext.jsx';
import LoginProvider from './components/logic/LoginContext.jsx'

function App() {
  const [isModalVisible, setModalVisible] = useState(true);

  useEffect(() => {
  }, []);

  const handleCloseModal = () => {
    setModalVisible(false);
  };
  return (
    <>
      <div className="App">
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap" rel="stylesheet" />
        </Helmet>
        <LoginProvider>
          <NavBar />
          <div className="content">
            <PurchaseProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/portfolio" element={<Portfolio />} /> 
                <Route path="/login" element={<Login />} />
                <Route path="/company" element={<CompanyPage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/user" element={<User />} />
                <Route path="/portfolio/:id" element={<Listing />} />
                <Route path="/company/:userId" element={<UserSettings />} />
                <Route path="/certificate" element={<Certificate />} />
              </Routes>
            </PurchaseProvider>

          </div>
        </LoginProvider>
        <Footer />
        <Modal isVisible={isModalVisible} onClose={handleCloseModal} />
      </div>
    </>
  );
}

export default App;