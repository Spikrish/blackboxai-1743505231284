import { useState } from 'react';
import axios from '../services/api';
import { useNavigate } from 'react-router-dom';

const LocationForm = () => {
  const [number, setNumber] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      await axios.post('/api/locations', {
        phoneNumber: number,
        coordinates: {
          latitude: Math.random() * 180 - 90,
          longitude: Math.random() * 360 - 180
        }
      });
      navigate('/map');
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to track number');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
        <i className="fas fa-search-location mr-2"></i>
        Track Mobile Number
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="number">
            Phone Number
          </label>
          <input
            type="tel"
            id="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="+1234567890"
            pattern="\+\d{10,15}"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <p className="text-xs text-gray-500 mt-1">
            Format: + followed by 10-15 digits
          </p>
        </div>
        {error && (
          <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-2 px-4 rounded-lg text-white font-semibold ${
            isLoading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
          } transition-colors`}
        >
          {isLoading ? (
            <>
              <i className="fas fa-spinner fa-spin mr-2"></i>
              Tracking...
            </>
          ) : (
            <>
              <i className="fas fa-map-marker-alt mr-2"></i>
              Track Location
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default LocationForm;