import clsx from 'clsx';
import React from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  link: string;
  text?: string;
  icon: JSX.Element;
}

const BioLink: React.FC<Props> = ({ text, link, icon, className }) => {
  return (
    <div className={clsx('flex items-center mb-4', className)}>
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
