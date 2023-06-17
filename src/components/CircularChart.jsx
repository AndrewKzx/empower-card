import React, { useState } from 'react';

function CircularProgressBar() {
  const [progress, setProgress] = useState(70); // Set the progress value here (between 0 to 100)
  const remainingProgress = 100 - progress;
  const circumference = 2 * Math.PI * 56;
  const offset = circumference - (progress / 100) * circumference;

  const progressStyle = {
    strokeDasharray: circumference,
    strokeDashoffset: offset,
    stroke: '#5e5eff',
  };

  return (
    <div className="progress-container">
      <div className="rounded-box">
        <svg className="progress-bar">
          <circle
            className="text-lightgray"
            cx="50%"
            cy="50%"
            r="56"
            strokeWidth="10"
            fill="transparent"
          />
          <circle
            className="text-blue-500"
            cx="50%"
            cy="50%"
            r="56"
            strokeWidth="10"
            fill="transparent"
            style={progressStyle}
          />
          <text
            className="text-black text-center text-xl font-bold"
            x="50%"
            y="45%"
            dominantBaseline="middle"
            textAnchor="middle"
          >
            {`${remainingProgress}%`}
          </text>
          <text
            className="text-black text-center text-base font-bold"
            x="50%"
            y="60%"
            dominantBaseline="middle"
            textAnchor="middle"
          >
            Utilized
          </text>
        </svg>
        <button className="rounded-button">Request Limit Increase</button>
      </div>
    </div>
  );
}

export default CircularProgressBar;
