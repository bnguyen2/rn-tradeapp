import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { VictoryLine, VictoryChart, VictoryAxis } from 'victory-native';

const LinePriceChart = ({ data }) => {
  const { colors } = useContext(ThemeContext);

  const firstPrice = data[0];
  const lastPrice = data[data.length - 1];

  const isIncreasing = firstPrice.y < lastPrice.y;

  return (
    <VictoryChart
      theme={{
        axis: {
          style: {
            grid: {
              fill: 'none',
              stroke: 'none',
            },
            ticks: {
              fill: 'transparent',
              size: 5,
              stroke: colors.lakeBlue,
            },
            tickLabels: {
              fill: colors.lakeBlue,
              padding: 5,
            },
          },
        },
      }}
    >
      <VictoryAxis
        dependentAxis
        label="Price"
        style={{
          axisLabel: { fontSize: 14, stroke: colors.lakeBlue, textAnchor: 'middle' },
          axis: { stroke: colors.lakeBlue },
        }}
      />

      <VictoryAxis
        label="Date"
        style={{
          axisLabel: { fontSize: 14, stroke: colors.lakeBlue, textAnchor: 'middle', padding: 30 },
          axis: { stroke: colors.lakeBlue },
        }}
      />

      <VictoryLine
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 },
        }}
        style={{
          data: {
            stroke: isIncreasing ? colors.green : colors.red,
            strokeWidth: 2,
          },
        }}
        data={data}
      />
    </VictoryChart>
  );
};

export default LinePriceChart;
