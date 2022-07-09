import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

function Splash({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('ListLesson');
    }, 2000);
  }, []);
  return (
    <View style={styles.body}>
      <View style={styles.main}>
        <Image style={styles.image} source={require('../../assets/logo.png')}></Image>
        <Text style={styles.text}>FunMath</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#3D67FF',
    flex: 1,
  },
  main: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    margin: 20,
  },
  text: {
    fontSize: 50,
    color: '#ffffff',
  },
});
export default Splash;
