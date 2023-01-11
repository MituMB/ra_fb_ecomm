import React, { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Header.scss";
// import styles from "./Header.module.scss";
import { FaShoppingCart, FaTimes, FaUserCircle } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { Active_User,Remove_Active_User } from "../../redux/slice/authSlice";
import { AdminLink } from "../adminRoute/AdminRoute";
import { selectCartTotalQuantity,Calculate_Total_quantity } from "../../redux/slice/cartSlice";


const logo =(
    <div className="logo">
    <Link to="/ ">
      <h2>
        e<span>Shop.</span>
      </h2>
    </Link>
  </div>
)

const Header = () => {
const [showMenu, setShowMenu] = useState(false);
const [displayName, setdisplayName] = useState("");
const [scrollPage, setScrollPage] = useState(false);

const navigate = useNavigate();
const dispatch = useDispatch()
const cartTotalQuantity = useSelector(selectCartTotalQuantity);
console.log(cartTotalQuantity);
useEffect(() => {
  dispatch(Calculate_Total_quantity());
}, []);
const cart = (
  <span className="cart">
    <Link to="/cart">
      Cart
      <span>
        <FaShoppingCart size={20} />
      </span>
      <p>{cartTotalQuantity}</p>
    </Link>
    {/* <Link to="/cart">Cart</Link> */}
  </span>
);
//== fix navbar
const fixNavbar = () => {
  if (window.scrollY > 50) {
    setScrollPage(true);
  } else {
    setScrollPage(false);
  }
};
window.addEventListener("scroll", fixNavbar);

//===toggle menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  //===active navlink
  const activeLink = ({ isActive }) => (isActive ? `active` : "");

  //===monitor current user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.displayName == null) {
          const u1 = user.email.slice(0, -10);
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1)
          // console.log(uName);
          setdisplayName(uName)
        }else{

          setdisplayName(user.displayName)
        }
        // setdisplayName(user.displayName)
        dispatch(
          Active_User({
            email: user.email,
            userName: user.displayName ? user.displayName : displayName,
            userID: user.uid,
          })
          );
          // console.log(user);
      } else {
        setdisplayName("");
        dispatch(Remove_Active_User())
      }
    });

  }, [dispatch, displayName])
  

  //===logout function

  const logoutUser = () => {
    signOut(auth).then(() => {
      toast.success("Logout successfully.");
        navigate("/");
    }).catch((error) => {
      toast.error(error.message);
    });
  }
  return (
    <header className={scrollPage ? `fixed` : null}>
      <div className="header">
      {logo}

        <nav className={showMenu ? "show-nav" : "hide-nav"}>
          <div className={showMenu ? "nav-wrapper show-nav-wrapper" : "nav-wrapper "}  onClick={closeMenu}>   </div>
            <ul  onClick={closeMenu}>
              <li className="logo-mobile">  
                    {logo} 
                    <FaTimes size={22} onClick={closeMenu}/> 
              </li>
              <li>
              <AdminLink >
                <Link to="/admin/home">
                   <button className="--btn --btn-primary">Admin</button>
                </Link>
              </AdminLink>
              </li>

              <li> <NavLink to="/" className={activeLink}>Home</NavLink></li>
              <li><NavLink to="/contact" className={activeLink}>Contact Us</NavLink></li>
            </ul>
            <div className="header-right" onClick={closeMenu}>
              <span className="links">

                {displayName ? <a href="#home">
                <FaUserCircle size={16} /> {displayName}
                </a> : <NavLink to="/login" className={activeLink}>Login</NavLink> }
                
                
                <NavLink to="/register" className={activeLink}>Register</NavLink>

                {
                  displayName &&  <NavLink to="/order-history" className={activeLink}>My Orders</NavLink> 
                }
               
               {displayName && <Link onClick={logoutUser}>Logout</Link>}
                
              </span>
              {cart}
            </div>
       
        </nav>

        <div className="menu-icon">
          {cart}
          <HiOutlineMenuAlt3 size={28} onClick={toggleMenu}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
