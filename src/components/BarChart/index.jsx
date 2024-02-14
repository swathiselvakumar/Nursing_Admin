import { useTheme } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function BarChartComp({ chartData }) {
  const theme = useTheme();
  return (
    <BarChart
      width={500}
      height={200}
      data={chartData}
      margin={{
        top: 10,
        right: 50,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis dataKey="avg" />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill={theme.background.primary} />
    </BarChart>
  );
}
