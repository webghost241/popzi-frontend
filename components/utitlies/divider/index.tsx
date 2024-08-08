import React from 'react';

interface DividerProps {

}

const Divider: React.FC<DividerProps> = () => {
  return (
    <div
      className={`w-full border-t border-bgd mt-3`}
    ></div>
  );
};

export default Divider;
