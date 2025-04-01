import { useEffect, useState } from 'react';
import axios from '../services/api';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';

const MapContainer = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [center, setCenter] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get('/locations');
        setLocations(response.data);
        if (response.data.length > 0) {
          setCenter({
            lat: response.data[0].coordinates.latitude,
            lng: response.data[0].coordinates.longitude
          });
        }
      } catch (err) {
        setError('Failed to load locations');
      } finally {
        setLoading(false);
      }
    };
    fetchLocations();
  }, []);

  const mapStyles = {
    height: '400px',
    width: '100%'
  };

  if (loading) return (
    <div className="text-center py-8">
      <i className="fas fa-spinner fa-spin text-blue-500 mr-2"></i>
      Loading map data...
    </div>
  );

  if (error) return (
    <div className="text-center py-8 text-red-500">
      <i className="fas fa-exclamation-triangle mr-2"></i>
      {error}
    </div>
  );

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
        <i className="fas fa-map-marked-alt mr-2"></i>
        Tracked Locations
      </h2>
      <div className="bg-white p-4 rounded-lg shadow">
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={5}
            center={center}
          >
            {locations.map(location => (
              <Marker
                key={location._id}
                position={{
                  lat: location.coordinates.latitude,
                  lng: location.coordinates.longitude
                }}
                label={location.phoneNumber}
              />
            ))}
          </GoogleMap>
        </LoadScript>
        <div className="mt-4 space-y-3">
          {locations.map(location => (
            <div key={location._id} className="p-3 border rounded hover:bg-gray-50 transition-colors">
              <p className="font-medium text-gray-800">
                <i className="fas fa-phone-alt mr-2 text-blue-500"></i>
                {location.phoneNumber}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                <i className="fas fa-map-marker-alt mr-2 text-green-500"></i>
                Latitude: {location.coordinates.latitude.toFixed(4)}, Longitude: {location.coordinates.longitude.toFixed(4)}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                <i className="far fa-clock mr-1"></i>
                Tracked on: {new Date(location.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapContainer;