import clsx from 'clsx';
import React, { useMemo } from 'react';

interface Props {
  text: string;
  className?: string;
}

const Text: React.FC<Props> = ({ text, className }) => {
  const textLines: string[] = useMemo(() => {
    return text.replace(/\s+/g, ' ').split('<br/>');
  }, [Text]);

  return (
    <div className={clsx(className)}>
      {textLines.map((line, idx) => (
        <div key={idx}>{line}</div>
      ))}
    </div>
  );
};

export default Text;
