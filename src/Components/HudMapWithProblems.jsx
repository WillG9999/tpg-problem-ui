import React, { useEffect, useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Circle,
  Popup,
  useMap,
  useMapEvents,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const API_URL = 'http://localhost:8080/api/define/create/problem';
const HARDCODED_USER_ID = 'demo-user-123';

const PESTLE_SUGGESTIONS = ['Political', 'Economic', 'Social', 'Technological', 'Legal', 'Environmental'];
const LEVELS = ['local', 'regional', 'national', 'international'];

const MapController = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    if (center) map.setView(center, zoom || map.getZoom());
  }, [center, zoom, map]);
  return null;
};

const MapClickCapture = ({ onClick }) => {
  useMapEvents({
    click(e) {
      onClick([e.latlng.lat, e.latlng.lng]);
    },
  });
  return null;
};

const HudMapWithProblems = () => {
  const [postcode, setPostcode] = useState('');
  const [locationData, setLocationData] = useState(null);
  const [centerCoords, setCenterCoords] = useState([53.48, -2.24]);
  const [circleCoords, setCircleCoords] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedPestle, setSelectedPestle] = useState([]);
  const [zoomLevel, setZoomLevel] = useState(13);
  const [problems, setProblems] = useState([]);

  const [newProblemCoords, setNewProblemCoords] = useState(null);
  const [newProblemData, setNewProblemData] = useState({
    title: '',
    statement: '',
   
    level: '',
    pestle: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSearch = async () => {
    try {
      const res = await fetch(`https://api.postcodes.io/postcodes/${postcode.replace(/\s/g, '')}`);
      const data = await res.json();
      if (data.status === 200) {
        const result = data.result;
        const coords = [result.latitude, result.longitude];
        setLocationData(result);
        setCenterCoords(coords);
        setCircleCoords(coords);
      } else {
        alert('Postcode not found.');
      }
    } catch {
      alert('Error fetching postcode.');
    }
  };

  const distanceBetween = (coords1, coords2) => {
    const R = 6371e3;
    const [lat1, lon1] = coords1.map((v) => v * (Math.PI / 180));
    const [lat2, lon2] = coords2.map((v) => v * (Math.PI / 180));
    const a = Math.sin((lat2 - lat1) / 2) ** 2 +
              Math.cos(lat1) * Math.cos(lat2) * Math.sin((lon2 - lon1) / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  };

  const filteredProblems = problems.filter((problem) => {
    if (!circleCoords) return true;
    const dist = distanceBetween(circleCoords, problem.coordinates);
    const matchesLevel = selectedLevel ? problem.level === selectedLevel : true;
    const matchesPestle =
      selectedPestle.length > 0 ? selectedPestle.every((p) => (problem.pestle || []).includes(p)) : true;
    return dist < 5000 && matchesLevel && matchesPestle;
  });

  const togglePestle = (tag) => {
    setSelectedPestle((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const toggleNewProblemPestle = (tag) => {
    setNewProblemData((prev) => ({
      ...prev,
      pestle: prev.pestle.includes(tag)
        ? prev.pestle.filter((t) => t !== tag)
        : [...prev.pestle, tag],
    }));
  };

  const handleSubmit = async () => {
    if (!newProblemCoords) return;

    const payload = {
      ...newProblemData,
      pestle: newProblemData.pestle.join(','), // send as comma-separated string
      level: newProblemData.level,
      location: newProblemCoords.join(','),
      created_by_user_id: HARDCODED_USER_ID,
    };

    console.log('Sending payload:', payload);

    try {
      setIsSubmitting(true);
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-User-Id': HARDCODED_USER_ID,
        },
        body: JSON.stringify(payload),
      });

      const responseText = await response.text();
      console.log('Server response:', response.status, responseText);

      if (!response.ok) throw new Error('Problem creation failed');

      // convert pestle back to array before saving to state
      setProblems((prev) => [
        ...prev,
        {
          ...payload,
          id: Date.now(),
          coordinates: newProblemCoords,
          pestle: payload.pestle.split(','),
        },
      ]);

      setNewProblemCoords(null);
      setNewProblemData({
        title: '',
        statement: '',
        level: '',
        pestle: [],
      });
    } catch (err) {
      alert('Error submitting problem.');
      console.error('Submit error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={styles.wrapper}>
      <MapContainer center={centerCoords} zoom={zoomLevel} style={styles.map}>
        <TileLayer
          attribution="&copy; OpenStreetMap & CartoDB"
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        <MapController center={centerCoords} zoom={zoomLevel} />
        <MapClickCapture onClick={setNewProblemCoords} />

        {circleCoords && (
          <>
            <Circle center={circleCoords} radius={1000} pathOptions={{ color: 'blue', fillOpacity: 0.1 }} />
            <Marker position={circleCoords}>
              <Popup>
                📍 {locationData?.postcode} <br />
                {locationData?.admin_district}
              </Popup>
            </Marker>
          </>
        )}

        {filteredProblems.map((p) => (
          <Marker key={p.id} position={p.coordinates}>
            <Popup>
              <strong>{p.title}</strong><br />
              {p.statement || p.description}<br />
              <em>{p.level || 'n/a'} | {(p.pestle || []).join(', ')}</em>
            </Popup>
          </Marker>
        ))}

        {newProblemCoords && (
          <Marker position={newProblemCoords}>
            <Popup>📌 New Problem Location</Popup>
          </Marker>
        )}
      </MapContainer>

      <div style={styles.hud}>
        <h3>📍 HUD</h3>
        <input
          type="text"
          placeholder="Enter postcode"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleSearch} style={styles.button}>Search</button>

        <h4>Level</h4>
        <select
          value={selectedLevel}
          onChange={(e) => setSelectedLevel(e.target.value)}
          style={styles.select}
        >
          <option value="">All Levels</option>
          {LEVELS.map((lvl) => (
            <option key={lvl} value={lvl}>{lvl}</option>
          ))}
        </select>

        <h4>PESTLE</h4>
        <div style={styles.tags}>
          {PESTLE_SUGGESTIONS.map((tag) => (
            <button
              key={tag}
              onClick={() => togglePestle(tag)}
              style={{
                ...styles.tag,
                backgroundColor: selectedPestle.includes(tag) ? '#444' : '#eee',
                color: selectedPestle.includes(tag) ? '#fff' : '#333',
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        {newProblemCoords && (
          <div style={{ marginTop: '1rem' }}>
            <h4>Create Problem</h4>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={newProblemData.title}
              onChange={(e) => setNewProblemData({ ...newProblemData, title: e.target.value })}
              style={styles.input}
            />
            <textarea
              name="statement"
              placeholder="Statement"
              value={newProblemData.statement}
              onChange={(e) => setNewProblemData({ ...newProblemData, statement: e.target.value })}
              style={{ ...styles.input, height: '80px' }}
            />

            <select
              value={newProblemData.level}
              onChange={(e) => setNewProblemData({ ...newProblemData, level: e.target.value })}
              style={styles.select}
            >
              <option value="">Select Granularity Level</option>
              {LEVELS.map((lvl) => (
                <option key={lvl} value={lvl}>{lvl}</option>
              ))}
            </select>

            <div style={styles.tags}>
              {PESTLE_SUGGESTIONS.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleNewProblemPestle(tag)}
                  style={{
                    ...styles.tag,
                    backgroundColor: newProblemData.pestle.includes(tag) ? '#444' : '#eee',
                    color: newProblemData.pestle.includes(tag) ? '#fff' : '#333',
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>

            <button onClick={handleSubmit} disabled={isSubmitting} style={styles.button}>
              {isSubmitting ? 'Submitting...' : 'Submit Problem'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  wrapper: { height: '100vh', width: '100vw', position: 'relative' },
  map: { height: '100%', width: '100%' },
  hud: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    background: '#fff',
    padding: '1rem',
    borderRadius: '8px',
    zIndex: 1000,
    maxWidth: '320px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    fontFamily: 'sans-serif'
  },
  input: {
    width: '100%', padding: '0.5rem', fontSize: '1rem',
    borderRadius: '4px', border: '1px solid #ccc', marginBottom: '0.5rem'
  },
  button: {
    width: '100%', padding: '0.5rem', backgroundColor: '#333',
    color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer'
  },
  select: {
    width: '100%', padding: '0.4rem', fontSize: '1rem',
    borderRadius: '4px', border: '1px solid #ccc', marginBottom: '0.5rem'
  },
  tags: {
    display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.5rem'
  },
  tag: {
    padding: '0.3rem 0.6rem', borderRadius: '4px',
    border: '1px solid #ccc', fontSize: '0.85rem', cursor: 'pointer'
  }
};

export default HudMapWithProblems;
