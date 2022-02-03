import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
  console.log(props.current);
  const onProjects = props.current === 'projects' ? 'active' : '';
  const onAbout = props.current === 'about' ? 'active' : '';

  return (
    <nav className='navbar navbar-expand-sm navbar-light bg-light'>
      <div className='container-fluid'>
        <Link className='navbar-brand' href='/projects'>
          Björn Tirsén's Portfolio:
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav m-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>
                Landing Page
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={`nav-link ${onProjects}`}
                aria-current='page'
                to='/projects'
              >
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={`nav-link ${onAbout}`}
                aria-current='page'
                to='/about'
              >
                About Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
