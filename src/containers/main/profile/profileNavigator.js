import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import profileScreen from './profileScreen';
import { Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../../res/colors';
import images from '../../../res/images';
import Archive from './profileBottomMenu/archive/Archive';
import Insight from './profileBottomMenu/insight/Insight';
import YourActivity from './profileBottomMenu/youractivity/YourActivity';
import QrCode from './profileBottomMenu/qrcode/QrCode';
import Saved from './profileBottomMenu/saved/Saved';
import CloseFriends from './profileBottomMenu/closeFriends/CloseFriends';
import DiscoverPeople from './profileBottomMenu/discoverPeople/DiscoverPeople';
import Covid from './profileBottomMenu/covid/Covid';
import SettingNavigator from './profileBottomMenu/settings/SettingNavigator';
import share from '../../../res/images/share.png';
import close from '../../../res/images/close.png';


export default function profileNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName='Profile'>
      <Stack.Screen
        name="Profile"
        component={profileScreen}
        options={{
          headerShown: false,
          headerTitle: (
            <TouchableOpacity
              style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
                johndoe
              </Text>
            </TouchableOpacity>
          ),
          headerTitleStyle: { alignSelf: 'center' },
          headerStyle: {
            backgroundColor: colors.bottomBackGround,
            shadowColor: colors.seperatorLineColor,
          },
          headerRight: () => (
            <TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 10,
                }}>
                <Image
                  source={images.list3}
                  style={{ resizeMode: 'contain', width: 25, height: 25 }}
                />
              </View>
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginStart: 10,
                }}>
                <Image
                  source={images.addIcon}
                  style={{ resizeMode: 'contain', width: 20, height: 20 }}
                />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        options={{
          headerTransparent: true,
          title: null,
          headerLeft: () => <Image source={close} style={{ width: 25, height: 25, tintColor: "white", }} />,
          headerRight: () =>
            <Image source={share} style={{ width: 25, height: 25, tintColor: "white", right: 10 }} />
        }}
        name='qrcode' component={QrCode} />
      <Stack.Screen name='SettingNavigator' component={SettingNavigator} />
      <Stack.Screen name='archive' component={Archive} />
      <Stack.Screen name='insight' component={Insight} />
      <Stack.Screen name='Your activity' component={YourActivity} />
      <Stack.Screen name='Saved' component={Saved} />
      <Stack.Screen name='Close friends' component={CloseFriends} />
      <Stack.Screen name='discoverpeople' component={DiscoverPeople} />
      <Stack.Screen name='covid' component={Covid} />
    </Stack.Navigator>
  );
}
