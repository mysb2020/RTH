import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React , { useState, useEffect }from 'react'
import { useNavigation } from '@react-navigation/native';

const Loading = () => {
    const navigation = useNavigation();

  useEffect(() => {
    const LoadingApp = async () => {
      try {
        // Simulasikan pekerjaan persiapan dengan setTimeout
        await new Promise(resolve => setTimeout(resolve, 3000));

        // Setelah durasi tampilan splash selesai, navigasi ke SignIn
        navigation.navigate('Hasil');
      } catch (error) {
        console.error('Error preparing app:', error);
      }
    };

   LoadingApp();
  }, [navigation]);
  return (
    <View className=" flex-1 items-center justify-center">
        <ActivityIndicator size={66} color="green" />
      <Text className=" text-[#055703]">Loading</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({})