import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native'
import { EllipsisVerticalIcon, PaperAirplaneIcon, CameraIcon } from "react-native-heroicons/outline";
import { useNavigation } from '@react-navigation/native';

const Hasil = () => {
    const navigation = useNavigation();

  const handleKonfirmasiPress = () => {
    // Navigasi ke halaman Konfirmasi.js
    navigation.navigate('Konfirmasi'); // Sesuaikan dengan nama halaman Hasil perhitungan karbon Anda
  };
    return (
        <SafeAreaView className=" flex-1">
            <StatusBar backgroundColor="" />
            <View className=" flex-1 bg-[#156103]">
                <View className=" absolute bg-[#cde0cd] rounded-t-xl w-screen h-[75%] top-[250] items-center justify-center">
                    <View className=" absolute bg-[#ffffff] rounded-t-xl w-screen h-[107] top-[0] ">
                        <View className=" flex-row top-3 left-4">
                            <Text className=" text-[black] text-[20px] font-medium">Beringin <Text className="font-normal text-[16px] text-[#BFBFBF]">, spesies dari</Text> Ficus</Text>
                            <EllipsisVerticalIcon paddingLeft={250} size={26} color="#022201" className=" absolute" />
                        </View>
                        <View className=" top-4 left-3">
                            <Text className=" text-[#737373] text-[16px] font-medium"> Juga dikenal sebagai :<Text className="font-medium text-[16px] text-[#000000]"> Waringin, Ringin</Text> </Text>
                        </View>
                        <View className=" top-4 left-3">
                            <Text className=" text-[#999999] text-[16px] font-medium"> Nama botani : <Text className="font-medium text-[16px] text-[#000000]">Ficus benjamina</Text> </Text>
                        </View>
                    </View>

                    {/* Karakteristik */}
                    <View className=" absolute bg-[#ffffff] w-screen h-[158] top-[120] items-center justify-center">
                        <View className=" absolute flex-row top-2 left-4">
                            <Image
                                source={require('../../assets/flower.png')} // Ganti dengan path yang sesuai ke gambar kamera Anda
                                style={{ width: 23, height: 23 }}
                            />
                            <Text className=" text-[#044902] pl-2 text-[20px] font-medium">Karakteristik </Text>
                            <EllipsisVerticalIcon paddingLeft={400} size={26} color="#022201" className=" absolute" />
                        </View>
                        <View className="bg-white shadow-md shadow-black h-[102px] w-[355px] rounded-lg top-4">
                            <View className=" flex-row justify-between top-3 left-2">
                                <Text className=" text-[#999999] text-[14px] font-normal"> Ketinggian Tumbuhan </Text>
                                <Text className=" text-[#999999] text-[14px] left-[-15] font-normal"> 15m </Text>
                            </View>
                            <View className=" flex-row justify-between top-3 left-2">
                                <Text className=" text-[#999999] text-[14px] font-normal"> Diameter Batang </Text>
                                <Text className=" text-[#999999] text-[14px] left-[-15] font-normal"> 100 cm </Text>
                            </View>
                            <View className=" flex-row justify-between top-3 left-2">
                                <Text className=" text-[#999999] text-[14px] font-normal"> Umur Tumbuhan </Text>
                                <Text className=" text-[#999999] text-[14px] left-[-15] font-normal"> 5 Tahun </Text>
                            </View>
                            <View className=" flex-row justify-between top-3 left-2">
                                <Text className=" text-[#999999] text-[14px] font-normal"> Warna Daun </Text>
                                <Text className=" text-[#056103] text-[14px] left-[-15] font-normal"> Hijau </Text>
                            </View>
                        </View>
                    </View>

                    {/* Perhitungan CO2 */}
                    <View className=" absolute bg-[#ffffff] w-screen h-[295] top-[291] items-center justify-center">
                        <View className=" absolute flex-row top-2 left-5">
                            <Image
                                source={require('../../assets/book.png')} // Ganti dengan path yang sesuai ke gambar kamera Anda
                                style={{ width: 24, height: 24 }}
                            />
                            <Text className=" text-[#044902] pl-2 text-[20px] font-medium">Perhitungan CO2 </Text>
                        </View>

                        <View className="top-[30] h-[100]">
                            <View className=" flex-row justify-between items-center mb-2 bg-[#E6EFE6] top-[-85] w-[355px] h-[25] rounded-md ">
                                <Text className=" text-[#737373] pl-2 text-[13px] font-normal">W di atas tanah</Text>
                                <Text className=" text-[black] left-[-15] pl-2 text-[13px] font-normal">13.472 pon</Text>
                            </View>
                            <View className=" flex-row justify-between items-center mb-2 top-[-85] w-[355px] h-[25] rounded-md ">
                                <Text className=" text-[#737373] pl-2 text-[13px] font-normal">W total berat hijau</Text>
                                <Text className=" text-[black] left-[-15] pl-2 text-[13px] font-normal">9.767 lbs</Text>
                            </View>
                            <View className=" flex-row justify-between items-center mb-2 bg-[#E6EFE6] top-[-85] w-[355px] h-[25] rounded-md ">
                                <Text className=" text-[#737373] pl-2 text-[13px] font-normal">W berat karbon</Text>
                                <Text className=" text-[black] left-[-15] pl-2 text-[13px] font-normal">4.884 pon</Text>
                            </View>
                            <View className=" flex-row justify-between items-center mb-2 top-[-85] w-[355px] h-[25] rounded-md ">
                                <Text className=" text-[#737373] pl-2 text-[13px] font-normal">W karbon</Text>
                                <Text className=" text-[black] left-[-15] pl-2 text-[13px] font-normal">17.924 pon</Text>
                            </View>
                            <View className=" flex-row justify-between items-center mb-2 bg-[#E6EFE6] top-[-85] w-[355px] h-[25] rounded-md ">
                                <Text className=" text-[#737373] pl-2 text-[13px] font-normal">W karbon dioksida</Text>
                                <Text className=" text-[black] left-[-15] pl-2 text-[13px] font-normal">8.130 kg CO2 selama 5 tahun</Text>
                            </View>
                        </View>

                        <View className=" absolute flex-row left-5 top-[210]">
                            <Image
                                source={require('../../assets/coins.png')} // Ganti dengan path yang sesuai ke gambar kamera Anda
                                style={{ width: 25, height: 25 }}
                            />
                            <Text className=" text-[#044902] pl-2 text-[20px] font-medium">Koin yang didapatkan 813.000 </Text>
                        </View>

                        <View className=" absolute flex-row left-5 items-center top-[250]">
                        <CameraIcon size={29} left={3} color="#022201" className=" absolute" />
                        <PaperAirplaneIcon size={28} left={33} color="#022201" className=" absolute" />
                            <TouchableOpacity onPress={handleKonfirmasiPress}
                            className=" bg-[#E6EFE6] left-14 items-center justify-center w-[230px] h-[35px] rounded-md">
                                <Text className=" text-[#044902] pl-2 text-[20px] font-medium">Konfirmasi</Text>
                            </TouchableOpacity>
                        </View>

                    </View>




                </View>
            </View>
        </SafeAreaView>
    )
}

export default Hasil

