// import React, { useState } from 'react';
// import Authentication from './components/Authentication';
// import Dashboard from './components/Dashboard';
// import ErrorBoundary from './components/ErrorBoundary';
// import './App.css';

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   return (
//     <div className="App">
//       <ErrorBoundary>
//         {isAuthenticated ? (
//           <Dashboard />
//         ) : (
//           <Authentication onLogin={setIsAuthenticated} />
          
//         )}
//       </ErrorBoundary>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Authentication from './components/Authentication';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (status) => {
    setIsAuthenticated(status);
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <Dashboard />
      ) : (
        <Authentication onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
