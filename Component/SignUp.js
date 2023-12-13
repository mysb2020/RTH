import { Text, View, ImageBackground, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation();

  const handleMasukPress = () => {
    // Navigasi ke halaman SignUp.js
    navigation.navigate('SignIn'); // Sesuaikan dengan nama halaman SignUp Anda
  };
  const handleSignInPress = () => {
    // Tambahkan logika autentikasi atau apa pun yang diperlukan di sini
    // Setelah berhasil, navigasikan ke halaman Home.js
    navigation.navigate('TabNavigator');
  };
  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../assets/Screen.png')}
        className="h-full w-full"

      >
        <View className="flex-1 items-center justify-center">
          <View className="bg-[#033A0280] bg-opacity-50 p-4 h-3/4 w-3/4 items-center ">

            <Text className="text-white text-4xl font-bold py-4">HEEJAU</Text>
            <View className="pt-5 w-80 h-auto items-center">
              <View className="mb-4 pl-13">
                <Text className="text-white text-sm font-medium">Username</Text>
                <TextInput className="w-64 h-9 pl-1 border-b-2 border-white text-white text-left" />

                <Text className="text-white pt-5 text-sm font-medium">Alamat Email</Text>
                <TextInput className="w-64 h-9 pl-1 border-b-2 border-white text-white text-left" />

                <Text className="pt-5 text-white text-sm font-medium">Buat Kata Sandi</Text>
                <TextInput
                  secureTextEntry={true}
                  className="w-64 h-9 pl-1 text-white text-left border-b-2 border-white" />
                <Text className="pt-5 text-white text-sm font-medium">Ulang Kata Sandi</Text>
                <TextInput
                  secureTextEntry={true}
                  className="w-64 h-9 pl-1 text-white text-left border-b-2 border-white" />

              
              </View>
            </View>

            <TouchableOpacity className=" w-60 h-10 bg-white rounded-full items-center justify-center mb-4"
            onPress={handleSignInPress}>
              <Text className="text-[#044902] text-lg font-light">DAFTAR</Text>
            </TouchableOpacity>



            <View className="flex-row items-center justify-center">
              <Text className="text-white pt-1 text-xs font-normal leading-4 font-roboto font-weight-400">
                Sudah punya akun?
                <TouchableOpacity onPress={handleMasukPress}>
                  <Text className="font-bold text-white"> Masuk </Text>
                </TouchableOpacity>
              </Text>
            </View>
            <View>
            <Text className="text-white pt-5 text-xs font-normal leading-4 font-roboto font-weight-400 text-justify tracking-wide">
             Dengan bergabung dengan Discarbon, Anda mengakui bahwa Anda telah membaca dan menyetujui Syarat Penggunaan dan Kebijakan Pribadi Kami dapat mengirimkan pembaruan berkala dan penawaran khusus ke email Anda. Anda dapat berhenti berlangganan kapan saja di pengaturan </Text>       
            </View>

          </View>
        </View>

      </ImageBackground>
    </SafeAreaView>
  )
};

export default SignUp


