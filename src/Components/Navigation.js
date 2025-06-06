import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-6 justify-center">
        <li>
          <Link to="/" className="text-white hover:text-yellow-400 transition">Homepage</Link>
        </li>
        <li>
          <Link to="/login" className="text-white hover:text-yellow-400 transition">Login</Link>
        </li>
        <li>
          <Link to="/map" className="text-white hover:text-yellow-400 transition">Map</Link>
        </li>
        <li>
          <Link to="/Sandbox" className="text-white hover:text-yellow-400 transition">Sandbox</Link>
        </li>

                <li>
          <Link to="/MainActor" className="text-white hover:text-yellow-400 transition">ProblemsDash</Link>
        </li>

                        <li>
          <Link to="/CreateProblem" className="text-white hover:text-yellow-400 transition">CreateProblem</Link>
        </li>
        
                                <li>
          <Link to="/ProblemSearch" className="text-white hover:text-yellow-400 transition">ProblemSearch</Link>
        </li>

                                        <li>
          <Link to="/ProblemView" className="text-white hover:text-yellow-400 transition">ProblemView</Link>
        </li>
                                                <li>
          <Link to="/IndiProblemView" className="text-white hover:text-yellow-400 transition">IndiProblemView</Link>
        </li>






      </ul>
    </nav>
  );
}

export default Navigation;
