import React from 'react'
import { SafeAreaView, Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Konfirmasi = () => {
    const navigation = useNavigation();

  const handleKedompetPress = () => {
    // Navigasi ke halaman Dompet.js
    navigation.navigate('Dompet'); // Sesuaikan dengan nama halaman Dompet
  };
    return (
        <ImageBackground
            source={require('../../assets/Screen.png')}
            className=" flex-1 "
        >
            <SafeAreaView className=" flex-1 items-center">
                <View className="absolute bg-[#13360b] w-screen h-[300px] items-center justify-center rounded-b-xl">
                    <View className=" absolute pt-10 items-center w-52 h-52">
                        <Text className=" text-white text-[24px] font-normal">Berhasil</Text>
                        <Text className=" text-white text-[34px] font-normal">813.000</Text>
                    </View>
                        <TouchableOpacity onPress={handleKedompetPress} className="bg-[#E6EFE6] h-[35px] w-[230px] mt-20 items-center text-white text-white-text-light rounded-md">
                            <Text className=" text-[#056103] text-[24px] font-normal">Dompet</Text>
                        </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ImageBackground>

    )
}

export default Konfirmasi

