import React from 'react';
import { Chart } from 'react-charts';

const MyChart = () => {
  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [
          [0, 1],
          [1, 2],
          [2, 4],
          [3, 2],
          [4, 7],
        ],
        color: '#FF751D',
      },
      {
        label: 'Series 2',
        data: [
          [0, 3],
          [1, 1],
          [2, 5],
          [3, 6],
          [4, 4],
        ],
        color: '#FF751D',
      },
    ],
    [],
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' },
    ],
    [],
  );
  const series = React.useMemo(
    () => ({
      type: 'bar',
    }),
    [],
  );

  return (
    <div
      style={{
        width: '400px',
        height: '300px',
      }}
    >
      <Chart data={data} series={series} axes={axes} />
    </div>
  );
};

export default MyChart;
