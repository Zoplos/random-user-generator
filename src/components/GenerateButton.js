import React from 'react';

const GenerateButton = ({ generateUser }) => {
  return (
    <button
      onClick={generateUser}
      className=" bg-accent px-4 py-2 rounded-lg border-accent border-2 hover:bg-backgroundWhite transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
    >
      Generate User
    </button>
  );
};

export default GenerateButton;
