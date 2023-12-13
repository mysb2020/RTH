import React from 'react'
import { Text, View, TouchableOpacity, ScrollView, SafeAreaView, Image, TextInput } from 'react-native'
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

      <View className=" absolute pt-16 w-80 h-auto items-center top-[300]">
              <View className="mb-4 pl-13">
                <Text className="text-[#595959] text-sm font-medium">Nama</Text>
                <TextInput className="w-64 h-9 pl-1 border-b-2 border-[#595959] text-white text-left" />

                <Text className="pt-8 text-[#595959] text-sm font-medium">Nama Pengguna</Text>
                <TextInput
                  secureTextEntry={true}
                  className="w-64 h-9 pl-1 text-white text-left border-b-2 border-[#595959]" />
                <Text className="pt-8 text-[#595959] text-sm font-medium">Email</Text>
                <TextInput
                  secureTextEntry={true}
                  className="w-64 h-9 pl-1 text-white text-left border-b-2 border-[#595959]" />
                  <Text className="pt-8 text-[#595959] text-sm font-medium">Email</Text>
                <TextInput
                  secureTextEntry={true}
                  className="w-64 h-9 pl-1 text-white text-left border-b-2 border-[#595959]" />
              </View>
            </View>
      
    </SafeAreaView>
  )
}

export default Edit

