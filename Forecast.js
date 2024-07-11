// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Line } from 'react-chartjs-2';

// const Forecast = ({ city }) => {
//   const [forecast, setForecast] = useState(null);

//   useEffect(() => {
//     if (city) {
//       axios.get(`https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`)
//         .then(response => setForecast(response.data))
//         .catch(error => console.error(error));
//     }
//   }, [city]);

//   if (!forecast) {
//     return <div>Loading...</div>;
//   }

//   const data = {
//     labels: forecast.list.map(item => new Date(item.dt * 1000).toLocaleTimeString()),
//     datasets: [{
//       label: 'Temperature (°C)',
//       data: forecast.list.map(item => (item.main.temp - 273.15).toFixed(2)),
//       borderColor: 'rgba(75,192,192,1)',
//       fill: false
//     }]
//   };

//   return <Line data={data} />;
// };

// export default Forecast;
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Card, CardContent, Typography } from '@mui/material';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { forecastData } from '../data/weatherData';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Forecast = ({ city }) => {
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    if (city) {
      setForecast(forecastData);  // Using local data instead of API
    }
  }, [city]);

  if (!forecast) {
    return <div>Loading...</div>;
  }

  const data = {
    labels: forecast.list.map(item => new Date(item.dt * 1000).toLocaleDateString()),
    datasets: [{
      label: 'Temperature (°C)',
      data: forecast.list.map(item => (item.main.temp - 273.15).toFixed(2)),
      borderColor: 'rgba(75,192,192,1)',
      fill: false
    }]
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">7-Day Forecast</Typography>
        <Line data={data} />
      </CardContent>
    </Card>
  );
};

export default Forecast;

