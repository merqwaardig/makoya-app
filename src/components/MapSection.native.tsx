import React from 'react';
import { StyleSheet, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MONTE_CLERIGO = { latitude: 37.341, longitude: -8.853 };
const LUZ = { latitude: 37.086, longitude: -8.731 };

const CENTER_LAT = (MONTE_CLERIGO.latitude + LUZ.latitude) / 2;
const CENTER_LNG = (MONTE_CLERIGO.longitude + LUZ.longitude) / 2;

interface MapSectionProps {
  onMarkerPress?: (id: string) => void;
}

const MapSection: React.FC<MapSectionProps> = ({ onMarkerPress }) => (
  <MapView
    style={styles.map}
    initialRegion={{
      latitude: CENTER_LAT,
      longitude: CENTER_LNG,
      latitudeDelta: 0.35,
      longitudeDelta: 0.35,
    }}
    scrollEnabled={false}
    zoomEnabled={false}
    rotateEnabled={false}
    pitchEnabled={false}
    mapType="standard"
  >
    {/* Talis — Monte Clérigo */}
    <Marker
      coordinate={MONTE_CLERIGO}
      title="Talis"
      description="Human Design Guru"
      onPress={() => onMarkerPress?.('talis')}
    >
      <Image
        source={require('../../assets/Talis.png')}
        style={styles.markerImage}
      />
    </Marker>

    {/* Mr.Wuwai — Luz */}
    <Marker
      coordinate={LUZ}
      title="Mr.Wuwai"
      description="Energy Specialist"
      onPress={() => onMarkerPress?.('mrwuwai')}
    >
      <Image
        source={require('../../assets/MrWuwai.png')}
        style={styles.markerImage}
      />
    </Marker>
  </MapView>
);

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  markerImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
});

export default MapSection;
