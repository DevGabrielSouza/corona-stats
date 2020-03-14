import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../../constants';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Daily = () => {
  const [ dataChart, setDataChart ] = useState();
  useEffect(() => {
    async function fetchDailyData() {
      const res = await fetch(`${API_URL}/daily`).then(data => data.json());
      setDataChart(res);
      console.log(res);
    }
    fetchDailyData();
  }, []);

  function BuildChart() {
    return (
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
        <AreaChart
          width={500}
          height={400}
          data={dataChart}
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="reportDateString" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="totalConfirmed" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="totalRecovered" stroke="#7ca48b" fill="#82ca9d" />
        </AreaChart>
        </ResponsiveContainer>
      </div>
    )
  }

  return (
    <>
      <h1>Gráfico</h1>
      <p>Como o contágio global evoluiu do dia 20/01/2020 até hoje</p>
      <Link to="/">&larr; Voltar para dados e filtros</Link>
      <BuildChart />
    </>
  )
}

export default Daily;