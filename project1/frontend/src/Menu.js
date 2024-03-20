import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import Form from './Form';

function Menu() {
  const [nav, setNav] = useState(true);

  const handleToggleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg  fixed-top ${'navbar-transparent'}`}>
        <div className="container-fluid">
          <h3 className='text-center text-dark' id="text">Welcome</h3>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleToggleNav}
          >
            <i className="bx bx-menu"></i>
          </button>
          <div className={`collapse navbar-collapse ${nav ? 'show' : ''}`} id="btn">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link mx-3 fs-5" id="navtext">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/gallery" className="nav-link mx-3 fs-5" id="navtext">
                  Gallery
                </Link>
              </li>
                <>
                  <li className="nav-item">
                    <Link to="/form" className="nav-link mx-3 fs-5" id="navtext">
                      Emp login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/adminform" className="nav-link mx-3 fs-5" id="navtext">
                      Admin login
                    </Link>
                  </li>
                </>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Menu;
