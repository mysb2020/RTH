import React from 'react'
import { Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { TextInput } from 'react-native-gesture-handler';

const Tanaman = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      
    <ScrollView>
      <View className=" flex-1 h-screen">
        <View className="p-20 items-center justify-center">
          <View className="flex-row p-2 border rounded-lg w-[355px] border-[#022201]">
            <MagnifyingGlassIcon size={27} color="#022201"
                  className=" p-40" />
            <TextInput className="text-[#ffffff] pl-3 w-72"
              placeholder='Search'
              placeholderTextColor='#022201'
              />
          </View>
        </View>

        <View className=" pl-5 pr-[120px] w-[490px] h-[107px] top-[-60px]">
        <ScrollView horizontal contentContainerStyle={{ flexDirection: 'row', padding: 5, alignItems: 'center'}}
        showsHorizontalScrollIndicator={false}>
          <View className="w-[152px] h-[72px] bg-black rounded-[8px]">
            <TouchableOpacity onPress={() => console.log('coleus')}>
            <Image source={require('../assets/pot3.png')}
              className="absolute w-[42px] h-[72px] rounded-l-lg object-cover"
              />
            <Text className="absolute top-[22px] left-[58px] [font-family:'Reem_Kufi-Bold',Helvetica] font-bold text-white text-[18px] tracking-[0] leading-[normal]">
              Coleus
            </Text>
            </TouchableOpacity>
          </View>
          <View className="relative w-[152px] ml-2 h-[72px] bg-black rounded-[8px]">
          <TouchableOpacity onPress={() => console.log('common yarrow')}>
            <Image source={require('../assets/pot2.png')}
              className="absolute w-[46px] rounded-l-lg h-[72px] top-0 left-0 object-cover"
              />
            <Text className="absolute w-[79px] top-[9px] left-[62px] [font-family:'Reem_Kufi-Bold',Helvetica] font-bold text-white text-[18px] tracking-[0] leading-[normal]">
              Common Yarrow
            </Text>
            </TouchableOpacity>
          </View>

          <View className="relative w-[152px] h-[72px] ml-2 bg-black rounded-[8px]">
          <TouchableOpacity onPress={() => console.log('zinnia')}>
            <Text className="absolute top-[22px] left-[62px] [font-family:'Reem_Kufi-Bold',Helvetica] font-bold text-white text-[18px] tracking-[0] leading-[normal]">
              Zinnia
            </Text>
            <Image source={require('../assets/b.pot.jpg')}
              className="absolute w-[46px] h-[72px] rounded-l-lg top-0 left-0 object-cover"
              />
            </TouchableOpacity>
          </View>
          <View className="w-[152px] h-[72px] ml-2 bg-black rounded-[8px]">
            <TouchableOpacity onPress={() => console.log('coleus')}>
            <Image source={require('../assets/pot3.png')}
              className="absolute w-[42px] h-[72px] rounded-l-lg object-cover"
              />
            <Text className="absolute top-[22px] left-[58px] [font-family:'Reem_Kufi-Bold',Helvetica] font-bold text-white text-[18px] tracking-[0] leading-[normal]">
              Coleus
            </Text>
            </TouchableOpacity>
          </View>
          <View className="relative w-[152px] h-[72px] ml-2 bg-black rounded-[8px]">
          <TouchableOpacity onPress={() => console.log('zinnia')}>
            <Text className="absolute top-[22px] left-[62px] [font-family:'Reem_Kufi-Bold',Helvetica] font-bold text-white text-[18px] tracking-[0] leading-[normal]">
              Zinnia
            </Text>
            <Image source={require('../assets/b.pot.jpg')}
              className="absolute w-[46px] rounded-l-lg h-[72px] top-0 left-0 object-cover"
              />
            </TouchableOpacity>
          </View>
          </ScrollView>
          </View>

          <View className="p-5">
          <View className="relative top-[-50px] w-[161px] h-[190px] bg-black rounded-[8px]">
            <TouchableOpacity onPress={() => console.log('pop1')}>
            <Image source={require('../assets/alyssum.jpg')}
              className="h-[130px] rounded-t-lg absolute  w-[161px] "
              />
            <Text className="absolute top-[145px] left-[50px] [font-family:'Reem_Kufi-Bold',Helvetica] font-bold text-white text-[18px] tracking-[0] leading-[normal]">
            Winter
            </Text>
            </TouchableOpacity>
          </View>

          <View className="relative top-[-200px] left-[188px] w-[161px] h-[190px] bg-black rounded-[8px]">
            <TouchableOpacity onPress={() => console.log('pop1')}>
            <Image source={require('../assets/Summer.jpg')}
              className="h-[130px] rounded-t-lg absolute  w-[161px] "
              />
            <Text className="absolute top-[145px] left-[50px] [font-family:'Reem_Kufi-Bold',Helvetica] font-bold text-white text-[18px] tracking-[0] leading-[normal]">
            Summer
            </Text>
            </TouchableOpacity>
          </View>

          <View className="relative top-[-200px] w-[161px] h-[190px] bg-black rounded-[8px]">
            <TouchableOpacity onPress={() => console.log('pop1')}>
            <Image source={require('../assets/Rain.jpg')}
              className="h-[130px] rounded-t-lg absolute  w-[161px] "
              />
            <Text className="absolute top-[145px] left-[50px] [font-family:'Reem_Kufi-Bold',Helvetica] font-bold text-white text-[18px] tracking-[0] leading-[normal]">
            Rain
            </Text>
            </TouchableOpacity>
          </View>

          <View className="relative top-[-350px] left-[188px] w-[161px] h-[190px] bg-black rounded-[8px]">
            <TouchableOpacity onPress={() => console.log('pop1')}>
            <Image source={require('../assets/autumn.jpg')}
              className="h-[130px] rounded-t-lg absolute  w-[161px] "
              />
            <Text className="absolute top-[145px] left-[50px] [font-family:'Reem_Kufi-Bold',Helvetica] font-bold text-white text-[18px] tracking-[0] leading-[normal]">
            Autumn
            </Text>
            </TouchableOpacity>
          </View>

          </View>

      </View>

    </ScrollView>

    </SafeAreaView>
  )
}

export default Tanaman

