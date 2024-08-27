import React from 'react';
import { Link } from 'react-router-dom'; // Add this import

const ulstyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  listStyle: 'none',
  padding: '0',
  margin: '0',
}

const Navigation = () => {
  return (
    <nav>

      <ul style={ulstyle}>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/about-me">About-Me</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;


// import React from 'react';

// const Navigation = () => {
//   return (
//     <nav>
//       <ul>
//         <li>About Me</li>
//         <li>Portfolio</li>
//         <li>Contact</li>
//         <li>Resume</li>
//       </ul>
//     </nav>
//   );
// };

// export default Navigation;

