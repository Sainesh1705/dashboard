// import React, { useState } from 'react';

// const CitySearch = ({ onSearch }) => {
//   const [city, setCity] = useState('');

//   const handleSearch = () => {
//     onSearch(city);
//   };

//   return (
//     <div>
//       <input type="text" placeholder="Enter city" value={city} onChange={(e) => setCity(e.target.value)} />
//       <button onClick={handleSearch}>Search</button>
//     </div>
//   );
// };

// export default CitySearch;
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const CitySearch = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    onSearch(city);
  };

  return (
    <div>
      <TextField 
        label="Enter city" 
        variant="outlined" 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
      />
      <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};

export default CitySearch;
