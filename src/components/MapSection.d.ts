import React from 'react';

interface MapSectionProps {
  onMarkerPress?: (id: string) => void;
}

declare const MapSection: React.FC<MapSectionProps>;
export default MapSection;
