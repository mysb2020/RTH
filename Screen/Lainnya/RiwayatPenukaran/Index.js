import React from 'react'
import { Text, View, TouchableOpacity, TextInput, SafeAreaView } from 'react-native'
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { useNavigation } from '@react-navigation/native';

const Index = () => {
    const navigation = useNavigation();

    const handleLainnyaPress = () => {
        // Navigasi ke halaman Lainnya.js
        navigation.navigate('LainnyaScreen'); // kembali ke halaman Lainnya 
    };
    return (
        <View style={{ backgroundColor: 'transparent', position: 'absolute', top: 50, width: 400, flexDirection: 'row', alignItems: 'center', justifyContent: "space-around", }}>
            <TouchableOpacity className="left-[-20]" onPress={handleLainnyaPress}>
                <ArrowLeftIcon size={24} color="#022201" className="" />
            </TouchableOpacity>
            <Text className=" text-[25px] left-[-50] pb-2 self-center text-[#044902]">Riwayat Penukaran</Text>
        </View>
    )
}

export default Index

