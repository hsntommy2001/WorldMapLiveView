import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { icon } from 'leaflet';
import markersData from './markers.json';

const MapPage = () => {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    setMarkers(markersData);
  }, []);

  const customMarkerIcon = icon({
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [0, -41],
  });

  return (
    <MapContainer center={[30, 0]} zoom={3} style={{ height: '90vh' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position} icon={customMarkerIcon}>
          <Popup minWidth={560}>
            <h1 style={{ textAlign: 'center' }}>
                {marker.location.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                    {line}
                    <br />
                </React.Fragment>
                ))}
            </h1>
            <iframe
              title={`YouTube video player ${index + 1}`}
              width="100%"
              height="315"
              src={marker.videoUrl +'?autoplay=1&mute=1'}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            {marker.streetViewUrl && (
                <p align="right">
                <a href={marker.streetViewUrl} target="_blank" rel="noopener noreferrer">
                    Google Street View
                </a>
                </p>
            )}            
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapPage;


           
