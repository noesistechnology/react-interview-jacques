import { Typography } from 'antd';
import { LineChart } from '../charts';
import { BarChart } from '../charts/BarChart';

const { Title } = Typography;
export const Dashboard = () => {
  return (
    <div className="w-full container my-4">
      <div className="h-96 w-full">
        <Title level={5}>Records vs Revenue by Carrier</Title>
        <LineChart />
      </div>
      <div className="h-96 my-4">
        <Title level={5}>Records vs Sends</Title>
        <BarChart />
      </div>
    </div>
  );
};
