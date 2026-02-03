import React, { useEffect, useCallback, useRef } from 'react';
import { View, StyleSheet } from 'react-native';

const MONTE_CLERIGO = { lat: 37.341, lng: -8.853 };
const LUZ = { lat: 37.086, lng: -8.731 };

interface MapSectionProps {
  onMarkerPress?: (id: string) => void;
}

const MapSection: React.FC<MapSectionProps> = ({ onMarkerPress }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);

  const handleMarkerClick = useCallback((id: string) => {
    onMarkerPress?.(id);
  }, [onMarkerPress]);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    // Dynamically load Leaflet CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(link);

    // Dynamically load Leaflet JS
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.onload = () => {
      const L = (window as any).L;
      if (!L || !containerRef.current) return;

      const map = L.map(containerRef.current, {
        zoomControl: false,
        attributionControl: false,
      }).fitBounds(
        [
          [MONTE_CLERIGO.lat, MONTE_CLERIGO.lng],
          [LUZ.lat, LUZ.lng],
        ],
        { padding: [40, 40] }
      );

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
      }).addTo(map);

      // Create custom avatar markers
      const createAvatarIcon = (imageUrl: string) =>
        L.divIcon({
          className: '',
          html: `<div style="
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 3px solid white;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            background-image: url('${imageUrl}');
            background-size: cover;
            background-position: center;
            cursor: pointer;
          "></div>`,
          iconSize: [40, 40],
          iconAnchor: [20, 20],
        });

      // Resolve image paths
      const talisImg = require('../../assets/Talis.png');
      const mrwuwaiImg = require('../../assets/MrWuwai.png');
      const talisUri = typeof talisImg === 'string' ? talisImg : (talisImg?.default || talisImg?.uri || '');
      const mrwuwaiUri = typeof mrwuwaiImg === 'string' ? mrwuwaiImg : (mrwuwaiImg?.default || mrwuwaiImg?.uri || '');

      L.marker([MONTE_CLERIGO.lat, MONTE_CLERIGO.lng], {
        icon: createAvatarIcon(talisUri),
      })
        .addTo(map)
        .on('click', () => handleMarkerClick('talis'));

      L.marker([LUZ.lat, LUZ.lng], {
        icon: createAvatarIcon(mrwuwaiUri),
      })
        .addTo(map)
        .on('click', () => handleMarkerClick('mrwuwai'));

      mapRef.current = map;
    };
    document.body.appendChild(script);

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [handleMarkerClick]);

  return (
    <View style={styles.container}>
      <div
        ref={containerRef}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MapSection;
