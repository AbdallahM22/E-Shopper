import React from "react";
import { Link , useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import Logo from "../../UI/Logo";
import './Navbar.css';
import { logout } from "../../../store/slices/Auth-slice";
import { clearCart } from "../../../store/slices/Cart-slice";



const Navbar = () => {
  const isLogin = useSelector(state => state.auth.token);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const logoutHandler = ()=> {
    dispatch(logout());
    dispatch(clearCart());
    localStorage.removeItem('cart');
    navigate('/')
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        <Link to="/home" className="navbar-brand d-lg-none">
          <Logo />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
          </ul> 
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {!isLogin && <li className="nav-item">
              <Link className="nav-link" to="/auth">
                Login
              </Link>
            </li>}
            {isLogin && <li className="nav-item">
              <button className="nav-link btn " onClick={logoutHandler}>
                Logout
              </button>
            </li>}
            </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
