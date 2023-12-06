import React, { useState } from 'react'
import { Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView, Modal, FlatList } from 'react-native'
import { ChevronDownIcon } from "react-native-heroicons/outline";
import { Picker } from '@react-native-picker/picker';
import { TextInput } from 'react-native-gesture-handler';

const Kalkulator = () => {
  const [jenisTanaman, setJenisTanaman] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const [textColor, setTextColor] = useState('gray');

  const data = [
    { label: 'Pohon', value: 'Pohon' },
    { label: 'Bunga', value: 'Bunga' },
    { label: 'Rumput', value: 'Rumput' },
    // Tambahkan opsi lain jika diperlukan
  ];

  const handleOptionPress = (value) => {
    setJenisTanaman(value);
    setShowOptions(false);
    setTextColor('black');
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-100">

      <View style={{ backgroundColor: 'transparent', position: 'absolute', top: 50, borderBottomWidth: 0.5, width: 400 }}>
        <Text className=" text-[25px] pb-2 self-center text-[#044902]">Kalkulator</Text>
      </View>

      <View className=" flex-1 h-screen">
        <View className="p-20 items-center justify-center">
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
              onPress={() => setShowOptions(!showOptions)}
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
              <Text style={{ color: textColor }}>{jenisTanaman === '' ? 'Place Holder' : jenisTanaman}</Text>
              <ChevronDownIcon size={16} color="#022201" />
            </TouchableOpacity>

            {showOptions && (
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
                {data.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleOptionPress(item.value)}
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

            {/* Tinggi tanaman */}
            <View className="flex-row">
              <Text className=" font-bold">Tinggi Tanaman</Text>
              <Text style={{ color: 'red' }}> *</Text>
            </View>
            <TouchableOpacity
              onPress={() => setShowOptions(!showOptions)}
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
              <Text style={{ color: textColor }}>{jenisTanaman === '' ? 'Place Holder' : jenisTanaman}</Text>
              <ChevronDownIcon size={16} color="#022201" />
            </TouchableOpacity>

            {showOptions && (
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
                {data.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleOptionPress(item.value)}
                    style={{ paddingVertical: 8, paddingHorizontal: 10 }}
                  >
                    <Text>{item.label}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            )}

            {/* Diameter tanaman */}
            <View className="flex-row">
              <Text className=" font-bold">Diameter Tanaman</Text>
              <Text style={{ color: 'red' }}> *</Text>
            </View>
            <TouchableOpacity
              onPress={() => setShowOptions(!showOptions)}
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
              <Text style={{ color: textColor }}>{jenisTanaman === '' ? 'Place Holder' : jenisTanaman}</Text>
              <ChevronDownIcon size={16} color="#022201" />
            </TouchableOpacity>

            {showOptions && (
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
                {data.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleOptionPress(item.value)}
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
                <Text className=" font-bold">Nama Tanaman</Text>
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


        </View>
      </View>

    </SafeAreaView>
  )
}

export default Kalkulator

