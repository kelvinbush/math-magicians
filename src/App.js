import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const App = () => (
  <>
    <h1>Math magicians</h1>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/calculator">Calculator</NavLink>
    <NavLink to="/quote">Quote</NavLink>
    <Outlet />
  </>
);

export default App;
