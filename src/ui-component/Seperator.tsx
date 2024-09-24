import React from 'react';

interface Props {
  width?: number;
}

const defaultSeperatorWidth = 2;
const Seperator: React.FC<Props> = ({ width = defaultSeperatorWidth }) => {
  return <div style={{ width }} className="relative w-1 bg-gray-500"></div>;
};

export default Seperator;
