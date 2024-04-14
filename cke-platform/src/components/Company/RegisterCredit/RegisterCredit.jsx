import React, { useState } from 'react';
import './RegisterCredit.css';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';

const RegisterNewCredits = (props) => {


  const [newListing, setNewListing] = useState({
    title: '',
    price: '',
    credits: '',
    type: '',
    imageUrl: 'https://cataas.com/cat',
    imageAlt: '',
    location: '',
    description: '',
    ownerId: props.userInfo._id, // same id as logged in user so we can link up who owns what..
    ownerName: props.userInfo.userName
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const creditTypes = [
    "Tree Stored Carbon",
    "Renewable Energy Credits",
    "Water Purification Offset",
    "Wind Energy",
    "Solar Energy",
    "Ocean Conservation Efforts",
    "Nature Reserve Projects",
    "Soil Sequestration",
    "Geothermal Energy",
    "Air Purification Projects",
    "Waste Management"
  ];

  const verificationAgencies = [
    "Verified Carbon Standard",
    "Gold Standard"
  ];

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5050/portfolio/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newListing)
      })


    } catch (err) {
      console.error(err)
    }
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewListing({ ...newListing, [name]: value });
  };

  const handleAddMore = () => {
    setIsModalOpen(false);
  };

  const handleGoToListings = () => {
    setIsModalOpen(false);
    setActiveTab('currentListings');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="register-credits-form">

        <div className="input-group">
          <label htmlFor="title">Title of listing</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newListing.title}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="title">Description</label>
          <textarea
            type="text"
            id="description"
            name="description"
            value={newListing.description}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="numberOfCredits">Number of credits</label>
          <input
            type="number"
            id="numberOfCredits"
            name="credits"
            value={newListing.credits}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="pricePerCredit">Price per credit</label>
          <input
            type="number"
            id="pricePerCredit"
            name="price"
            value={newListing.price}
            onChange={handleInputChange}
            required
          />
        </div>


        <div className="input-group">
          <label htmlFor="pricePerCredit">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={newListing.location}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="image url">Please paste an image URL</label>
          <input
            type="text"
            id="image Url"
            name="imageUrl"
            value={newListing.imageUrl}
            onChange={handleInputChange}
            required
          />
        </div>


        <div className="input-group">
          <label htmlFor="typeOfCredits">Type of credits</label>
          <select
            id="typeOfCredits"
            name="type"
            value={newListing.type}
            onChange={handleInputChange}
            required
          >
            <option value="">Choose Type of Credits</option>
            {creditTypes.map((type, index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </select>
        </div>


        <button type="submit" className="submit-button" onClick={handleSubmit}>Register Credit</button>

      </form>
      <ConfirmationModal
        isOpen={isModalOpen}
        onAddMore={handleAddMore}
        onGoToListings={handleGoToListings}
      />
    </div>
  );
};

export default RegisterNewCredits;
