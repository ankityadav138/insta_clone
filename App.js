import AppNavigator from './src/containers/main/AppNavigator';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';




function App() {
  return <NavigationContainer>{<AppNavigator />}</NavigationContainer>;
}

export default App;
