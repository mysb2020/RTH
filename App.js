import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import TabNavigator from './Navigator/TabNavigator';
import SplashScreen from './SplashScreen';
import SignIn from './Component/SignIn';
import SignUp from './Component/SignUp';
import Winter from './Screen/Tanaman/Winter';
import Summer from './Screen/Tanaman/Summer';
import Autumn from './Screen/Tanaman/Autumn';
import Rain from './Screen/Tanaman/Rain';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={{animation: 'slide_from_bottom'}}/>
        <Stack.Screen name="Winter" component={Winter} />
        <Stack.Screen name="Summer" component={Summer} />
        <Stack.Screen name="Autumn" component={Autumn} />
        <Stack.Screen name="Rain" component={Rain} />
      </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
    
  );
};
