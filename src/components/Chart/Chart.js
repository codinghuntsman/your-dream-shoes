import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import "./Chart.css";
const Chart = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div className='chart-style'>
            <div>
                <LineChart width={400} height={250} data={data}>
                    <Line dataKey={"sell"} ></Line>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={"month"}></XAxis>
                    <YAxis dataKey={"investment"}></YAxis>
                    <Tooltip />
                </LineChart>
            </div>
            <div>
                <LineChart width={400} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month"></XAxis>
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey={"sell"} stroke="#8884d8" ></Line>
                    <Line type="monotone" dataKey={"revenue"} stroke="#8884d8" ></Line>
                </LineChart>
            </div>
            <div>
                <BarChart width={400} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month"></XAxis>
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sell" fill="#8884d8" />
                    <Bar dataKey="revenue" fill="#82ca9d" />
                </BarChart>
            </div>

        </div>
    );
};

export default Chart;