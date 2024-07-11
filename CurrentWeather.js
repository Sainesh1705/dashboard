// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const CurrentWeather = ({ city }) => {
//   const [weather, setWeather] = useState(null);

//   useEffect(() => {
//     if (city) {
//       axios.get(`https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&past_days=10&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`)
//         .then(response => setWeather(response.data))
//         .catch(error => console.error(error));
//     }
//   }, [city]);

//   if (!weather) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>{weather.name}</h2>
//       <p>{weather.weather[0].description}</p>
//       <p>{(weather.main.temp - 273.15).toFixed(2)}°C</p>
//     </div>
//   );
// };

// export default CurrentWeather;
import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { currentWeatherData } from '../data/weatherData';

const CurrentWeather = ({ city }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (city) {
      setWeather(currentWeatherData);  // Using local data instead of API
    }
  }, [city]);

  if (!weather) {
    return <div>Loading...</div>;
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{weather.name}</Typography>
        <Typography variant="body1">{weather.weather[0].description}</Typography>
        <Typography variant="body1">{(weather.main.temp - 273.15).toFixed(2)}°C</Typography>
      </CardContent>
    </Card>
  );
};

export default CurrentWeather;
