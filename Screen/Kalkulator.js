import React, { useState } from 'react'
import { Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView, Modal, FlatList } from 'react-native'
import { ChevronDownIcon, LanguageIcon } from "react-native-heroicons/outline";
// import { Picker } from '@react-native-picker/picker';
import { TextInput } from 'react-native-gesture-handler';

const Kalkulator = () => {
  const [jenisTanaman, setJenisTanaman] = useState('');
  const [tinggiTanaman, setTinggiTanaman] = useState('');
  const [diameterTanaman, setDiameterTanaman] = useState('');
  const [showJenisOptions, setShowJenisOptions] = useState(false);
  const [showTinggiOptions, setShowTinggiOptions] = useState(false);
  const [showDiameterOptions, setShowDiameterOptions] = useState(false);
  const [textColor, setTextColor] = useState('gray');

  // Data untuk jenis tanaman
  const dataJenisTanaman = [
    { label: 'Pohon', value: 'Pohon' },
    { label: 'Bunga', value: 'Bunga' },
    { label: 'Rumput', value: 'Rumput' },
    // Tambahkan opsi lain jika diperlukan
  ];

  // Data untuk tinggi tanaman
  const dataTinggiTanaman = [
    { label: 'Sedang', value: 'Sedang' },
    { label: 'Tinggi', value: 'Tinggi' },
    { label: 'Rendah', value: 'Rendah' },
    // Tambahkan opsi lain jika diperlukan
  ];

  // Data untuk diameter tanaman
  const dataDiameterTanaman = [
    { label: 'Besar', value: 'Besar' },
    { label: 'Sedang', value: 'Sedang' },
    { label: 'Kecil', value: 'Kecil' },
    // Tambahkan opsi lain jika diperlukan
  ];

  const handleJenisOptionPress = (value) => {
    setJenisTanaman(value);
    setShowJenisOptions(false);
    setTextColor('black');
  };

  const handleTinggiOptionPress = (value) => {
    setTinggiTanaman(value);
    setShowTinggiOptions(false);
  };

  const handleDiameterOptionPress = (value) => {
    setDiameterTanaman(value);
    setShowDiameterOptions(false);
  };
  const handleReset = () => {
    setJenisTanaman('');
    // Reset input fields here if needed
  };

  const handleHitungKarbon = () => {
    // Logic to calculate carbon footprint based on input data
    // You can perform the calculation based on the input values
    // and display the calculated carbon footprint
  };

  return (
    <SafeAreaView className="flex-1 bg-white">

      <View style={{ backgroundColor: 'transparent', position: 'absolute', top: 50, borderBottomWidth: 0.5, width: 400 }}>
        <Text className=" text-[25px] pb-2 self-center text-[#044902]">Kalkulator</Text>
      </View>

      <View className=" absolute flex-1 left-[-120] max-h-screen">
        <View className=" p-28 items-center justify-center">
          <View className=" top-[10px]">
            {/* Paragraf */}
            <Text style={{ paddingTop: 10, width: 325, marginTop: 20, marginLeft: 2, fontSize: 14, color: 'black', textAlign: 'justify', lineHeight: 18 }}>
              Kalkulator karbon adalah layanan untuk mempermudah perhitungan jumlah karbon yang telah diserap oleh setiap
              jenis tanaman. Oleh karena itu, bagi Anda yang ingin mengetahui berapa jumlah karbon yang telah diserap oleh
              tanaman anda, silahkan gunakan fasilitas kalkulator karbon HEEJAU dibawah ini.
            </Text>
          </View>

          {/* Input Fields */}

          <View className="p-2 top-[30px] w-80">
            {/* Dropdown - jenis tanaman*/}
            <View className="flex-row">
              <Text className=" font-bold">Jenis Tanaman</Text>
              <Text style={{ color: 'red' }}> *</Text>
            </View>
            <TouchableOpacity
              onPress={() => setShowJenisOptions(!showJenisOptions)}
              style={{
                borderWidth: 1,
                borderColor: 'gray',
                height: 40,
                paddingLeft: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 10,
                paddingHorizontal: 10,
              }}
            >
              <Text style={{ color: textColor }}>
                {jenisTanaman === '' ? 'Place Holder' : jenisTanaman}
              </Text>
              <ChevronDownIcon size={16} color="#022201" />
            </TouchableOpacity>

            {showJenisOptions && (
              <ScrollView
                style={{
                  position: 'absolute',
                  backgroundColor: '#fff',
                  borderWidth: 1,
                  borderColor: 'gray',
                  left: 8,
                  maxHeight: 120,
                  width: '100%',
                  top: 40,
                  zIndex: 1,
                  borderRadius: 5,
                }}
              >
                {dataJenisTanaman.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleJenisOptionPress(item.value)}
                    style={{ paddingVertical: 8, paddingHorizontal: 10 }}
                  >
                    <Text>{item.label}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            )}

            {/* Nama tanaman */}
            <View className="pb-2.5">
              <View className="flex-row">
                <Text className=" font-bold">Nama Tanaman</Text>
              </View>
              <TextInput style={{ borderWidth: 1, borderColor: 'gray', height: 40, paddingLeft: 10 }} placeholder="Nama Tanaman" />
            </View>

            {/* Input tinggi tanaman */}
            <View className="flex-row">
              <Text className=" font-bold">Tinggi Tanaman</Text>
              <Text style={{ color: 'red' }}> *</Text>
            </View>
            <TouchableOpacity
              onPress={() => setShowTinggiOptions(!showTinggiOptions)}
              style={{
                borderWidth: 1,
                borderColor: 'gray',
                height: 40,
                paddingLeft: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 10,
                paddingHorizontal: 10,
              }}
            >
              <Text style={{ color: textColor }}>{tinggiTanaman === '' ? 'Place Holder' : tinggiTanaman}</Text>
              <ChevronDownIcon size={16} color="#022201" />
            </TouchableOpacity>

            {showTinggiOptions && (
              <ScrollView
                style={{
                  position: 'absolute',
                  backgroundColor: '#fff',
                  borderWidth: 1,
                  borderColor: 'gray',
                  left: 8,
                  maxHeight: 120,
                  width: '100%',
                  top: 90, // Adjust this value to fit your layout
                  zIndex: 1,
                  borderRadius: 5,
                }}
              >
                {dataTinggiTanaman.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleTinggiOptionPress(item.value)}
                    style={{ paddingVertical: 8, paddingHorizontal: 10 }}
                  >
                    <Text>{item.label}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            )}

            {/* Input diameter tanaman */}
            <View className="flex-row">
              <Text className=" font-bold">Diameter Tanaman</Text>
              <Text style={{ color: 'red' }}> *</Text>
            </View>
            <TouchableOpacity
              onPress={() => setShowDiameterOptions(!showDiameterOptions)}
              style={{
                borderWidth: 1,
                borderColor: 'gray',
                height: 40,
                paddingLeft: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 10,
                paddingHorizontal: 10,
              }}
            >
              <Text style={{ color: textColor }}>{diameterTanaman === '' ? 'Place Holder' : diameterTanaman}</Text>
              <ChevronDownIcon size={16} color="#022201" />
            </TouchableOpacity>

            {showDiameterOptions && (
              <ScrollView
                style={{
                  position: 'absolute',
                  backgroundColor: '#fff',
                  borderWidth: 1,
                  borderColor: 'gray',
                  left: 8,
                  maxHeight: 120,
                  width: '100%',
                  top: 230, // Adjust this value to fit your layout
                  zIndex: 1,
                  borderRadius: 5,
                }}
              >
                {dataDiameterTanaman.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleDiameterOptionPress(item.value)}
                    style={{ paddingVertical: 8, paddingHorizontal: 10 }}
                  >
                    <Text>{item.label}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            )}


            {/* Umur tanaman */}
            <View className="pb-2.5">
              <View className="flex-row">
                <Text className=" font-bold">Umur Tanaman</Text>
              </View>
              <TextInput style={{ borderWidth: 1, borderColor: 'gray', height: 40, paddingLeft: 10 }} placeholder="Nama Tanaman" />
            </View>

            {/* Warna daun */}
            <View className="pb-2.5">
              <View className="flex-row">
                <Text className=" font-bold">Warna Daun</Text>
              </View>
              <TextInput style={{ borderWidth: 1, borderColor: 'gray', height: 40, paddingLeft: 10 }} placeholder="Nama Tanaman" />
            </View>
          </View>

          {/* Button - hitung */}
          <View className="flex-row justify-center items-center p-8 w-[400]">
            <TouchableOpacity
              onPress={handleReset}
              style={{
                backgroundColor: '#E6EFE6',
                paddingVertical: 12,
                paddingHorizontal: 54,
                borderRadius: 8,
                marginVertical: 10,
                marginRight: 15,
              }}
            >
              <Text style={{ color: '#044902', fontWeight: 'bold' }}>Reset</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleHitungKarbon}
              style={{
                backgroundColor: '#F5F5F5',
                paddingVertical: 12,
                paddingHorizontal: 24,
                borderRadius: 8,
                marginVertical: 10,

              }}
            >
              <Text style={{ color: '#9E9E9E', fontWeight: 'bold' }}>Hitung Karbon</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>

    </SafeAreaView>
  )
}

export default Kalkulator

