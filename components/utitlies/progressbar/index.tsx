import React from 'react';

interface ProgressBarProps {
  /**
   * The progress value, a number between 0 and 100.
   */
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress=10 }) => {
  return (
    <div className="w-full h-2.5 rounded-full bg-bggrey">
      <div
        className="h-full rounded-full bg-btnbg"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
