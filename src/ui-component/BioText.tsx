import React from 'react';

interface Props {
  text: string;
  icon: JSX.Element;
}

const BioText: React.FC<Props> = ({ text, icon }) => {
  return (
    <div className="flex items-center mb-4" key={text}>
      {icon}
      <p className="text-gray-700">{text}</p>
    </div>
  );
};

export default BioText;
