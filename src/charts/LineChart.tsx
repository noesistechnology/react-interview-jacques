import {
  LineChart as LChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import dumies from '../Table/data.json';

export const LineChart = () => {
  const data = dumies.data.map((item) => ({
    ...item,
    timestamp: new Date(item.timestamp).toDateString(),
  }));
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="records"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="revenue_by_carrier" stroke="#82ca9d" />
      </LChart>
    </ResponsiveContainer>
  );
};
