import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const InteractiveDiagram = () => {
  const [selectedPart, setSelectedPart] = useState<string | null>(null);

  const handlePress = (part: string) => {
    setSelectedPart(part);
  };

  return (
    <View style={styles.container}>
      <Svg width="200" height="200" viewBox="0 0 200 200">
        <Circle cx="50" cy="50" r="30" fill="red" onPress={() => handlePress('left-atrium')} />
        <Circle cx="150" cy="50" r="30" fill="red" onPress={() => handlePress('right-atrium')} />
        <Circle cx="50" cy="150" r="30" fill="red" onPress={() => handlePress('left-ventricle')} />
        <Circle cx="150" cy="150" r="30" fill="red" onPress={() => handlePress('right-ventricle')} />
      </Svg>
      {selectedPart && <Text style={styles.label}>{selectedPart.replace('-', ' ')}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F7D9',
  },
  label: {
    marginTop: 20,
    fontSize: 18,
    color: 'black',
  },
});

export default InteractiveDiagram;