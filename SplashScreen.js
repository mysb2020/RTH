import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const prepareApp = async () => {
      try {
        // Simulasikan pekerjaan persiapan dengan setTimeout
        await new Promise(resolve => setTimeout(resolve, 3000));

        // Setelah durasi tampilan splash selesai, navigasi ke SignIn
        navigation.navigate('SignIn');
      } catch (error) {
        console.error('Error preparing app:', error);
      }
    };

    prepareApp();
  }, [navigation]);
  
  return (
    <ImageBackground
      source={require('./assets/Screen.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>HEEJAU</Text>
        {/* <Text style={styles.text}>Jelajahi Kebun, Taman, dan Alam Terbuka</Text> */}
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
  },
  title: {
    color: '#fff',
    fontSize: 36,            
    fontWeight: 'bold',
  },
});

