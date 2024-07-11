// import React, { useState } from 'react';
// import CitySearch from './CitySearch';
// import CurrentWeather from './CurrentWeather';
// import Forecast from './Forecast';

// const Dashboard = () => {
//   const [city, setCity] = useState('');

//   const handleSearch = (city) => {
//     setCity(city);
//   };

//   return (
//     <div>
//       <CitySearch onSearch={handleSearch} />
//       <CurrentWeather city={city} />
//       <Forecast city={city} />
//     </div>
//   );
// };

// export default Dashboard;
// import React, { useState } from 'react';
// import { Container, Grid } from '@mui/material';
// import CitySearch from './CitySearch';
// import CurrentWeather from './CurrentWeather';
// import Forecast from './Forecast';

// const Dashboard = () => {
//   const [city, setCity] = useState('');

//   const handleSearch = (city) => {
//     setCity(city);
//   };

//   return (
//     <Container>
//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//           <CitySearch onSearch={handleSearch} />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <CurrentWeather city={city} />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Forecast city={city} />
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default Dashboard;
import React, { useState } from 'react';
import { Container, Grid } from '@mui/material';
import CitySearch from './CitySearch';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';

const Dashboard = () => {
  const [city, setCity] = useState('');

  const handleSearch = (city) => {
    setCity(city);
  };

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <CitySearch onSearch={handleSearch} />
        </Grid>
        <Grid item xs={12} md={6}>
          <CurrentWeather city={city} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Forecast city={city} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;

