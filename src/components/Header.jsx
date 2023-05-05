import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import { ReactComponent as IconCart3 } from "bootstrap-icons/icons/cart3.svg";
import { ReactComponent as IconPersonBadgeFill } from "bootstrap-icons/icons/person-badge-fill.svg";
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import { ReactComponent as IconListCheck } from "bootstrap-icons/icons/list-check.svg";
import { ReactComponent as IconDoorClosedFill } from "bootstrap-icons/icons/door-closed-fill.svg";
import { ReactComponent as IconHeartFill } from "bootstrap-icons/icons/heart-fill.svg";
import { ReactComponent as IconBellFill } from "bootstrap-icons/icons/bell-fill.svg";
import { ReactComponent as IconInfoCircleFill } from "bootstrap-icons/icons/info-circle-fill.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isLoggedInStorage = localStorage.getItem('isLoggedIn');
    if (isLoggedInStorage === 'true') {
      setIsLoggedIn(true);
    }
  }, []);




  const [username, setUsername] = useState('');


  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };



  return (
    <React.Fragment>
      <header className="p-3 border-bottom bg-light">
        <div className="container-fluid">
          <div className="row g-3">
            <div className="col-md-3 text-center">
              <Link to="/">
                <img
                  alt="logo"
                  src="../../images/logo.webp"
                />
              </Link>
            </div>
            <div className="col-md-5">
              <Search />
            </div>
            <div className="col-md-4">


              {/* <div className="btn-group"> */}
              {isLoggedIn ? (
                <>

                  <div className="position-relative d-inline me-3">
                    <Link to="/cart" className="btn btn-primary">
                      <IconCart3 className="i-va" />
                      <div className="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-circle">
                        {/* 2 */}
                      </div>
                    </Link>
                  </div>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-secondary rounded-circle border me-3"
                      data-toggle="dropdown"
                      aria-expanded="false"
                      aria-label="Profile"
                      data-bs-toggle="dropdown"
                    >
                      <FontAwesomeIcon icon={faUser} className="text-light" />
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/account/profile">
                          <IconPersonBadgeFill /> Trang cá nhân
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/account/orders">
                          <IconListCheck className="text-primary" /> Orders
                        </Link>
                      </li>

                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link className="dropdown-item" onClick={handleLogout} to="/">
                          <IconDoorClosedFill className="text-danger" /> Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <li className="btn-group">
                  <button
                    type="button"
                    className="btn btn-primary mb-3"
                  >
                    <Link className="nav-link" to="/account/signin">Sign In</Link>
                  </button>
                </li>
              )}
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};
export default Header;
