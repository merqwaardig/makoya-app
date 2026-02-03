import React, { useEffect, useCallback } from 'react';

// On web, require() for images returns a number or an object with uri
// We need to get the actual URI string
function getImageUri(source: any): string {
  if (typeof source === 'string') return source;
  if (typeof source === 'number') return ''; // can't resolve static requires on web easily
  if (source && source.uri) return source.uri;
  if (source && source.default) return source.default;
  return '';
}

const talisUri = getImageUri(require('../../assets/Talis.png'));
const mrwuwaiUri = getImageUri(require('../../assets/MrWuwai.png'));

const MONTE_CLERIGO = { lat: 37.341, lng: -8.853 };
const LUZ = { lat: 37.086, lng: -8.731 };

interface MapSectionProps {
  onMarkerPress?: (id: string) => void;
}

const MapSection: React.FC<MapSectionProps> = ({ onMarkerPress }) => {
  const handleMessage = useCallback((event: MessageEvent) => {
    if (event.data === 'marker-talis' || event.data === 'marker-mrwuwai') {
      onMarkerPress?.(event.data.replace('marker-', ''));
    }
  }, [onMarkerPress]);

  useEffect(() => {
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [handleMessage]);

  const leafletHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"><\/script>
  <style>
    body { margin: 0; padding: 0; }
    #map { width: 100%; height: 100vh; }
    .custom-marker {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2.5px solid white;
      box-shadow: 0 2px 6px rgba(0,0,0,0.3);
      background-size: cover;
      background-position: center;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div id="map"></div>
  <script>
    var map = L.map('map', {
      zoomControl: false,
      attributionControl: false,
      dragging: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      boxZoom: false,
      keyboard: false,
      touchZoom: false,
    }).fitBounds([
      [${MONTE_CLERIGO.lat}, ${MONTE_CLERIGO.lng}],
      [${LUZ.lat}, ${LUZ.lng}]
    ], { padding: [30, 30] });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(map);

    var talisIcon = L.divIcon({
      className: '',
      html: '<div class="custom-marker" style="background-image: url(${talisUri})"></div>',
      iconSize: [36, 36],
      iconAnchor: [18, 18],
    });

    var mrwuwaiIcon = L.divIcon({
      className: '',
      html: '<div class="custom-marker" style="background-image: url(${mrwuwaiUri})"></div>',
      iconSize: [36, 36],
      iconAnchor: [18, 18],
    });

    L.marker([${MONTE_CLERIGO.lat}, ${MONTE_CLERIGO.lng}], { icon: talisIcon })
      .addTo(map)
      .on('click', function() { window.parent.postMessage('marker-talis', '*'); });

    L.marker([${LUZ.lat}, ${LUZ.lng}], { icon: mrwuwaiIcon })
      .addTo(map)
      .on('click', function() { window.parent.postMessage('marker-mrwuwai', '*'); });
  <\/script>
</body>
</html>`;

  return (
    <iframe
      srcDoc={leafletHtml}
      style={{
        width: '100%',
        height: '100%',
        border: 'none',
      } as any}
      scrolling="no"
    />
  );
};

export default MapSection;
