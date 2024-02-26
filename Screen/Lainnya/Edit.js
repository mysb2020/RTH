import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet , SafeAreaView, Image, TextInput } from 'react-native'
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const Edit = () => {
  const navigation = useNavigation();

  const handleLainnyaPress = () => {
    // Navigasi ke halaman Lainnya.js
    navigation.navigate('Lainnya'); // kembali ke halaman Lainnya 
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <LinearGradient
        colors={['#B2CEB1', '#B2CEB1', '#E6EFE6']}
        className=" left-[-150] top-[-380] h-[700] w-[700] rounded-[350px]">
      </LinearGradient>
      <Text className=" text-2xl font-bold left-[140] top-[-485]"> Edit Profil </Text>
      <LinearGradient
        colors={['#022C01', '#056103', '#056103']}
        className="top-[-680px] left-[140px] h-[120] w-[120] rounded-[60px] ">
      </LinearGradient>

      <View className=" absolute pt-16 w-80 h-auto items-center top-[270]">
        <View className="mb-4 left-9 pl-13 w-[330]">
          <Text className="text-[#595959] text-sm font-normal">Nama</Text>
          <TextInput className="w-82 h-9 pl-1 border-b border-[#595959] text-black text-left" />

          <Text className="pt-8 text-[#595959] text-sm font-normal">Nama Pengguna</Text>
          <TextInput

            className="w-82 h-9 pl-1 text-black text-left border-b border-[#595959]" />
          <Text className="pt-8 text-[#595959] text-sm font-normal">Email</Text>
          <TextInput

            className="w-82 h-9 pl-1 text-black text-left border-b border-[#595959]" />
          <Text className="pt-8 text-[#595959] text-sm font-normal">Jenis Kelamin</Text>
          <TextInput

            className="w-82 h-9 pl-1 text-black text-left border-b border-[#595959]" />
        </View>

        <View className=" absolute justify-center pt-1 bg-transparent w-[230] h-[35] self-center border-[0.2px] rounded-lg left-[83] top-[430]">
          <TouchableOpacity onPress={handleLainnyaPress} className=" w-[230] h-[35] bg-[#B2CEB1] items-center justify-center rounded-lg top-[-2] left-[-0.04]">
            <Text className=" text-[14px] text-center p-1 font-medium self-center text-[#000000]">Simpan</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      

    </SafeAreaView>
  )
}

export default Edit

