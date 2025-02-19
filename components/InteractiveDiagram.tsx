import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Svg from 'react-native-svg';
import SkeletonSvg from '../assets/images/SkeletonSVG.svg'; // Adjust the path as necessary

const { width, height } = Dimensions.get('window');

const InteractiveDiagram = () => {
  const [selectedPart, setSelectedPart] = useState<string | null>(null);

  const handlePress = () => {
    console.log('Image pressed');
    setSelectedPart('Interactivity Successful');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress} style={{ width: '100%', height: '100%' }}>
        <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
          <SkeletonSvg width="100%" height="100%" />
        </Svg>
      </TouchableOpacity>
      {selectedPart && <Text style={styles.label}>{selectedPart}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F7D9',
    width: '100%',
    height: '100%',
  },
  label: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
  },
});

export default InteractiveDiagram;