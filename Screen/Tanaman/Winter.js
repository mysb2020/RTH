import React from 'react'
import { Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'


const Winter = () => {


    return (
        <SafeAreaView className="flex-1 bg-lime-50">


            <ScrollView>

                <Image source={require('../../assets/alyssum.jpg')} className=" h-[289]" />
                <View className="flex-1 h-[320px] p-5 top-[-80px] left-[110]" >
                    <Image source={require('../../assets/alyssum.jpg')} className=" absolute top-[25] left-[20] h-[113px] w-[140px] rounded-md" style={{
                        borderWidth: 2,
                        borderColor: 'white',
                    }} />
                    <Text className="absolute text-base font-bold text-[#022201] top-[150] left-[60]">Alyssum</Text>
                </View>
                <View className="absolute top-[390] w-[343] self-center" >
                    <Text className="absolute text-sm font-medium text-[#022201] text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget congue justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec vitae vulputate arcu. Donec ultricies malesuada varius. Vestibulum congue magna sit amet malesuada laoreet.</Text>
                </View>

                <View className=" pl-5 pr-[120px] w-[490px] h-[107px] top-[-80px]">
                    <ScrollView horizontal contentContainerStyle={{ flexDirection: 'row', padding: 5, alignItems: 'center' }}
                        showsHorizontalScrollIndicator={false}>
                        <View className="w-[284px] h-[131px] bg-black rounded-lg">
                            <Image source={require('../../assets/wntr1.jpg')}
                                className="absolute w-[284px] h-[131px] rounded-lg object-cover"
                            />
                        </View>
                        <View className="relative w-[284px] ml-2 h-[131px] bg-black rounded-lg">
                            <Image source={require('../../assets/wntr1.jpg')}
                                className="absolute w-[284px] h-[131px] rounded-lg object-cover"
                            />
                        </View>
                    </ScrollView>
                </View>

                <View className="flex-1 h-[320px] p-5 top-[-70px]" >
                    <Text className="absolute text-base font-bold text-[#022201] top-[10] left-[25]">Gambar bunga musim dingin</Text>
                    <View className="pr-[120px] w-[490px] h-[107px] top-[30px]">
                    <ScrollView horizontal contentContainerStyle={{ flexDirection: 'row', padding: 5, alignItems: 'center' }}
                        showsHorizontalScrollIndicator={false}>
                        <View className="w-[84px] h-[101px] bg-black rounded-lg">
                            <Image source={require('../../assets/wntr1.jpg')}
                                className="absolute w-[84px] h-[101px] rounded-lg object-cover"
                            />
                        </View>
                        <View className="relative w-[84px] ml-2 h-[101px] bg-black rounded-lg">
                            <Image source={require('../../assets/alyssum.jpg')}
                                className="absolute w-[84px] h-[101px] rounded-lg object-cover"
                            />
                        </View>
                        <View className="relative w-[84px] ml-2 h-[101px] bg-black rounded-lg">
                            <Image source={require('../../assets/wntr1.jpg')}
                                className="absolute w-[84px] h-[101px] rounded-lg object-cover"
                            />
                        </View>
                        <View className="relative w-[84px] ml-2 h-[101px] bg-black rounded-lg">
                            <Image source={require('../../assets/alyssum.jpg')}
                                className="absolute w-[84px] h-[101px] rounded-lg object-cover"
                            />
                        </View>
                    </ScrollView>
                </View>
                </View>


            </ScrollView>




        </SafeAreaView>
    )
}

export default Winter

