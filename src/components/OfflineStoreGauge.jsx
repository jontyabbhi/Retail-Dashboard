import React from 'react';
import GaugeChart from 'react-gauge-chart';

const OfflineStoreGauge = () => {
  return (
    <>
      <h3 style={{ textAlign: 'center' }}>Top 20 Stores</h3>
      <GaugeChart
        id="gauge-chart-offline"
        className="store-gauge"
        nrOfLevels={3}
        percent={0.83}
        colors={['#FD0D0D', '#FFBF00', '#32CD32']}
        arcWidth={0.4}
        textColor="black"
        hideText
        style={{
          width: '100%',
          height: 1,
        }}
      />
      <h3 style={{ textAlign: 'center' }}>Store Offline Information</h3>
      <ul style={{ paddingLeft: '1rem' }}>
        <li>543 New Malden – 10:00am to 11:00am</li>
      </ul>
    </>
  );
};

export default OfflineStoreGauge;
