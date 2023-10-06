import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import MusicPlayer from './src/screens/MusicPlayer';
import PlayerRap from './src/screens/PlayerRap';
import PlayerPop from './src/screens/PlayerPop';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return(
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false}}>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='MusicPlayer' component={MusicPlayer} />
          <Stack.Screen name='PlayerRap' component={PlayerRap} />
          <Stack.Screen name='PlayerPop' component={PlayerPop} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;