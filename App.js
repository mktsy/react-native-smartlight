import * as React from 'react';
import 'react-native-gesture-handler'
import Home from './screens/home'
import Login from './screens/Login'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Image, SafeAreaView, StatusBar, Text, View} from 'react-native';


// const Stack = createStackNavigator()

// function LoginScreen() {
//   return (
//     <Login />
//   )
// }
// function HomeScreen() {
//   return (
//     <Home />
//   )
// }

export default function App() {
  return (
    
    <Home />
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Smart Lighting" component={LoginScreen}/>
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    
  );
}

