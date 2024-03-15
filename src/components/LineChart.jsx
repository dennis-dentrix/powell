/* eslint-disable react/prop-types */
import { LineChart } from "@mui/x-charts/LineChart";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
// const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];

export default function LinechartCompt({ width, height }) {
  return (
    <LineChart
      width={Number(width)}
      height={Number(height)}
      series={[{ data: uData, label: "uv" }]}
      xAxis={[{ scaleType: "point", data: xLabels }]}
    />
  );
}
