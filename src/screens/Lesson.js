import {
  View,
  ScrollView,
  Text,
  ImageBackground,
  StyleSheet,
  Alert,
  Dimensions,
  TextInput,
  Pressable,
  Animated,
} from 'react-native';
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useEffect, useRef } from 'react';

const { width, height } = Dimensions.get('screen');

function Lesson({ navigation, route }) {
  const [questionCount, setQuestionCount] = useState(1);
  const [score, setScore] = useState(0);
  const [firstNumber, setFirstNumber] = useState();
  const [secondNumber, setSecondNumber] = useState();
  const [answer, setAnswer] = useState();
  const [result, setResult] = useState();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const start = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    let lessonName = route.params.lessonName;
    let myArray = lessonName.split(' ');
    if (myArray[0] === 'Bảng') setFirstNumber(parseInt(myArray[1]));
  });

  const exit = () => {
    Alert.alert(
      'Thoát phiên học',
      'Bạn có chắc muốn thoát tiết học này không? Kết quả học tập sẽ không được lưu lại.',
      [{ text: 'HỦY' }, { text: 'CÓ', onPress: () => navigation.navigate('ListLesson') }]
    );
  };

  const finish = () => {
    navigation.navigate('ListLesson');
  };

  const onPressButton = () => {
    if (answer === firstNumber * secondNumber) setResult('correct');
    else setResult('incorrect');
    renderQuestion();
  };

  const renderQuestion = () => {
    let secondNumber = Math.floor(Math.random() * 9) + 1;
    // setSecondNumber(secondNumber);
    return (
      <ScrollView contentContainerStyle={styles.questionContainer}>
        <Text style={styles.questionText}>{`${firstNumber} x ${secondNumber} = ?`}</Text>

        <TextInput
          style={{
            height: 100,
            width: '80%',
            borderWidth: 1,
            fontSize: 40,
            color: '#3D67FF',
            marginTop: 70,
            borderRadius: 20,
            paddingHorizontal: 20,
          }}
          onChangeText={(text) => setAnswer(text)}
          placeholder="Đáp án"
          keyboardType="number-pad"
        ></TextInput>

        <Pressable style={styles.answerButton} onPress={onPressButton}>
          <Text style={styles.buttonText}>Kiểm tra</Text>
        </Pressable>
      </ScrollView>
    );
  };

  return (
    <ImageBackground source={require('../../assets/background.jpg')} style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="close" size={28} style={{ marginLeft: 16 }} color="black" onPress={exit} />
        <View style={styles.questionNumber}>
          <Text style={styles.textScore}>Số câu hỏi: {questionCount} /10</Text>
        </View>
        <View style={styles.score}>
          <Text style={styles.textScore}>{score}</Text>
        </View>
      </View>

      <View>
        {renderQuestion()}

        <Animated.View
          style={{
            display: 'flex',
            alignItems: 'center',
            width,
            height: '100%',
            borderTopLeftRadius: 75,
            backgroundColor: result === 'correct' ? '#8DEA85' : '#EE6E6E',
            opacity: fadeAnim,
          }}
        >
          {result === 'correct' && (
            <>
              <Text style={styles.textShowAnswer}>Chính xác. Bạn giỏi quá!</Text>
              <Text style={{ ...styles.textShowAnswer, marginTop: 0 }}>
                Bạn được cộng thêm 10 điểm
              </Text>
            </>
          )}
          {result === 'incorrect' && (
            <>
              <Text style={styles.textShowAnswer}>Tiếc quá, sai mất rồi! </Text>
              <Text style={{ ...styles.textShowAnswer, marginTop: 0 }}>
                Đáp án đúng: {showCorrectAnswer()}
              </Text>
            </>
          )}
        </Animated.View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3D67FF',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    width: '100%',
    height: height * 0.07,
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 3,
  },
  questionNumber: {
    borderRadius: 50,
    width: '52%',
    height: 36,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E4E4E4',
  },
  score: {
    borderRadius: 50,
    width: '20%',
    height: 36,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E4E4E4',
  },
  textScore: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
  },
  questionContainer: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionText: {
    fontSize: 60,
    color: '#3D67FF',
  },
  answerButton: {
    width: 200,
    height: 80,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 270,
  },
  buttonText: {
    fontSize: 32,
    color: '#3D67FF',
  },
});
export default Lesson;
