import React, { useState } from 'react';
import { Dropdown, Button, Icon } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';

import stores from '../data/stores.json';

import Chart from './Chart';

const DeviceWiseChart = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [store, setStore] = useState(241);

  const labels = ['Till', 'Tablet', 'Phone', 'Wi-Fi', 'Printer'];
  const maxAgeData = [12, 3, 7, 5, 11];

  const storeDropDown = stores.map(({ id, name }, index) => ({
    key: index,
    text: `${id}-${name}`,
    value: id,
  }));

  const props = {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label: `Store - ${store}`,
          data: maxAgeData,
          backgroundColor: '#F5B041',
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

  const CustomButton = ({ onClick, value }) => (
    <Button basic onClick={onClick}>
      {value}
    </Button>
  );

  return (
    <div className="chart-size">
      <div style={{ display: 'flex' }}>
        <h3 style={{ marginRight: '0.3rem' }}>Top 20 Stores</h3>
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
        <DatePicker
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
          }}
          customInput={<CustomButton />}
        />
        <Dropdown
          placeholder="Store"
          selection
          compact
          search
          options={storeDropDown}
          style={{ width: '60%' }}
          defaultValue={storeDropDown[0].value}
          onChange={(event, { value }) => setStore(value)}
        />
      </div>
    </div>
  );
};

export default DeviceWiseChart;
