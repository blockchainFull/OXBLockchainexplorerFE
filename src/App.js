import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Dashboard from './components/dashboard/Dashboard';
import Blockdetail from './components/detail/Blockdetail';
import Transdetail from './components/detail/Transdetail';


// Redux
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';

const App = () => {
  useEffect(() => {
    // check for token in LS when app first runs
    if (localStorage.token) {
      // if there is a token set axios headers for all requests
      setAuthToken(localStorage.token);
    }
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/blockdetail/:blocknumber" element={<Blockdetail />} />
          <Route path="/transdetail/:transhash" element={<Transdetail />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
