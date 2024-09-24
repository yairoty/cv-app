import clsx from 'clsx';
import React from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  icon: JSX.Element;
}

const BioText: React.FC<Props> = ({ text, icon, className }) => {
  return (
    <div className={clsx('flex items-center mb-4', className)} key={text}>
      {icon}
      <p className="text-gray-700">{text}</p>
    </div>
  );
};

export default BioText;
