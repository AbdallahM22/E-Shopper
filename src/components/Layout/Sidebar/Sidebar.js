import React from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";


const Sidebar = () => {
  return (
        <div className="content">
          <button
            className="btn d-flex justify-content-between align-items-center w-100"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseItems"
            aria-expanded="false"
            aria-controls="collapseItems"
          >
            <h5 className="head">Categories</h5>
            <FontAwesomeIcon icon={faChevronDown} size="1x" />
          </button>
          <div className="collapse w-100" id="collapseItems">
          <ul
            className="nav flex-column w-100"
          >
            <li className="nav-item">
              
                <div className="dropdown w-100">
                  <button
                    className="btn dropdown-toggle w-100"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dresses
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="/">
                        Men's Dresses
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                      women's Dresses
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                      Baby's Dresses
                      </a>
                    </li>
                  </ul>
                </div>
              
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Shirts
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Jeans
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Swimwear
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                sleepwear
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Jeans
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Jeans
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Jeans
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Jeans
              </a>
            </li>
          </ul>
          </div>
          
        </div>

  );
};

export default Sidebar;
