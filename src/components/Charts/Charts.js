import React from 'react';
import { useParams } from 'react-router-dom';

import { BG, CartsBg } from './Charts.styled';
import { BarChart, Bar, XAxis, Cell } from 'recharts';
import MobileChart from './ChartMobile';

const renderCustomBarLabel = ({ x, y, width, value }) => {
    return (
        <text
            x={x + width / 2}
            y={y - 4}
            fill="#666"
            textAnchor="middle"
            dy={-10}
        >{`${value} грн`}</text>
    );
};

const MyChart = ({ categs }) => {
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

    const screenWidth = window.screen.width;
    // const screenHeight = window.screen.height;

    return screenWidth > 320 ? (
        <BG>
            <CartsBg>
                <BarChart
                    width={605}
                    height={328}
                    data={categ.chart}
                    margin={{ top: 50, right: 15, bottom: 9, left: 15 }}
                    barCategoryGap={20}
                >
                    <XAxis dataKey="description" axisLine={false} tickLine={false} dy={5}></XAxis>

                    <Bar
                        // isAnimationActive={true}
                        dataKey="total"
                        barSize={38}
                        fill="#fd8905"
                        label={renderCustomBarLabel}
                        radius={[10, 10, 0, 0]}
                        animationDuration={1000}
                    >
                        {categ.chart.map((el, idx) => (
                            <Cell key={`cell-${idx}`} fill={idx % 3 ? '#FFDAC0' : '#ff751d'} />
                        ))}
                    </Bar>
                </BarChart>
            </CartsBg>
        </BG>
    ) : (
        <MobileChart categs={categs} />
    );
};

export default MyChart;
