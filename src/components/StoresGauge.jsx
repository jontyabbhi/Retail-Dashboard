import React from 'react';
import GaugeChart from 'react-gauge-chart';

const StoresGauge = ({ data }) => {
  return (
    <div className="store-gauge-container">
      {data.map(({ value, totalStores }, index) => (
        <GaugeChart
          id={`gauge-chart${index}`}
          className="store-gauge"
          key={index}
          nrOfLevels={3}
          percent={value / totalStores}
          colors={['#32CD32', '#FFBF00', '#FD0D0D']}
          arcWidth={0.4}
          arcsLength={[0.1, 0.3, 0.6]}
          arcPadding={0.02}
          textColor="black"
          style={{ width: '20%', height: 1 }}
        />
      ))}
    </div>
  );
};

export default StoresGauge;
