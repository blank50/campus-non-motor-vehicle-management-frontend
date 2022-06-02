import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout, loadUser } from "../../actions/authAction";
import { clearVehicles } from "../../actions/vehicleAction";
import "./Navbar.css"
import { navItems } from "./NavItems";
import Dropdown from "./Dropdown";

const Navbar = ({
  title,
  icon,
  isAuthenticated,
  logout,
  user,
  clearVehicles,
  loadUser
}) => {
  useEffect(() => {loadUser();
  }, []);

  const onLogout = () => {
    logout();
    clearVehicles();
  };

  const [dropdown, setDropdown] = useState(false);


  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960){
      setButton(false);
    }
    else{
      setButton(true);
    }
  };
useEffect(() => {
  showButton();
}, []);


window.addEventListener('resize',showButton);

const changeBackground = () => {
  if(window.scrollY >= 80){
    setNavbar(true)
  }else{
    setNavbar(false);
  }
}
window.addEventListener('scroll', changeBackground);

  const authLinks = (
    <Fragment>
      <li>
        <Link to="/vehicles">
          <span style={{ color: "#fff" }}></span>
        </Link>
      </li>

      <li>Hello {user && user.name}</li>
      <li>
        <a onClick={onLogout} href="#!">
          {/* <i className="fas fa-sign-out-alt" />{" "} */}
          <span>Logout</span>
          
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );
  

  return (
    <div className="navbar bg-primary">
      {/* <nav className={navbar ? 'navbar-active' : 'navbar'}> */}
        {/* <div className="container"></div> */}
      <div className="navbar-container">
        <h1>
        <i className="" />{title}
        </h1>  
        </div>
      <ul className="nav-items">
      {navItems.map((item) => {
            if (item.title === "Academics") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
      </ul>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
      {/* </nav> */}
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: "E-Bike Register",
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});

export default connect(mapStateToProps, { logout, clearVehicles, loadUser })(
  Navbar
);
