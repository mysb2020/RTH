import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Bars3Icon, CalculatorIcon, } from "react-native-heroicons/outline";
import { CameraIcon } from "react-native-heroicons/solid";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Component/Home';
import Tanaman from '../Screen/Tanaman';
import Scan from '../Screen/Scan';
import Kalkulator from '../Screen/Kalkulator';
import Lainnya from '../Screen/Lainnya';
import Dompet from '../Screen/Lainnya/Dompet';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => {
  const route = useRoute();

  // Pastikan route telah terdefinisi sebelum digunakan
  if (!route) {
    return null;
  }

  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, tabBarHideOnKeyboard: true }}>
      <Tab.Screen name="Home" component={Home} options={{
        animation: 'slide_from_bottom',
        tabBarIcon: ({ focused, size, color }) => (
          <Icon name="home" size={28} color={focused ? color = '#044902' : color = '#A8A8A8'} />)
      }}></Tab.Screen>

      <Tab.Screen name="Tanaman" component={Tanaman} options={{
        animation: 'slide_from_bottom',
        tabBarIcon: ({ focused, size, color }) => (
          <Image
            source={require('../assets/leaf.png')}
            style={{ width: 30, height: 25, tintColor: focused ? '#044902' : '#A8A8A8' }}
          />)
      }} ></Tab.Screen>


      <Tab.Screen name="Scan" component={Scan} screenOptions={{}} options={{
        animation: 'slide_from_bottom',
        tabBarVisible: route.state && route.state.index !== undefined && route.state.index === 0 ? false : true,
        tabBarStyle: { display: 'none' },
        tabBarIcon: ({ focused, size, color }) => (
          <View
            style={{
              width: 80,
              height: 70,
              borderRadius: 60,
              top: -15,
              backgroundColor: '#fff', // Ubah warna sesuai kebutuhan
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
            }}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 30,
                top: -3,
                backgroundColor: '#044902', // Ubah warna sesuai kebutuhan
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
              }}>
              <CameraIcon
                name="camera"
                size={28}
                color="#fff"
                style={{
                  position: 'absolute',
                  width: 28,
                  height: 28,
                  top: 10,
                  left: 11.2,
                }}
              />
            </View>
          </View>
        ),
      }}></Tab.Screen>

      <Tab.Screen name="Kalkulator" component={Kalkulator} options={{
        animation: 'slide_from_bottom',
        tabBarIcon: ({ focused, size, color }) => (
          <CalculatorIcon name="home" size={27} color={focused ? color = '#044902' : color = '#A8A8A8'} />)
      }}></Tab.Screen>

      <Tab.Screen
        name="Lainnya"
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Bars3Icon
              name="home"
              size={28}
              color={focused ? (color = '#044902') : (color = '#A8A8A8')}
            />
          ),
        }}
      >
        {() => (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Lainnya" component={Lainnya} />
            <Stack.Screen name="Dompet" component={Dompet} />
          </Stack.Navigator>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({})