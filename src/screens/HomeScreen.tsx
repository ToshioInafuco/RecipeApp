import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {BellIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import Categories from '../components/categories';

export default function HomeScreen(): React.JSX.Element {
  const [activeCategory, setActiveCategory] = useState('Beef');

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50}}
        style={styles.scrollView}>
        {/* avatar and bell icon */}
        <View style={styles.imageView}>
          <Image
            source={require('../../assets/images/avatarimage.jpg')}
            style={{height: hp(5), width: hp(5.5)}}
          />
          <BellIcon size={hp(4)} color={'gray'} />
        </View>

        {/* greetings and punchline */}
        <View style={styles.textView}>
          <Text style={{fontSize: hp(1.7), color: '#444'}}>Hello, Beto!</Text>
          <View>
            <Text style={{fontSize: hp(3.8), fontWeight: '800', color: '#444'}}>
              Make your own food
            </Text>
          </View>
        </View>

        {/* search bar */}
        <View style={styles.searchBar}>
          <TextInput
            placeholder="Search any recipe"
            placeholderTextColor={'gray'}
            style={{
              fontSize: hp(1.7),
              flex: 1,
              marginBottom: 1,
              paddingLeft: 3,
              letterSpacing: 1,
            }}
          />
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 999,
              padding: hp(1.5),
            }}>
            <MagnifyingGlassIcon
              size={hp(2.5)}
              color={'gray'}
              strokeWidth={4}
            />
          </View>
        </View>

        {/* categories */}
        <View>
          <Categories
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  scrollView: {
    marginVertical: hp(1.5),
  },
  imageView: {
    marginHorizontal: 16, // Equivalente a mx-4 no Tailwind CSS
    flexDirection: 'row', // Equivalente a flex-row no Tailwind CSS
    justifyContent: 'space-between', // Equivalente a justify-between no Tailwind CSS
    alignItems: 'center', // Equivalente a itens-center no Tailwind CSS
    marginBottom: 8, // Equivalente a mb-2 no Tailwind CSS
  },
  textView: {
    marginHorizontal: hp(2), // Equivalente a mx-4
    marginVertical: 2, // Equivalente a space-y-2
    marginBottom: 2, // Equivalente a mb-2
  },
  searchBar: {
    marginHorizontal: hp(2), // Equivalente a mx-4
    borderRadius: 999, // Um valor grande para tornar a View circular (rounded-full)
    backgroundColor: 'rgba(0, 0, 0, 0.05)', // bg-black/5
    padding: hp(1), // p-[6px]
    flexDirection: 'row', // flex-row
    alignItems: 'center', // items-center
  },
});
