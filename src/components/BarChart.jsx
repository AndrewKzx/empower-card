import React from 'react';
import Chart from 'react-apexcharts';

const BarChart = ({ data }) => {
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 8,
        dataLabels: {
          position: 'top',
        },
      },
    },
    dataLabels: {
      enabled: true,
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ['#304758'],
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return val;
        },
      },
    },
    colors: ['#D8F1FF', '#008000', '#0000FF', '#FFA500', '#800080', '#1965BF'],
  };

  const series = [
    {
      name: 'Corporate Card Transactions',
      data: data,
    },
  ];

  return (
    <Chart
      options={options}
      series={series}
      type="bar"
      height={350}
    />
  );
};

export default BarChart;
