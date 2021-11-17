import React from "react";
import { useParams } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  Cell,
  ResponsiveContainer,
  LabelList,
  YAxis,
} from "recharts";
// import data from "../../data/catCosts.json";
// import data1 from "../../data/expense.json";

// console.log(data1);

const MobileChart = ({ categs }) => {
  const renderBarLabel = ({ x, y, width, value }) => (
    <text x={x + width / 1.1} y={y} textAnchor="middle" fontSize={10} dy={-10}>
      {value ? `${value} грн` : ""}
    </text>
  );

  const renderCategoryLabel = ({ x, y, value }) => (
    <text x={x} y={y} dy={-10} fontSize={10}>
      {value}
    </text>
  );

  // const screenWidth = window.screen.width;
  // const screenHeight = window.screen.height;
  // console.log(screenWidth, screenHeight);
  const { icon } = useParams();
  const categ = categs.find(categ => categ.icon === icon);
  categ.chart.sort(function (a, b) {
    if (a.total > b.total) {
      return -1;
    }
    if (a.total < b.total) {
      return 1;
    }

    return 0;
  });
  console.log(categ.chart);
  return (
    <ResponsiveContainer
      width="100%"
      height={50 * categ.chart.length}
      // debounce={50}
    >
      <BarChart
        layout="vertical"
        data={categ.chart}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        barGap="15"
      >
        <XAxis hide axisLine={false} type="number" />
        <YAxis dataKey="description" type="category" hide />
        <Bar
          dataKey="total"
          barSize={15}
          radius={[0, 10, 10, 0]}
          label={renderBarLabel}
          fill="#52555f"
          minPointSize={5}
        >
          {categ.chart.map((el, idx) => (
            <Cell key={`cell-${idx}`} fill={idx % 3 ? "#FFDAC0" : "#ff751d"} />
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
