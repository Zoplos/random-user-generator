import React from 'react';
import CardInfo from './CardInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronUp,
  faChevronDown,
  faMars,
  faVenus,
} from '@fortawesome/free-solid-svg-icons';

const Card = ({ userData, showMoreInfo, setShowMoreInfo }) => {
  const toggleInfo = () => {
    setShowMoreInfo(!showMoreInfo);
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  //Data fetched from response stored into variables
  const { name, gender, email, location, phone, picture, nat, dob } = userData;
  const info = { email, location, phone, nat, dob };
  const fullName = `${name.first} ${name.last}`;

  return (
    // Card Container
    <div className="card-container">
      <div
        id="background"
        className="absolute top-0 left-0 w-full h-32 rounded-b-3xl bg-lightGreen z-10"
      ></div>
      <div className="relative flex flex-col items-center justify-center gap-4 space-y-4 pt-4 z-20">
        <img className="profile-img" src={picture.large} alt={fullName} />
        <div className="flex items-center justify-center space-x-4">
          <span className="text-2xl font-medium">{fullName}</span>

          {/* Conditional Rendering for gender icon */}
          {gender === 'male' ? (
            <FontAwesomeIcon className="text-veryLightGreen" icon={faMars} />
          ) : (
            <FontAwesomeIcon className="text-veryLightGreen" icon={faVenus} />
          )}
        </div>
        <div className="border-b-2 border-secondaryGreen w-full"></div>
      </div>
      <CardInfo showMoreInfo={showMoreInfo} info={info} />

      {/* More/Less info button with conditional rendering*/}

      <button className="group info-btn" onClick={toggleInfo}>
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
