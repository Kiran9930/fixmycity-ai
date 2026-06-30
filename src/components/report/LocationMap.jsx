import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useState } from "react";

function LocationMarker() {
  const [position, setPosition] = useState([25.2677, 82.9913]); // IIT BHU

  useMapEvents({
    click(e) {
      setPosition([e.latlng.lat, e.latlng.lng]);
    },
  });

  return <Marker position={position} />;
}

function LocationMap() {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">
        📍 Select Issue Location
      </h2>

      <MapContainer
        center={[25.2677, 82.9913]}
        zoom={15}
        style={{
          height: "400px",
          borderRadius: "20px",
        }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <LocationMarker />
      </MapContainer>
    </div>
  );
}

export default LocationMap;