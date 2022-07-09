import { ImageBackground, StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Toast from 'react-native-toast-message';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function ListLesson({ navigation, route }) {
  const listLessons = [
    'Bảng 2',
    'Bảng 3',
    'Bảng 4',
    'Bảng 5',
    'Bảng 6',
    'Bảng 7',
    'Bảng 8',
    'Bảng 9',
    'Tổng hợp',
    'Tùy chọn',
  ];

  return (
    <ScrollView>
      <ImageBackground source={require('../../assets/background.jpg')} style={styles.container}>
        {listLessons.map((lesson) => (
          <Pressable
            onPress={() => {
              navigation.navigate('Lesson', { lessonName: lesson });
            }}
          >
            <View style={styles.lesson}>
              <Text style={styles.text}>{lesson}</Text>
            </View>
          </Pressable>
        ))}
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  lesson: {
    width: 170,
    height: 140,
    margin: 10,
    borderRadius: 20,
    backgroundColor: '#0284da',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
});
