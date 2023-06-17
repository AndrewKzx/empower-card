import React, { useState } from 'react';
import Request from '../img/RequestLimitIcon.png'
import RadialBarChart from '../components/RadialBarChart';

function CircularProgressBar() {
  const [progress, setProgress] = useState(70); // Set the progress value here (between 0 to 100)
  const remainingProgress = 100 - progress;
  const circumference = 2 * Math.PI * 56;
  const offset = (remainingProgress / 100) * circumference; // Calculate offset based on remaining progress

  const chartData = [32.1]

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
    <div className='flex px-4'>
        <div className='w-1/2 rounded-xl border border-[#5C97F0]'>
          <h3 className='text-md text-center font-bold mt-4 text-[#2B69F5]'>Total Utilization</h3>
          <RadialBarChart chartData={chartData} label='% Utilized' color='#2B69F5' />
          <a href="./RequestPage.html" className="rounded-button">
        <img src={Request} alt="Request Limit" className="button-image" />
            Request Limit Increase
            </a>
        </div>
        <div className='w-1/2 bg-[#9087FB] ml-2 rounded-xl flex flex-col p-4'>
        <h3 className='text-white text-sm font-bold'>Card Limit</h3>
          <h3 className='text-white text-sm'>RM 1000.00</h3>
          <br></br>
          <h3 className='text-white text-sm font-bold'>Utilized</h3>
          <h3 className='text-white text-sm'>RM 321.00</h3>
          <br></br>
          <h3 className='text-white text-sm font-bold'>Balance</h3>
          <h3 className='text-white text-sm'>RM 679.00</h3>
        </div>
      </div>
  );
}

export default CircularProgressBar;
