import React from 'react';
import { Icon } from 'semantic-ui-react';

import Chart from './Chart';

const ProblemAgingChart = () => {
  const labels = ['Till', 'Tablet', 'Phone', 'Wi-Fi', 'Printer'];
  const maxAgeData = [2, 3, 4, 5, 6];
  const minAgeData = [5, 4, 1, 2, 3];

  const props = {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label: 'Max Age(Days)',
          data: maxAgeData,
          backgroundColor: '#FF6666',
        },
        {
          label: 'Min Age(Days)',
          data: minAgeData,
          backgroundColor: '#1E90FF',
        },
      ],
    },
    options: {
      onClick: (event, item) => {},
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
      responsive: true,
      layout: {
        padding: 10,
      },
    },
  };

  return (
    <div className="chart-size">
      <div style={{ display: 'flex' }}>
        <h3 style={{ marginRight: '0.3rem' }}>Problem Aging</h3>
        <Icon
          name="download"
          style={{
            cursor: 'pointer',
            paddingTop: '0.3rem',
          }}
        />
      </div>
      <Chart {...props} />
    </div>
  );
};

export default ProblemAgingChart;
