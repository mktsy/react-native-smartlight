import React, { Component } from 'react'
import {Text, View} from 'react-native'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Control from './Control'
import Setting from './Setting'
import SetTime from './SetTime'
import { createStackNavigator } from '@react-navigation/stack'

function ControlScreen({ navigation }) {
  return (
    <View>
      <Control />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View>
      <Setting />
    </View>
  );
}

function SetTimeScreen({ navigation }) {
  return (
    <View>
      <SetTime />
    </View>
  );
}


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()

export default function Home() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName
            if (route.name === 'Control') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list' : 'ios-list-outline'
            } else if (route.name === 'Set time') {
              iconName = focused ? 'ios-time' : 'ios-time-outline'
            } 

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          style: {
            backgroundColor: 'blue'
          }
        }}
      >
        <Tab.Screen name="Control" component={ControlScreen} />
        <Tab.Screen name="Set time" component={SetTimeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

