import React from 'react';

const GenerateButton = ({ generateUser }) => {
  return (
    <button
      onClick={generateUser}
      className=" bg-accent px-4 py-2 rounded-lg border-accent border-2 hover:bg-backgroundWhite "
    >
      Generate User
    </button>
  );
};

export default GenerateButton;
