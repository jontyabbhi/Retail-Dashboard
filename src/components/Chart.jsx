import React, { useRef, useEffect } from 'react';
import ChartJS from 'chart.js';

ChartJS.defaults.scale.gridLines.drawOnChartArea = false;

const Chart = ({ type, data, options, backgroundColor }) => {
  const convasElement = useRef(null);

  useEffect(() => {
    const chartInstance = new ChartJS(convasElement.current, {
      type,
      data,
      options,
    });
    return () => {
      chartInstance.destroy();
    };
  }, [data, options, type]);

  return (
    <div>
      <canvas
        ref={convasElement}
        style={{ background: backgroundColor }}
        width="100%"
        height="60px"
      />
    </div>
  );
};

export default Chart;
