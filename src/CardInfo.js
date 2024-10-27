import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faLocationDot,
  faPhone,
  faFlag,
  faCakeCandles,
} from '@fortawesome/free-solid-svg-icons';

const CardInfo = ({ showMoreInfo, info }) => {
  const location = `${info.location.city}, ${info.location.state}`;
  const birthday = info.dob.date.slice(0, 10);

  return (
    <div className="info-container">
      <div className="flex gap-2 items-center">
        <FontAwesomeIcon
          className="text-veryLightGreen mr-2"
          icon={faEnvelope}
        />
        <span>{info.email}</span>
      </div>

      <div className="flex gap-2 items-center ">
        <FontAwesomeIcon
          className="text-veryLightGreen mr-2"
          icon={faLocationDot}
        />
        <span>{location}</span>
      </div>
      <div className="flex gap-2 items-center ">
        <FontAwesomeIcon className="text-veryLightGreen mr-2" icon={faPhone} />
        <span>{info.phone}</span>
      </div>
      {showMoreInfo && (
        <>
          <div className="border-b-2 border-dotted border-secondaryGreen w-full"></div>

          <div className="flex gap-2 items-center ">
            <FontAwesomeIcon
              className="text-veryLightGreen mr-2"
              icon={faFlag}
            />
            <span>{info.nat}</span>
          </div>
          <div className="flex gap-2 items-center ">
            <FontAwesomeIcon
              className="text-veryLightGreen mr-2"
              icon={faCakeCandles}
            />
            <span>{birthday}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default CardInfo;
