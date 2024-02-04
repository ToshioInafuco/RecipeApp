import {View, Text, StyleSheet, StatusBar, Image} from 'react-native';
import React, {useEffect} from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';
import {useNavigation, ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export default function WelcomeScreen(): React.JSX.Element {
  const ring1padding = useSharedValue(0);
  const ring2padding = useSharedValue(0);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  useEffect(() => {
    ring1padding.value = 0;
    ring2padding.value = 0;

    setTimeout(
      () => (ring1padding.value = withSpring(ring1padding.value + hp(5))),
      100,
    );
    setTimeout(
      () => (ring2padding.value = withSpring(ring2padding.value + hp(5.5))),
      300,
    );
    setTimeout(() => navigation.navigate('Home'), 2000);
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'default'} />

      {/* logo image with rings */}
      <Animated.View
        style={{
          borderRadius: 1,
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          padding: ring2padding,
        }}>
        <Animated.View
          style={{
            borderRadius: 1,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            padding: ring1padding,
          }}>
          <Image
            source={require('../../assets/images/peixetabua.png')}
            style={{width: hp(20), height: hp(20)}}
          />
        </Animated.View>
      </Animated.View>

      {/* title and punchline */}
      <View style={textStyles.container}>
        <Text style={textStyles.title}>Foody</Text>
        <Text style={textStyles.subtitle}>Food is always right</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFC107', // Cor de fundo âmbar
  },
});

// try to improve style here
// const imageStyles = StyleSheet.create({
//   container: {
//     borderRadius: 1,
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     padding: ring2padding,
//   },
//   view: {
//     borderRadius: 1,
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     padding: ring1padding,
//   },
// });

const textStyles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    height: 100, // Ajuste a altura conforme necessário
  },
  title: {
    fontSize: hp(7),
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: hp(2),
    color: 'white',
    letterSpacing: 2,
  },
});
