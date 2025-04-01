import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold flex items-center">
          <i className="fas fa-mobile-alt mr-2"></i>
          Mobile Tracker
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-200 transition-colors">
            <i className="fas fa-home mr-1"></i> Home
          </Link>
          <Link to="/map" className="hover:text-blue-200 transition-colors">
            <i className="fas fa-map-marked-alt mr-1"></i> Map View
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;