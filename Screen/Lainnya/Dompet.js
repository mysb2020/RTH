import React, { useState } from 'react'
import { Text, View, TouchableOpacity, TextInput, SafeAreaView } from 'react-native'
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { useNavigation } from '@react-navigation/native';


const Dompet = () => {
    const navigation = useNavigation();

    const handleLainnyaPress = () => {
        // Navigasi ke halaman Lainnya.js
        navigation.navigate('Lainnya'); // kembali ke halaman Lainnya 
    };

    const [selectedButton, setSelectedButton] = useState(null);
    const [selectedNominal, setSelectedNominal] = useState(null);
    const [customNominal, setCustomNominal] = useState('');

    const handleNominalPress = (nominal) => {
        setSelectedNominal(nominal);
    };

    // Fungsi untuk menampilkan input nominal kustom saat tombol "Nominal Lain" ditekan
    const renderCustomNominalInput = () => {
        if (selectedNominal === 'Nominal Lain') {
            return (
                <TextInput
                    value={customNominal}
                    onChangeText={text => setCustomNominal(text)}
                    placeholder=""
                    keyboardType="numeric"
                    style={{
                        borderBottomWidth: 1,
                        borderColor: '#999999',
                        borderRadius: 5,
                        padding: 5,
                        marginTop: 5,
                        width: 275,
                    }}
                />
            );
        }
        return null;
    };

    return (
        <SafeAreaView className="flex-1 bg-white">

            <View style={{ backgroundColor: 'transparent', position: 'absolute', top: 50, width: 400, flexDirection: 'row', alignItems: 'center', justifyContent: "space-around", }}>
                <TouchableOpacity className="left-[-50]" onPress={handleLainnyaPress}>
                    <ArrowLeftIcon size={24} color="#022201" className="" />
                </TouchableOpacity>
                <Text className=" text-[25px] left-[-88] pb-2 self-center text-[#044902]">Dompet</Text>
            </View>

            <View className="bg-transparent absolute top-[140px] border-[0.2px] self-center w-[325] h-[600] rounded-lg">
                <Text className=" text-[14px] text-center font-medium pt-2 pb-2 self-center text-[#044902]">Koin saat ini</Text>
                <View className="">
                    <Text className=" text-[36px] font-medium text-center p-2 self-center text-[#044902]">100.000</Text>
                </View>
                <TouchableOpacity>
                    <View className="self-center bg-[#E6EFE6] w-[230] h-[35] rounded-lg">
                        <Text className=" text-[16px] font-medium text-center pt-[6] self-center text-[#044902]">Riwayat Penukaran</Text>
                    </View>
                </TouchableOpacity>

                <View className="flex-row justify-center pt-5">
                    <View className="pr-5">
                        <Text className=" text-[24px] text-center font-medium self-center text-[#044902]">10.000</Text>
                        <View className="">
                            <Text className=" text-[14px] font-medium text-center p-2 self-center text-[#044902]">Uang Hari Ini</Text>
                        </View>
                    </View>
                    <View>
                        <Text className=" text-[24px] text-center font-medium self-center text-[#044902]">10.000</Text>
                        <View className="">
                            <Text className=" text-[14px] font-medium text-center p-2 self-center text-[#044902]">Total Tukar</Text>
                        </View>
                    </View>
                </View>

                <Text className=" text-[16px] font-medium left-[34] p-2 text-[#044902]">Mode Tukar</Text>
                <View className="flex-row justify-center pt-1 bg-transparent w-[265] h-[39] self-center border-[0.2px] rounded-lg">
                    <TouchableOpacity
                        onPress={() => setSelectedButton('Voucher')}
                        style={{
                            backgroundColor: selectedButton === 'Voucher' ? '#044902' : 'transparent',
                            marginRight: 1,
                            width: 125,
                            height: 29,
                            borderRadius: 5,
                        }}
                    >
                        <Text className=" text-[14px] text-center p-1 font-medium self-center text-[#999999]">Voucher</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setSelectedButton('Pajak')}
                        style={{
                            backgroundColor: selectedButton === 'Pajak' ? '#044902' : 'transparent',
                            width: 125,
                            height: 29,
                            borderRadius: 5,
                        }}
                    >
                        <Text className=" text-[14px] text-center p-1 font-medium self-center text-[#999999]">Pajak</Text>
                    </TouchableOpacity>
                </View>

                <Text className=" text-[16px] font-medium left-[34] p-2 pt-[20] text-[#044902]">Nominal</Text>
                <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 1 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            onPress={() => handleNominalPress('10.000')}
                            style={{
                                backgroundColor: selectedNominal === '10.000' ? '#044902' : 'transparent',
                                marginRight: 10,
                                width: 80,
                                height: 30,
                                borderWidth: 0.2,
                                borderRadius: 5,
                            }}
                        >
                            <Text style={{ fontSize: 14, textAlign: 'center', padding: 5, color: '#999999' }}>10.000</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => handleNominalPress('30.000')}
                            style={{
                                backgroundColor: selectedNominal === '30.000' ? '#044902' : 'transparent',
                                marginRight: 10,
                                width: 80,
                                height: 30,
                                borderWidth: 0.2,
                                borderRadius: 5,
                            }}
                        >
                            <Text style={{ fontSize: 14, textAlign: 'center', padding: 5, color: '#999999' }}>30.000</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => handleNominalPress('50.000')}
                            style={{
                                backgroundColor: selectedNominal === '50.000' ? '#044902' : 'transparent',
                                marginRight: 2,
                                width: 80,
                                height: 30,
                                borderWidth: 0.2,
                                borderRadius: 5,
                            }}
                        >
                            <Text style={{ fontSize: 14, textAlign: 'center', padding: 5, color: '#999999' }}>50.000</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 1, padding: 10 }}>
                        <TouchableOpacity
                            onPress={() => handleNominalPress('100.000')}
                            style={{
                                backgroundColor: selectedNominal === '100.000' ? '#044902' : 'transparent',
                                marginRight: 10,
                                width: 80,
                                height: 30,
                                borderWidth: 0.2,
                                borderRadius: 5,
                            }}
                        >
                            <Text style={{ fontSize: 14, textAlign: 'center', padding: 5, color: '#999999' }}>100.000</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => handleNominalPress('150.000')}
                            style={{
                                backgroundColor: selectedNominal === '150.000' ? '#044902' : 'transparent',
                                marginRight: 10,
                                width: 80,
                                height: 30,
                                borderWidth: 0.2,
                                borderRadius: 5,
                            }}
                        >
                            <Text style={{ fontSize: 14, textAlign: 'center', padding: 5, color: '#999999' }}>150.000</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => handleNominalPress('Nominal Lain')}
                            style={{
                                backgroundColor: selectedNominal === 'Nominal Lain' ? '#044902' : 'transparent',
                                marginRight: 2,
                                width: 80,
                                height: 30,
                                borderWidth: 0.2,
                                borderRadius: 5,
                            }}
                        >
                            <Text style={{ fontSize: 11, textAlign: 'center', padding: 5, color: '#999999', paddingTop: 7 }}>Nominal Lain</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Bagian input Nominal Lain */}
                <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 1 }}>
                    {/* Input untuk Nominal Lain */}
                    {renderCustomNominalInput()}
                </View>

                <View className="flex-row justify-center pt-1 bg-transparent w-[230] h-[35] self-center border-[0.2px] rounded-lg top-8">
                    <TouchableOpacity
                        onPress={() => setSelectedButton('Tukarkan')}
                        style={{
                            backgroundColor: selectedButton === 'Tukarkan' ? '#044902' : 'transparent',
                            marginRight: 1,
                            width: 125,
                            height: 29,
                            borderRadius: 5,
                        }}
                    >
                        <Text className=" text-[14px] text-center p-1 font-medium self-center text-[#999999]">Tukarkan</Text>
                    </TouchableOpacity>
                </View>

                {/* <View className="flex-row justify-center pt-1 bg-transparent w-[265] h-[39] self-center border-[0.2px] rounded-lg">
                    <View className="bg-transparent mr-1 w-[125] h-[29] border-[0.2px] rounded-lg">
                        <Text className=" text-[14px] text-center p-1 font-medium self-center text-[#999999]">10.000</Text>
                    </View>
                    <View className="bg-transparent w-[125] h-[29] border-[0.2px] rounded-lg">
                        <Text className=" text-[14px] text-center p-1 font-medium self-center text-[#999999]">20.000</Text>
                    </View>
                </View> */}
            </View>

        </SafeAreaView >
    )
}

export default Dompet

