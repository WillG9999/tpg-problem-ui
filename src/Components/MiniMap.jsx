import React from 'react';
import {
  MapContainer,
  TileLayer,
  Circle,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const styles = {
  map: {
    width: '33.3333vw',
    height: '50vh',
    borderRadius: '0.75rem',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
};

const MapController = ({ center, zoom }) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
};

const ClickHandler = ({ onLocationSelect }) => {
  useMapEvents({
    click(e) {
      onLocationSelect([e.latlng.lat, e.latlng.lng]);
    },
  });
  return null;
};

const MiniMap = ({
  mapCenter = [51.505, -0.09],
  zoomLevel = 13,
  recenterTrigger = false,
  circleCoords = null,
  onLocationSelect = () => {},
  selectedCoords = null,
}) => {
  return (
    <div className="p-4">
      <MapContainer
        center={mapCenter}
        zoom={zoomLevel}
        style={styles.map}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors & CartoDB'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />

        {recenterTrigger && <MapController center={mapCenter} zoom={zoomLevel} />}
        {circleCoords && (
          <Circle
            center={[circleCoords.lat, circleCoords.lng]}
            radius={circleCoords.radius}
            pathOptions={{ color: 'blue', fillOpacity: 0.2 }}
          />
        )}

        <ClickHandler onLocationSelect={onLocationSelect} />

        {selectedCoords && (
          <Marker position={selectedCoords}>
            <Popup>📌 Selected Location</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default MiniMap;
