import { clsx } from 'clsx';
import React from 'react';

type TagStyle = 'dark' | 'white';

interface Props {
  text: string;
  variant?: TagStyle;
}

const Tag: React.FC<Props> = ({ text, variant = 'dark' }) => {
  return (
    <div
      className={clsx(
        'py-1 px-3 rounded-full text-sm print:border-l-black  text-nowrap border-2 ',
        variant === 'dark'
          ? 'bg-gray-700 text-white border-gray-700'
          : 'bg-white  text-black font-semibold border-cyan-800',
      )}
    >
      {text}
    </div>
  );
};

export default Tag;

/*

*/
