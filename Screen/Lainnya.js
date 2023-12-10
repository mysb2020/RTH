import React from "react";
import { SafeAreaView, Image, View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { LanguageIcon, LockClosedIcon, PaintBrushIcon, QuestionMarkCircleIcon, ChatBubbleLeftRightIcon, ShieldCheckIcon } from "react-native-heroicons/outline";

const Lainnya = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <LinearGradient
        colors={['#B2CEB1', '#B2CEB1', '#E6EFE6']}
        className=" left-[-150] top-[-380] h-[700] w-[700] rounded-[350px]">
      </LinearGradient>
      <Text className=" text-2xl font-bold left-[110] top-[-485]"> Muh. Yusuf S.B. </Text>
      <Text className=" text-sm left-[75] top-[-480]"> Myusuf@gmail.com | +01 234 567 89 </Text>
      <LinearGradient
        colors={['#022C01', '#056103', '#056103']}
        className="top-[-680px] left-[140px] h-[120] w-[120] rounded-[60px] ">
      </LinearGradient>

      <TouchableOpacity>
        <View className=" bg-white items-center justify-center top-[-720px] left-[225px] h-[40] w-[40] rounded-[60px] ">
          <Image
            source={require('../assets/lainnya/pen.png')} // Ganti dengan path yang sesuai ke gambar kamera Anda
            style={{ width: 23, height: 23 }}
          />
        </View>
      </TouchableOpacity>

      <View className="top-[-600] items-center p-5 h-screen">
        <View className="bg-white shadow shadow-black h-[52px] mb-5 w-[342px] p-4 rounded-lg">
          <TouchableOpacity className="flex-row ">
            <Image
              source={require('../assets/lainnya/wallet.png')} // Gambar dompet
              style={{ width: 23, height: 23 }}
            />
            <Text className=" pl-5 font-semi text-[15px] tracking-[0] leading-[normal]"> Dompet </Text>
          </TouchableOpacity>
        </View>

        <View className="bg-white shadow shadow-black h-[121px] mb-2 w-[342px] p-4 rounded-lg">
          <TouchableOpacity className="flex-row pb-2">
            <Image
              source={require('../assets/lainnya/profile.png')} // Gambar profiil
              style={{ width: 23, height: 23 }}
            />
            <Text className=" pl-5 font-semi text-[15px] tracking-[0] leading-[normal]"> Edit Profil </Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row pb-2">
            <Image color="red" source={require('../assets/lainnya/bell.png')} style={{ width: 23, height: 23 }} />
            <Text className=" pl-5 font-semi text-[15px] tracking-[0] leading-[normal]"> Notifikasi </Text>
            <Text className=" text-[#044902] pl-40 font-semi text-[15px] tracking-[0] leading-[normal]"> Aktif </Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row ">
            <LanguageIcon size={24} color="#022201" />
            <Text className=" pl-5 font-semi text-[15px] tracking-[0] leading-[normal]"> Bahasa </Text>
            <Text className=" text-[#044902] pl-[140px] font-semi text-[15px] tracking-[0] leading-[normal]"> Indonesia </Text>
          </TouchableOpacity>
        </View>

        <View className="bg-white shadow shadow-black h-[83px] mb-2 w-[342px] p-5 rounded-lg">
          <TouchableOpacity className="flex-row pb-2">
          <LockClosedIcon size={24} color="#022201" />
            <Text className=" pl-5 font-semi text-[15px] tracking-[0] leading-[normal]"> Keamanan </Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row ">
          <PaintBrushIcon size={24} color="#022201" />
            <Text className=" pl-5 font-semi text-[15px] tracking-[0] leading-[normal]"> Tema </Text>
            <Text className=" text-[#044902] pl-[135px] font-semi text-[15px] tracking-[0] leading-[normal]"> Light Mode </Text>
          </TouchableOpacity>
        </View>

        <View className="bg-white shadow shadow-black h-[121px] w-[342px] p-5 rounded-lg">
          <TouchableOpacity className="flex-row pb-2">
          <QuestionMarkCircleIcon size={24} color="#022201" />
            <Text className=" pl-5 font-semi text-[15px] tracking-[0] leading-[normal]"> Bantuan </Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row pb-2">
          <ChatBubbleLeftRightIcon size={24} color="#022201" />
            <Text className=" pl-5 font-semi text-[15px] tracking-[0] leading-[normal]"> Hubungi Kami </Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row pb-2">
          <ShieldCheckIcon size={24} color="#022201" />
            <Text className=" pl-5 font-semi text-[15px] tracking-[0] leading-[normal]"> Kebijakan Pribadi </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Lainnya
