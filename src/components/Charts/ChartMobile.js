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
// import data from '../../data/catCosts.json';
import data1 from '../../data/expense.json';

// console.log(data1);

const MobileChart = () => {
  const renderBarLabel = ({ x, y, width, value }) => (
    <text x={x + width / 1.1} y={y} textAnchor="middle" fontSize={10} dy={-10}>
      {value ? `${value} грн` : ''}
    </text>
  );

  const renderCategoryLabel = ({ x, y, value }) => (
    <text x={x} y={y} dy={-10} fontSize={10}>
      {value}
    </text>
  );
  data1.sort(function (a, b) {
    if (a.amount > b.amount) {
      return -1;
    }
    if (a.amount < b.amount) {
      return 1;
    }

    return 0;
  });
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  // console.log(screenWidth, screenHeight);

  return (
    <ResponsiveContainer width="100%" height={50 * data1.length} debounce={50}>
      <BarChart
        layout="vertical"
        data={data1}
        margin={{ top: 30, right: 0, bottom: 30, left: 0 }}
      >
        <XAxis hide axisLine={false} type="number" />
        <YAxis dataKey="description" type="category" hide />
        <Bar
          dataKey="amount"
          barSize={15}
          radius={[0, 10, 10, 0]}
          label={renderBarLabel}
          fill="#52555f"
          minPointSize={80}
        >
          {data1.map((el, idx) => (
            <Cell key={`cell-${idx}`} fill={idx % 3 ? '#FFDAC0' : '#ff751d'} />
          ))}
          <LabelList
            dataKey="description"
            content={renderCategoryLabel}
            fill="#52555F"
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MobileChart;
