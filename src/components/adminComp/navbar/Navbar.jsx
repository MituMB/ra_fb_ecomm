import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectUserName } from '../../../redux/slice/authSlice';
import "./Navbar.scss";
const Navbar = () => {

  const currentUser = useSelector(selectUserName);
   //active navlink
   const activeLink = ({ isActive }) => (isActive ? `active` : "");
  return (
  <div className="navbar">
      <div className="user">
        <FaUserCircle size={40} color="#fff" />
        <h3 style={{'color':'#fff'}}>{currentUser}</h3>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/admin/home" className={activeLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/allProduct" className={activeLink}>
              All Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/addProduct/ADD" className={activeLink}>
              Add Product
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/orders" className={activeLink}>
              Orders
            </NavLink>
          </li>
        </ul>
      </nav>
  </div>
  )
}

export default Navbar