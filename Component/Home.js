import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Bars3CenterLeftIcon, BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { TextInput } from 'react-native-gesture-handler';

const Home = () => {
  const handleBarsIconPress = () => {
    // Lakukan tindakan ketika ikon 'Bars' ditekan
    console.log('Pressed Bars icon');
  };

  return (
    <SafeAreaView className="flex-1 bg-lime-50">
      

      <ScrollView>
      <Image source={require('../assets/Rectangle-22.png')} className="w-full h-80 rounded-b-3xl " />
      <View className="flex-1 h-[700px]">
      <View className="flex-row pl-4 top-[-255px] z-10">
        <TouchableOpacity onPress={handleBarsIconPress}>
          <Bars3CenterLeftIcon size={30} color="white" />
        </TouchableOpacity>
        <Text className="pl-4 font-bold text-xl text-white">Hi Heejau</Text>
        <TouchableOpacity onPress={() => console.log('Pressed bell')}>
          <BellIcon size={30} color="white" style={{ marginLeft: 150 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Pressed scan-line')}>
          <Image source={require('../assets/scan-line.png')} className="ml-5 h-7" />
        </TouchableOpacity>
      </View>

      <View className="flex-row pl-9 top-[-215px] z-10 ">
        <View className="border p-2 rounded-lg border-white w-80 flex-row pl-3 ">
          <MagnifyingGlassIcon size={27} color="white"
            className="pl-18" />
          <TextInput className="text-white w-60 pl-3"
            placeholder='Search'
            placeholderTextColor='white'
            />
        </View>

      </View>
      <View className="pl-5 top-[-190] z-10">
        <Text className="text-white font-bold text-base">Ketahui tentang Tumbuhan</Text>
      </View>
      <View className="flex-row p-5 justify-between top-[-200px] w-full">
        <TouchableOpacity onPress={() => console.log('Pressed 1')}>
          <Image source={require('../assets/Rectangle-24.png')} className="rounded-b-3xl " />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Pressed 2')}>
          <Image source={require('../assets/Rectangle-25.png')} className="rounded-b-3xl " />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Pressed 3')}>
          <Image source={require('../assets/Rectangle-26.png')} className="rounded-b-3xl" />
        </TouchableOpacity>
      </View>


      <View className="top-0 left-0 [font-family:'Reem_Kufi-Bold',Helvetica] font-bold text-foundation-blacknormal text-[18px] tracking-[0] leading-[normal]">
        <Text className="pl-5 w-[490px] h-[107px] top-[-190px] font-bold text-base">
          Pelajari tentang Tumbuhan
        </Text>
        </View>

        <View className=" pl-5 pr-[120px] w-[490px] h-[107px] top-[-270px]">
        <ScrollView horizontal contentContainerStyle={{ flexDirection: 'row', padding: 5, alignItems: 'center'}}
        showsHorizontalScrollIndicator={false}>
          <View className="w-[152px] h-[72px] bg-black rounded-[8px]">
            <TouchableOpacity onPress={() => console.log('coleus')}>
            <Image source={require('../assets/pot3.png')}
              className="absolute w-[42px] rounded-l-lg h-[72px] object-cover"
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
              className="absolute w-[46px] rounded-l-lg h-[72px] top-0 left-0 object-cover"
              />
            </TouchableOpacity>
          </View>
          <View className="w-[152px] h-[72px] ml-2 bg-black rounded-[8px]">
            <TouchableOpacity onPress={() => console.log('coleus')}>
            <Image source={require('../assets/pot3.png')}
              className="absolute w-[42px] rounded-l-lg h-[72px] object-cover"
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
{/* tanaman Populer */}
          <View className="top-0 left-0 [font-family:'Reem_Kufi-Bold',Helvetica] font-bold text-foundation-blacknormal text-[18px] tracking-[0] leading-[normal]">
          <Text className="pl-5 w-[490px] h-[107px] top-[-250px] font-bold text-base">
            Tanaman Populer
          </Text>
          </View>

          <View className="pl-5 pr-[120px] w-[490px] h-[195px] top-[-330px]">
        <ScrollView horizontal contentContainerStyle={{ flexDirection: 'row', padding: 5, alignItems: 'center'}}
        showsHorizontalScrollIndicator={false}>
          <View className="relative w-[161px] h-[177px] bg-black rounded-[8px]">
            <TouchableOpacity onPress={() => console.log('pop1')}>
            <Image source={require('../assets/unsplash-tum1.png')}
              className="h-[78px] absolute w-[149px] top-[8px] left-[6px]"
              />
            <Text className="absolute top-[90px] left-[6px] [font-family:'Reem_Kufi-Bold',Helvetica] font-bold text-white text-[18px] tracking-[0] leading-[normal]">
            Yarrow
            </Text>
            <Text className="absolute w-[149px] top-[117px] left-[6px] [font-family:'Reem_Kufi-Regular',Helvetica] font-normal text-white text-[12px] tracking-[0] leading-[normal]">
            Tanaman musim panas membutuhkan lebih sedikit air untuk pertumbuhan
            </Text>
            </TouchableOpacity>
          </View>
          <View className="relative w-[161px] ml-2 h-[177px] bg-black rounded-[8px]">
          <TouchableOpacity onPress={() => console.log('pop2')}>
            <Image source={require('../assets/unsplash-tum2.png')}
              className="h-[78px] absolute w-[149px] top-[8px] left-[6px]"
              />
            <Text className="absolute top-[90px] left-[6px] [font-family:'Reem_Kufi-Bold',Helvetica] font-bold text-white text-[18px] tracking-[0] leading-[normal]">
            Ageratum
            </Text>
            <Text className="absolute w-[149px] top-[117px] left-[6px] [font-family:'Reem_Kufi-Regular',Helvetica] font-normal text-white text-[12px] tracking-[0] leading-[normal]">
            Tanaman musim dingin membutuhkan air minimum untuk pertumbuhan
            </Text>
            </TouchableOpacity>
          </View>
          <View className="relative w-[161px] ml-2 h-[177px] bg-black rounded-[8px]">
          <TouchableOpacity onPress={() => console.log('pop3')}>
            <Image source={require('../assets/unsplash-tum1.png')}
              className="h-[78px] absolute w-[149px] top-[8px] left-[6px]"
              />
            <Text className="absolute top-[90px] left-[6px] [font-family:'Reem_Kufi-Bold',Helvetica] font-bold text-white text-[18px] tracking-[0] leading-[normal]">
            Yarrow
            </Text>
            <Text className="absolute w-[149px] top-[117px] left-[6px] [font-family:'Reem_Kufi-Regular',Helvetica] font-normal text-white text-[12px] tracking-[0] leading-[normal]">
            Tanaman musim panas membutuhkan lebih sedikit air untuk pertumbuhan
            </Text>
            </TouchableOpacity>
            </View>
            <View className="relative w-[161px] ml-2 h-[177px] bg-black rounded-[8px]">
          <TouchableOpacity onPress={() => console.log('pop2')}>
            <Image source={require('../assets/unsplash-tum2.png')}
              className="h-[78px] absolute w-[149px] top-[8px] left-[6px]"
              />
            <Text className="absolute top-[90px] left-[6px] [font-family:'Reem_Kufi-Bold',Helvetica] font-bold text-white text-[18px] tracking-[0] leading-[normal]">
            Ageratum
            </Text>
            <Text className="absolute w-[149px] top-[117px] left-[6px] [font-family:'Reem_Kufi-Regular',Helvetica] font-normal text-white text-[12px] tracking-[0] leading-[normal]">
            Tanaman musim dingin membutuhkan air minimum untuk pertumbuhan
            </Text>
            </TouchableOpacity>
          </View>
          </ScrollView>
          </View>

{/* tanaman musiman */}
          <View className="top-0 left-0 [font-family:'Reem_Kufi-Bold',Helvetica] font-bold text-foundation-blacknormal text-[18px] tracking-[0] leading-[normal]">
          <Text className="pl-5 w-[490px] h-[107px] top-[-305px] font-bold text-base">
            Tanaman Musiman
          </Text>
          </View>

          <View className="pl-5 pr-[120px] w-[490px] h-[195px] top-[-385px]">
        <ScrollView horizontal contentContainerStyle={{ flexDirection: 'row', padding: 5, alignItems: 'center'}}
        showsHorizontalScrollIndicator={false}>
          <View className="relative w-[161px] h-[177px] bg-black rounded-[8px]">
            <TouchableOpacity onPress={() => console.log('pop1')}>
            <Image source={require('../assets/unsplash-tum1.png')}
              className="h-[78px] absolute w-[149px] top-[8px] left-[6px]"
              />
            <Text className="absolute top-[90px] left-[6px] [font-family:'Reem_Kufi-Bold',Helvetica] font-bold text-white text-[18px] tracking-[0] leading-[normal]">
            Yarrow
            </Text>
            <Text className="absolute w-[149px] top-[117px] left-[6px] [font-family:'Reem_Kufi-Regular',Helvetica] font-normal text-white text-[12px] tracking-[0] leading-[normal]">
            Tanaman musim panas membutuhkan lebih sedikit air untuk pertumbuhan
            </Text>
            </TouchableOpacity>
          </View>
          <View className="relative w-[161px] ml-2 h-[177px] bg-black rounded-[8px]">
          <TouchableOpacity onPress={() => console.log('pop2')}>
            <Image source={require('../assets/unsplash-tum2.png')}
              className="h-[78px] absolute w-[149px] top-[8px] left-[6px]"
              />
            <Text className="absolute top-[90px] left-[6px] [font-family:'Reem_Kufi-Bold',Helvetica] font-bold text-white text-[18px] tracking-[0] leading-[normal]">
            Ageratum
            </Text>
            <Text className="absolute w-[149px] top-[117px] left-[6px] [font-family:'Reem_Kufi-Regular',Helvetica] font-normal text-white text-[12px] tracking-[0] leading-[normal]">
            Tanaman musim dingin membutuhkan air minimum untuk pertumbuhan
            </Text>
            </TouchableOpacity>
          </View>
          <View className="relative w-[161px] ml-2 h-[177px] bg-black rounded-[8px]">
          <TouchableOpacity onPress={() => console.log('pop3')}>
            <Image source={require('../assets/unsplash-tum1.png')}
              className="h-[78px] absolute w-[149px] top-[8px] left-[6px]"
              />
            <Text className="absolute top-[90px] left-[6px] [font-family:'Reem_Kufi-Bold',Helvetica] font-bold text-white text-[18px] tracking-[0] leading-[normal]">
            Yarrow
            </Text>
            <Text className="absolute w-[149px] top-[117px] left-[6px] [font-family:'Reem_Kufi-Regular',Helvetica] font-normal text-white text-[12px] tracking-[0] leading-[normal]">
            Tanaman musim panas membutuhkan lebih sedikit air untuk pertumbuhan
            </Text>
            </TouchableOpacity>
            </View>
            <View className="relative w-[161px] ml-2 h-[177px] bg-black rounded-[8px]">
          <TouchableOpacity onPress={() => console.log('pop2')}>
            <Image source={require('../assets/unsplash-tum2.png')}
              className="h-[78px] absolute w-[149px] top-[8px] left-[6px]"
              />
            <Text className="absolute top-[90px] left-[6px] [font-family:'Reem_Kufi-Bold',Helvetica] font-bold text-white text-[18px] tracking-[0] leading-[normal]">
            Ageratum
            </Text>
            <Text className="absolute w-[149px] top-[117px] left-[6px] [font-family:'Reem_Kufi-Regular',Helvetica] font-normal text-white text-[12px] tracking-[0] leading-[normal]">
            Tanaman musim dingin membutuhkan air minimum untuk pertumbuhan
            </Text>
            </TouchableOpacity>
          </View>
          </ScrollView>
          </View>
      </View>
      </ScrollView>




    </SafeAreaView>
  )
}

export default Home

