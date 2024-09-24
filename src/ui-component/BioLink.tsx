import React from 'react';

interface Props {
  link: string;
  text?: string;
  icon: JSX.Element;
}

const BioLink: React.FC<Props> = ({ text, link, icon }) => {
  return (
    <div className="flex items-center mb-4">
      {icon}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        {text || link}
      </a>
    </div>
  );
};

export default BioLink;
