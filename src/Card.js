import React, { useState } from 'react';
import CardInfo from './CardInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronUp,
  faChevronDown,
  faMars,
  faVenus,
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Card = ({ userData }) => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const handleToggleInfo = () => {
    setShowMoreInfo(!showMoreInfo);
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  const { name, gender, email, location, phone, picture, nat } = userData;
  const info = { email, location, phone, nat };
  const fullName = `${name.first} ${name.last}`;

  return (
    // Card Container
    <div className="card-container">
      <div
        id="background"
        className="absolute top-0 left-0 w-full h-32 rounded-b-3xl bg-accent z-10"
      ></div>
      <div className="relative flex flex-col items-center justify-center gap-4 space-y-4 pt-4 z-20">
        <img className="profile-img" src={picture.large} alt={fullName} />
        <div className="flex items-center justify-center space-x-4">
          <span className="text-2xl font-medium">{fullName}</span>

          {/* Conditional Rendering for gender icon */}
          {gender === 'male' ? (
            <FontAwesomeIcon className="text-white" icon={faMars} />
          ) : (
            <FontAwesomeIcon className="text-white" icon={faVenus} />
          )}
        </div>
        <div className="border-b-2 border-secondaryGreen w-full"></div>
      </div>
      <CardInfo showMoreInfo={showMoreInfo} info={info} />

      {/* More/Less info button with conditional rendering*/}

      <button className="group info-btn" onClick={handleToggleInfo}>
        {showMoreInfo ? (
          <FontAwesomeIcon
            className="text-secondaryGreen group-hover:text-white"
            icon={faChevronUp}
          />
        ) : (
          <FontAwesomeIcon
            className="text-secondaryGreen group-hover:text-white"
            icon={faChevronDown}
          />
        )}
      </button>
    </div>
  );
};

export default Card;
