import React from 'react';
import { Text, View, ImageBackground, Image, TextInput, TouchableOpacity, SafeAreaView, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {
  const navigation = useNavigation();

  const handleDaftarPress = () => {
    // Navigasi ke halaman SignUp.js
    navigation.navigate('SignUp'); // Sesuaikan dengan nama halaman SignUp Anda
  };
  const handleSignInPress = () => {
    // Tambahkan logika autentikasi atau apa pun yang diperlukan di sini
    // Setelah berhasil, navigasikan ke halaman Home.js
    navigation.navigate('TabNavigator'); // Sesuaikan dengan nama halaman Home Anda
  };
  const openGoogleSignInPage = () => {
      const googleSignInUrl = 'https://accounts.google.com/ServiceLogin'; // URL untuk halaman masuk Google
  
  Linking.openURL(googleSignInUrl)
    .catch(err => console.error('Error opening Google Sign-In page:', err));
    
  };
  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../assets/Screen.png')}
        className="h-full w-full"

      >
        <View className="flex-1 items-center justify-center">
          <View className="bg-[#033A0280] bg-opacity-50 p-4 h-3/4 w-3/4 items-center ">

            <Text className="text-white text-4xl font-light py-4">HEEJAU</Text>
            <View className="pt-16 w-80 h-auto items-center">
              <View className="mb-4 pl-13">
                <Text className="text-white text-sm font-medium">Alamat Email</Text>
                <TextInput className="w-64 h-9 pl-1 border-b-2 border-white text-white text-left" />

                <Text className="pt-8 text-white text-sm font-medium">Kata Sandi</Text>
                <TextInput
                  secureTextEntry={true}
                  className="w-64 h-9 pl-1 text-white text-left border-b-2 border-white" />

                <TouchableOpacity
                  onPress={() => {
                    // Navigating to the forget password page
                  }}
                >
                  <Text
                    className="text-white text-xs mt-1 text-right pt-1 font-light
            ">
                    lupa kata sandi Anda?
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity className=" w-60 h-10 bg-white rounded-full items-center justify-center mb-4"
            onPress={handleSignInPress}>
              <Text className="text-[#044902] text-lg font-light">MASUK</Text>
            </TouchableOpacity>



            <View>
              <Text className="text-white flex-row pt-1 text-xs font-normal leading-4 font-roboto font-weight-400">
                Tidak ada akun?
                <TouchableOpacity onPress={handleDaftarPress}>
                  <Text className="font-bold text-white"> Daftar </Text>
                </TouchableOpacity>
              </Text>
            </View>
            <View>
              <Text className="text-white flex-row pt-9 pb-2 text-xs font-normal leading-4 font-roboto font-weight-400">
              Atau lanjutkan dengan</Text>
            </View>
            <TouchableOpacity className="flex-row w-60 h-10 bg-[#c5d2d3] rounded-full items-center justify-center mb-4"
            onPress={openGoogleSignInPage}>
            <Image source={require('../assets/Google.png')} className="w-7 h-7" />
            <Text className=" text-[#044902] pl-2">Masuk dengan Google</Text>
            </TouchableOpacity>
            <View>
              <Text className="text-white pt-5 text-xs font-normal leading-4 font-roboto font-weight-400 text-center tracking-wide">Dengan bergabung dengan Discarbon, Anda mengakui bahwa Anda telah membaca dan menyetujui 
              Syarat Penggunaan dan Kebijakan Pribadi</Text>
            </View>

          </View>
        </View>

      </ImageBackground>
    </SafeAreaView>
  )
};

export default SignIn
