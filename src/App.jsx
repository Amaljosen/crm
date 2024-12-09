import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import DashboardList from './DashboardList';
import StaffDetails from './StaffDetails';
import PaymentDetails from './PaymentDetails';
import Order from './Order';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard-list" element={<DashboardList/>} />
        <Route path="/staff" element={<StaffDetails/>}/>
        <Route path="/payment" element={<PaymentDetails/>}/>
        <Route path="/order" element={<Order/>}/>
      </Routes>
    </Router>
  );
}

export default App;