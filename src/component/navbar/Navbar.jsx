import React from "react";
import "./navbar.css";
import { NavLink, Link } from "react-router-dom";
import { useGlobalState } from "../../context";

const Navbar = () => {
  const { isMenuOpen, toggleMenu, closeMobileMenu } = useGlobalState();

  return (
    <nav>
      <div className="wrapper">
        <div className="nav__center">
          {/* nav left */}
          <div className="nav__left flex">
            <Link to="." className="nav__logo">
              <img src="./assets/shared/logo.svg" alt="logo" />
            </Link>
            <button className="nav__hamburger__btn" onClick={toggleMenu}>
              <img src="./assets/shared/icon-hamburger.svg" alt="open menu" />
            </button>
            <div className="nav__line"></div>
          </div>

          {/* nav right */}
          <div className={`nav__right ${isMenuOpen && "show"}`}>
            <div className="nav__navlinks">
              <button className="nav__close__btn" onClick={toggleMenu}>
                <img src="./assets/shared/icon-close.svg" alt="close menu" />
              </button>
              <div className="nav__links">
                <ul className="links">
                  {/* nav links */}
                  <li>
                    <NavLink
                      to="."
                      className={({ isActive }) =>
                        isActive ? "nav__active" : null
                      }
                      onClick={closeMobileMenu}
                    >
                      <span className="nav__link__num">00</span> home
                    </NavLink>
                  </li>
                  {/* nav links */}
                  <li>
                    <NavLink
                      to="destination"
                      className={({ isActive }) =>
                        isActive ? "nav__active" : null
                      }
                      onClick={closeMobileMenu}
                    >
                      <span className="nav__link__num">01</span> destination
                    </NavLink>
                  </li>
                  {/* nav links */}
                  <li>
                    <NavLink
                      to="crew"
                      className={({ isActive }) =>
                        isActive ? "nav__active" : null
                      }
                      onClick={closeMobileMenu}
                    >
                      <span className="nav__link__num">02</span> crew
                    </NavLink>
                  </li>
                  {/* nav links */}
                  <li>
                    <NavLink
                      to="technology"
                      className={({ isActive }) =>
                        isActive ? "nav__active" : null
                      }
                      onClick={closeMobileMenu}
                    >
                      <span className="nav__link__num">03</span> technology
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
