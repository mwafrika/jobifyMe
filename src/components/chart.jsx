import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const BarChartComponent = () => {
  const data = [
    {
      count: 2,
      date: 'Jan 2022',
    },
    {
      count: 3.5,
      date: 'Feb 2022',
    },
    {
      count: 3,
      date: 'Mar 2022',
    },
    {
      count: 2,
      date: 'Apr 2022',
    },
    {
      count: 1,
      date: 'May 2022',
    },
    {
      count: 4,
      date: 'Jun 2022',
    },
    {
      count: 3,
      date: 'Jul 2022',
    },
    {
      count: 8,
      date: 'Aug 2022',
    },
    {
      count: 2,
      date: 'Sep 2022',
    },
    {
      count: 3,
      date: 'Oct 2022',
    },
    {
      count: 2,
      date: 'Nov 2022',
    },
    {
      count: 3,
      date: 'Dec 2022',
    },
  ];
  return (
    <ResponsiveContainer width='100%' height={300}>
      <BarChart
        data={data}
        margin={{
          top: 50,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='date' />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Bar dataKey='count' fill='#2cb1bc' barSize={75} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
