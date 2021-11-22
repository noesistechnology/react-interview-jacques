import {
  BarChart as BChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Line,
} from 'recharts';
import dummies from '../Table/data.json';

export const BarChart = () => {
  const data = dummies.data.map((item) => ({
    ...item,
    timestamp: new Date(item.timestamp).toDateString(),
  }));
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BChart
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

        <Bar dataKey="sends" fill="#8884d8" />
        <Bar dataKey="records" fill="#82ca9d" />
      </BChart>
    </ResponsiveContainer>
  );
};
