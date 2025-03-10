import { createStackNavigator } from '@react-navigation/stack';
import HighScoresScreen from './HighScoresScreen';

const Stack = createStackNavigator();

export default function HighScoresStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HighScores" component={HighScoresScreen} />
    </Stack.Navigator>
  );
}