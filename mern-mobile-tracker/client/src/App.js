import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LocationForm from './components/LocationForm';
import MapContainer from './components/MapContainer';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<LocationForm />} />
            <Route path="/map" element={<MapContainer />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;