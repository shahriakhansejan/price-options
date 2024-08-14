import React from 'react';
import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis } from 'recharts';

const LineChartData = () => {
    const LineData =[
        { "id": 1, "name": "Alice", "physics": 85, "chemistry": 78, "math": 90 },
        { "id": 2, "name": "Bob", "physics": 70, "chemistry": 82, "math": 75 },
        { "id": 3, "name": "Charlie", "physics": 92, "chemistry": 88, "math": 85 },
        { "id": 4, "name": "David", "physics": 78, "chemistry": 65, "math": 80 },
        { "id": 5, "name": "Eve", "physics": 88, "chemistry": 92, "math": 95 },
        { "id": 6, "name": "Frank", "physics": 82, "chemistry": 75, "math": 78 },
        { "id": 7, "name": "Grace", "physics": 90, "chemistry": 85, "math": 92 },
        { "id": 8, "name": "Hannah", "physics": 76, "chemistry": 80, "math": 85 },
        { "id": 9, "name": "Ian", "physics": 85, "chemistry": 78, "math": 80 },
        { "id": 10, "name": "Jasmine", "physics": 92, "chemistry": 90, "math": 88 }
      ]
      
    return (
        <div className='mt-24'>
            <LineChart width={500} height={400} data={LineData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey={'physics'} stroke='red'></Line>
                <Line dataKey={'math'} stroke='green'></Line>
                <Line dataKey={'chemistry'} stroke='black'></Line>


            </LineChart>
            
        </div>
    );
};

LineChartData.propTypes = {
    
};

export default LineChartData;