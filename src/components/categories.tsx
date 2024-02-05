import {View, ScrollView, TouchableOpacity, Text, Image} from 'react-native';
import React from 'react';
import {categoryData} from '../constants/index';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Categories({activeCategory, setActiveCategory}) {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{marginHorizontal: 4}}
        contentContainerStyle={{paddingHorizontal: 15}}>
        {categoryData.map((category, index) => {
          let isActive = category.name == activeCategory;
          let activeButtonClass = isActive
            ? {borderRadius: 999, padding: 10, backgroundColor: 'red'}
            : {borderRadius: 999, padding: 10, backgroundColor: 'gray'};
          return (
            <TouchableOpacity
              key={index}
              onPress={() => setActiveCategory(category.name)}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginVertical: 5,
              }}>
              <View style={activeButtonClass}>
                <Image
                  source={{uri: category.image}}
                  style={{width: hp(6), height: hp(6), borderRadius: 999}}
                />
              </View>
              <Text style={{color: '#444', fontSize: hp(1.6)}}>
                {category.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
