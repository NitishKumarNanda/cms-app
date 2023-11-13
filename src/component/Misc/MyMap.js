import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function MyMap() {
    return (
        <MapContainer
          center={[28.4595, 77.0266]}
          zoom={13}
          style={{ width: '100%', height: '400px' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[25.579393, 85.116714]}>
            <Popup>
              A sample popup. Replace with your content.
            </Popup>
          </Marker>
        </MapContainer>
      );
}
