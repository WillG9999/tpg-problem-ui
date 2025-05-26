import React, { useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Circle,
  Marker,
  Popup,
  useMap
} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

const PESTLE_SUGGESTIONS = {
  London: ['Political', 'Economic', 'Social'],
  'Greater Manchester': ['Social', 'Technological'],
  Birmingham: ['Legal', 'Environmental'],
  default: ['Political', 'Economic', 'Social', 'Technological', 'Legal', 'Environmental'],
};

// Helper for centering/zooming map
const MapController = ({ center, zoom }) => {
  const map = useMap();
  if (center) map.setView(center, zoom || map.getZoom());
  return null;
};

const HudMapComponent = () => {
  const [postcode, setPostcode] = useState('');
  const [locationData, setLocationData] = useState(null);
  const [pestleFactors, setPestleFactors] = useState([]);
  const [zoomLevel, setZoomLevel] = useState(13);
  const [mapCenter, setMapCenter] = useState([53.48, -2.24]); // Default to Manchester
  const [recenterTrigger, setRecenterTrigger] = useState(false);
  const [circleCoords, setCircleCoords] = useState(null);

  const handleSearch = async () => {
    try {
      const res = await fetch(`https://api.postcodes.io/postcodes/${postcode.replace(/\s/g, '')}`);
      const data = await res.json();

      if (data.status === 200) {
        const result = data.result;
        const coords = [result.latitude, result.longitude];
        setLocationData(result);
        setMapCenter(coords);
        setCircleCoords(coords);
        setRecenterTrigger(true); // trigger map recenter
        const region = result.region || result.admin_district || 'default';
        setPestleFactors(PESTLE_SUGGESTIONS[region] || PESTLE_SUGGESTIONS.default);
      } else {
        setLocationData(null);
        setPestleFactors([]);
        alert('Postcode not found.');
      }
    } catch {
      alert('Error fetching postcode data.');
    }
  };

  const handleRecenter = () => {
    setRecenterTrigger(true);
  };

  return (
    <div style={styles.wrapper}>
      <MapContainer center={mapCenter} zoom={zoomLevel} style={styles.map}>
       <TileLayer
  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors & CartoDB'
  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
/>

        {recenterTrigger && (
          <MapController center={mapCenter} zoom={zoomLevel} />
        )}
        {circleCoords && (
  <>
    <Circle
      center={circleCoords}
      radius={1000} // 1km radius
      pathOptions={{ color: 'blue', fillOpacity: 0.1 }}
    />
    <Marker position={circleCoords}>
      <Popup>
        📍 {locationData?.postcode} <br />
        {locationData?.admin_district}
      </Popup>
    </Marker>
  </>
)}

      </MapContainer>

      <div style={styles.hud}>
        <h3>📍 Map HUD</h3>
        <input
          type="text"
          placeholder="Enter postcode"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleSearch} style={styles.button}>Search</button>
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
          <button onClick={() => setZoomLevel(z => z + 1)} style={styles.button}>Zoom In</button>
          <button onClick={() => setZoomLevel(z => z - 1)} style={styles.button}>Zoom Out</button>
          <button onClick={handleRecenter} style={styles.button}>Recenter</button>
        </div>

        {locationData && (
          <div style={styles.locationBox}>
            <p><strong>Region:</strong> {locationData.region}</p>
            <p><strong>Constituency:</strong> {locationData.parliamentary_constituency}</p>
            <p><strong>Admin District:</strong> {locationData.admin_district}</p>
            <h4>PESTLE Suggestions</h4>
            <ul>
              {pestleFactors.map(f => <li key={f}>{f}</li>)}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    height: '100vh',
    width: '100vw',
    position: 'relative',
  },
  map: {
    height: '100%',
    width: '100%',
  },
  hud: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    background: 'rgba(255, 255, 255, 0.95)',
    padding: '1rem',
    borderRadius: '8px',
    maxWidth: '300px',
    zIndex: 1000,
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    marginBottom: '0.5rem',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '0.4rem 0.8rem',
    fontSize: '0.9rem',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#333',
    color: '#fff',
    cursor: 'pointer',
  },
  locationBox: {
    marginTop: '0.75rem',
    backgroundColor: '#f5f5f5',
    padding: '0.5rem',
    borderRadius: '6px',
  },
};

export default HudMapComponent;
