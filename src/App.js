import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const App = () => (
  <>
    <div className="nav">
      <h1>Math Magicians</h1>
      <div className="nav__links">
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? '#f5913e' : 'black',
          })}
          className="nav__link"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? '#f5913e' : 'black',
          })}
          className="nav__link"
          to="/calculator"
        >
          Calculator
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? '#f5913e' : 'black',
          })}
          className="nav__link"
          to="/quote"
        >
          Quote
        </NavLink>
      </div>
    </div>
    <Outlet />
  </>
);

export default App;
