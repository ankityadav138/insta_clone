import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import {
  StatusBar,
} from 'react-native';
import MainNavigator from './MainNavigator';
import SignUp from '../auth/SignUpScreen';
import LogScreen from '../auth/LogScreen';
import AsyncStorage from '@react-native-async-storage/async-storage'
import ActivityIndicators from './../../components/ActivityIndicators'
import ForgotPassword from '../auth/ForgotPassword'
import ResetPassword from '../auth/ResetPassword'

StatusBar.setBarStyle('light-content');

export default function AppNavigator({ navigation }) {

  const NavigateToStoryCamera = () => navigation.navigate('StoryCamera');
  const Stack = createStackNavigator();

  const [validate, setValidate] = React.useState(false);
  const [loading, setLoading] = useState(false)

  const checkToken = async () => {
    var token = await AsyncStorage.getItem('token')
    if (token) {
      setValidate(true)
    } else {
      setValidate(false)
    }
  }
  useEffect(() => {
    checkToken();
  }, [])


  return validate ? (
    <MainNavigator />
  ) : (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LogScreen}
        options={{
          headerStyle: { backgroundColor: '#000' },
          headerTintColor: '#fff',
          headerTransparent: true,
          title: '',
        }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUp}
        options={{
          headerStyle: { backgroundColor: '#000' },
          headerTintColor: '#fff',
          headerTransparent: true,
          title: '',
        }}
      />
      <Stack.Screen
        name="MainNavigator"
        component={MainNavigator}
        options={{ title: '', headerShown: false }}
        NavigateToStoryCamera={NavigateToStoryCamera}
      />
      <Stack.Screen
        name='ForgotPassword'
        component={ForgotPassword}
        options={{
          headerStyle: { backgroundColor: '#000' },
          headerTintColor: '#fff',
          headerTransparent: true,
          title: ''
        }}
      />
      <Stack.Screen
        name='ResetPassword'
        component={ResetPassword}
        options={{
          headerStyle: { backgroundColor: '#000' },
          headerTintColor: '#fff',
          headerTransparent: true,
          title: ''
        }}
      />
    </Stack.Navigator>

  );
}