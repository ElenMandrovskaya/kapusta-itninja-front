import React from 'react';


import {
  BarChart,
  Bar,
  XAxis,
  Cell,
  ResponsiveContainer,
  LabelList,
  YAxis,
} from 'recharts';
import data from '../../data/catCosts.json';

// console.log(data[0].chart);

const MobileChart = () => {
  const MobileBarLabel = ({ x, y, width, value }) => (
    <text x={x + width / 1.1} y={y} textAnchor="middle" fontSize={10} dy={-10}>
      {value ? `${value} грн` : ''}
    </text>
  );

  const MobileCategoryLabel = ({ x, y, value }) => (
    <text x={x} y={y} dy={-10} fontSize={10}>
      {value}
    </text>
  );
  return (
    <ResponsiveContainer width="100%" height={485}>
      <BarChart
        layout="vertical"
        data={data[1].chart}
        margin={{ top: 30, right: 0, bottom: 30, left: 0 }}
        className="chartText"
      >
        <Bar
          dataKey="Total"
          barSize={15}
          radius={[0, 10, 10, 0]}
          label={<MobileBarLabel />}
          fill="#52555f"
          minPointSize={80}
        >
          {data.map((el, idx) => (
            <Cell key={`cell-${idx}`} fill={idx % 3 ? '#FFDAC0' : '#ff751d'} />
          ))}
          <LabelList
            dataKey="Description"
            content={<MobileCategoryLabel />}
            fill="#52555F"
          />
        </Bar>

        <XAxis type="number" hide={true} />
        <YAxis dataKey="Description" type="category" scale="band" hide={true} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MobileChart;
