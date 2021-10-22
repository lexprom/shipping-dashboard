// @ts-nocheck
import * as d3 from "d3";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MarketRate from "src/models/marketRate";
import {
  MarketRates,
  selectCurrentMarketRateFilter,
} from "src/store/tradeLane/tradeLaneSlice";
import { GXaxis, GYaxis, SVG, Wrapper } from "./LineChart.styles";

interface LineChartProps {
  width: number;
  height: number;
  marketRates: MarketRate[];
}

const LineChart = ({
  width: widthProp,
  height: heightProp,
  marketRates,
}: LineChartProps) => {
  const selectedMarketRateFilter = useSelector(selectCurrentMarketRateFilter);
  const [data, setData] = useState<any[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const width = widthProp,
    height = heightProp,
    color = "#3751FF";
  const yMinValue = d3.min(data, d => d.price),
    yMaxValue = d3.max(data, d => d.price);

  const getX = d3
    .scaleTime()
    .domain(d3.extent(data, d => d.date))
    .range([0, width]);

  const getY = d3
    .scaleLinear()
    .domain([yMinValue - 1, yMaxValue + 2])
    .range([height, 0]);

  const getXAxis = ref => {
    const xAxis = d3.axisBottom(getX);
    d3.select(ref)
      .call(xAxis.tickFormat(d3.timeFormat("%d")))
      .call(g => g.select(".domain").remove());
  };

  const getYAxis = ref => {
    const yAxis = d3.axisLeft(getY).tickSize(-width);
    d3.select(ref)
      .call(yAxis)
      .call(yAxis.tickFormat((d, _) => `${d}$`))
      .call(g => g.select(".domain").remove());
  };

  const linePath = d3
    .line()
    .x(d => getX(d.date))
    .y(d => getY(d.price))
    .curve(d3.curveMonotoneX)(data);

  // const areaPath = d3
  //   .area()
  //   .x(d => getX(d.date))
  //   .y0(d => getY(d.price))
  //   .y1(() => getY(yMinValue - 1))
  //   .curve(d3.curveMonotoneX)(data);

  const handleMouseMove = e => {
    const bisect = d3.bisector(d => d.date).left,
      x0 = getX.invert(d3.pointer(e, this)[0]),
      index = bisect(data, x0, 1);
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  useEffect(() => {
    if (marketRates) {
      const filteredMarketRates = marketRates.map(value => {
        let price = null;
        const timeParser = d3.timeParse("%Y-%m-%d");

        switch (selectedMarketRateFilter) {
          case MarketRates.Low:
            price = value.low;
            break;
          case MarketRates.Average:
            price = value.mean;
            break;
          case MarketRates.High:
            price = value.high;
            break;

          default:
            break;
        }

        return { date: timeParser(value.day), price };
      });

      setData(filteredMarketRates);
    }
  }, [selectedMarketRateFilter, marketRates]);

  return (
    <Wrapper>
      <SVG
        width="100%"
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        // x- and y-axes
        <GYaxis ref={getYAxis} />
        <GXaxis ref={getXAxis} transform={`translate(0,${height})`} />
        // area and line paths
        {/* <path fill={color} d={areaPath} opacity={0.3} /> */}
        <path strokeWidth={2} fill="none" stroke={color} d={linePath} />
        // y-axis label // chart title
        {data.map((item, index) => {
          return (
            <g key={index}>
              // hovering text
              <text
                fill="#fffff"
                x={getX(item.date)}
                y={getY(item.price) - 20}
                textAnchor="middle"
              >
                {index === activeIndex ? item.price : ""}
              </text>
            </g>
          );
        })}
      </SVG>
    </Wrapper>
  );
};

export default LineChart;
