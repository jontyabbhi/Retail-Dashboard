import React, { useState } from 'react';
import { Dropdown, Icon } from 'semantic-ui-react';

import Chart from './Chart';

import devicePerStore from '../data/device-per-store.json';
import devicePerStoreDays from '../data/device-per-store-days.json';

const StoresWiseChart = () => {
  const [selectedDevice, setSelectedDevice] = useState('Till');
  const [device, setDevice] = useState(devicePerStore[selectedDevice]);

  const labels = [543, 358, 898, 390, 703];
  const deviceDropDown = [
    { key: 1, text: 'Till', value: 'Till' },
    { key: 2, text: 'Tablet', value: 'Tablet' },
    { key: 3, text: 'Phone', value: 'Phone' },
    { key: 4, text: 'Wi-Fi', value: 'Wi-Fi' },
    { key: 5, text: 'Printer', value: 'Printer' },
  ];
  const daysDropDown = [
    { key: 1, text: 'Last 10 Days', value: 1 },
    { key: 2, text: 'Last 15 Days', value: 2 },
    { key: 3, text: 'Last 30 Days', value: 3 },
  ];

  const props = {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label: `Device - ${selectedDevice}`,
          data: device,
          backgroundColor: '#A569BD',
        },
      ],
    },
    options: {
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

  const handleDeviceChange = (event, { value }) => {
    setSelectedDevice(value);
    setDevice(devicePerStore[value]);
  };

  const handleDayChange = (event, { value }) => {
    const devicePerStoreDay = devicePerStoreDays[value];
    setDevice(devicePerStoreDay[selectedDevice]);
  };

  return (
    <div className="chart-size">
      <div style={{ display: 'flex' }}>
        <h3 style={{ marginRight: '0.3rem' }}>Top 5 Impacted Stores</h3>
        <Icon
          name="download"
          style={{
            cursor: 'pointer',
            paddingTop: '0.2rem',
          }}
        />
      </div>
      <Chart {...props} />
      <div className="chart-header-container">
        <Dropdown
          placeholder="Device"
          selection
          compact
          options={deviceDropDown}
          style={{ width: '30%' }}
          defaultValue={deviceDropDown[0].value}
          onChange={handleDeviceChange}
        />
        <Dropdown
          placeholder="Days"
          selection
          compact
          options={daysDropDown}
          style={{ width: '45%', marginLeft: '.2rem' }}
          defaultValue={daysDropDown[0].value}
          onChange={handleDayChange}
        />
      </div>
    </div>
  );
};

export default StoresWiseChart;
