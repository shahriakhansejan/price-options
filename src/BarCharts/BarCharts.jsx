import PropTypes from 'prop-types';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

const BarCharts = () => {

    const data = [
        {
          "name": "Page A",
          "uv": 4000,
          "pv": 2400
        },
        {
          "name": "Page B",
          "uv": 3000,
          "pv": 1398
        },
        {
          "name": "Page C",
          "uv": 2000,
          "pv": 9800
        },
        {
          "name": "Page D",
          "uv": 2780,
          "pv": 3908
        },
        {
          "name": "Page E",
          "uv": 1890,
          "pv": 4800
        },
        {
          "name": "Page F",
          "uv": 2390,
          "pv": 3800
        },
        {
          "name": "Page G",
          "uv": 3490,
          "pv": 4300
        }
      ]


    return (
        <div>
            <BarChart width={750} height={275} data={data}>
                <CartesianGrid strokeDasharray='5 5'></CartesianGrid>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Bar dataKey={'pv'} fill='green'></Bar>
                <Bar dataKey={'uv'} fill='red'></Bar>

            </BarChart>
        </div>
    );
};

BarCharts.propTypes = {
    
};

export default BarCharts;