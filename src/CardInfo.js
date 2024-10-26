import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faLocationDot,
  faPhone,
  faFlag,
} from '@fortawesome/free-solid-svg-icons';

const CardInfo = ({ showMoreInfo, info }) => {
  const location = `${info.location.city}, ${info.location.state}`;
  return (
    <div className="info-container">
      <div className="flex gap-2 items-center">
        <FontAwesomeIcon className="text-white mr-2" icon={faEnvelope} />
        <span>{info.email}</span>
      </div>

      <div className="flex gap-2 items-center ">
        <FontAwesomeIcon className="text-white mr-2" icon={faLocationDot} />
        <span>{location}</span>
      </div>
      <div className="flex gap-2 items-center ">
        <FontAwesomeIcon className="text-white mr-2" icon={faPhone} />
        <span>{info.phone}</span>
      </div>
      {showMoreInfo && (
        <>
          <div className="border-b-2 border-dotted border-secondaryGreen w-full"></div>

          <div className="flex gap-2 items-center ">
            <FontAwesomeIcon className="text-white mr-2" icon={faFlag} />
            <span>{info.nat}</span>
          </div>
          <span>extra info</span>
          <span>extra info</span>
        </>
      )}
    </div>
  );
};

export default CardInfo;
