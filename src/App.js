import React, { useState, useEffect } from 'react';
import MapPage from './MapPage';
import 'leaflet/dist/leaflet.css';
import markersData from './markers.json';


const App = () => {
  const [totalMarkers, setTotalMarkers] = useState(0);

  // Calculate the total count of markers
  useEffect(() => {
    setTotalMarkers(markersData.length);
  }, []);


  return (
    <div>
      <h1>World Map Live View (Total : {totalMarkers})</h1>
      <MapPage />
    </div>
  );
};

export default App;
