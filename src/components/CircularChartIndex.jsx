import React, { useState } from 'react';
import Request from '../img/RequestLimitIcon.png'

function CircularProgressBar() {
  const [progress, setProgress] = useState(70); // Set the progress value here (between 0 to 100)
  const remainingProgress = 100 - progress;
  const circumference = 2 * Math.PI * 56;
  const offset = (remainingProgress / 100) * circumference; // Calculate offset based on remaining progress

  const progressStyle = {
    strokeDasharray: circumference,
    strokeDashoffset: offset,
    stroke: '#72A8F9',
    strokeWidth: 10,
    strokeLinecap: 'round',
    strokeBorderColor: '#000000',
    transform: 'rotate(-90deg)', // Rotate the progress bar to face left
    transformOrigin: 'center', // Set the rotation origin to the center
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
      </div>
      
      <div className="info-container">
        <div className="info-box">
          <div className="info-row">
            <span className="info-label">Card Limit</span>
            <span className="info-value">RM 1000.00</span>
          </div>
          <div className="info-row">
            <span className="info-label">Utilized</span>
            <span className="info-value">RM 321.00</span>
          </div>
          <div className="info-row">
            <span className="info-label">Balance</span>
            <span className="info-value">RM 679.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CircularProgressBar;
