import { useState } from 'react';
import { useQuery } from 'react-query';
import { DatePicker, Table } from 'antd';
import moment, { Moment } from 'moment';

import { https } from '../helpers';
import dumies from './data.json';

const { RangePicker } = DatePicker;

const columns = [
  {
    title: 'Carrier Id',
    dataIndex: 'carrierId',
    key: 'carrierId',
  },
  {
    title: 'Records',
    dataIndex: 'records',
    key: 'records',
  },
  {
    title: 'Revenue',
    dataIndex: 'revenue_by_carrier',
    key: 'revenue_by_carrier',
  },
  {
    title: 'Sends',
    dataIndex: 'sends',
    key: 'sends',
  },
  {
    title: 'Revenue / sec',
    dataIndex: 'revenue_per_send',
    key: 'revenue_per_send',
  },
  {
    title: 'Errors',
    dataIndex: 'errors',
    key: 'errors',
  },
  {
    title: 'Error rate',
    dataIndex: 'error_rate',
    key: 'error_rate',
  },
  {
    title: 'Time',
    dataIndex: 'timestamp',
    key: 'timestamp',
    render(value: Date) {
      return new Date(value).toDateString();
    },
  },
];

const GET_ALL_REPORTS = 'GET_ALL_REPORTS';

export const DataTable = () => {
  const [date, setDate] = useState<Moment[]>([
    moment().startOf('year'),
    moment(),
  ]);
  const res = useQuery([GET_ALL_REPORTS, date[0], date[1]], () => {
    const [start, end] = date;
    return https.get(
      `/reports/carriers?start=${start.valueOf()}&end=${end.valueOf()}`
    );
  });

  return (
    <div>
      <div className="flex flex-row justify-end my-2">
        <div>
          <RangePicker
            onChange={(values) => {
              const [start, end] = values as Moment[];
              setDate([start, end]);
            }}
            value={[date[0], date[1]]}
          />
        </div>
      </div>
      <Table
        dataSource={dumies.data}
        columns={columns}
        pagination={{ pageSize: 14 }}
      />
    </div>
  );
};
