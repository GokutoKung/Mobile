import React, { useState, useEffect } from "react";
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, TextInput, FlatList, View } from "react-native";
import firebase from '../DBMS/firebaseDB';

const Item = ({ item }) => (
  <View >
    <TextInput
    style={{fontSize: 20, textAlign: "center"}} 
    value={item.solve}
    multiline={true}
    numberOfLines={8}
    />
  </View>
);

export default function SetQuiz() {
  const [quiz, setQuiz] = useState([]);
  const [status, setStatus] = useState(false);

  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [showScore, setShowScore] = React.useState(false);

  const getQuiz = () => {
    const db = firebase.firestore().collection("Practice");
    const all_data = [];
    db.get().then((querySnapshot) => {
      querySnapshot.forEach((res) => {
        const { questionText, title, solve, answerOptions, answerOptions2 } = res.data();
        all_data.push({ key: res.id, questionText, title, solve, answerOptions, answerOptions2 });
      });
    })
    setTimeout(() => {
      const data = all_data.filter(i => i.title == "Calculus")
      setQuiz(data)
      setStatus(true);
    }, 800);
  }

  const handleClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quiz.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  console.log(quiz)
  useEffect(() => {
    getQuiz();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
      />
    )
  }

  let content;
  let list;
  if (status) {
    if (showScore) {
      content = (
        <SafeAreaView style={styles.showScore}>
          Your score is {score} out of {quiz.length}
        </SafeAreaView>
      );

      list = (
        <FlatList
          data={quiz}
          renderItem={renderItem}
          keyExtractor={item => item.key}
        />
      );
    }
    else {
      content = (
        <SafeAreaView>
          <Text style={styles.button}>
            Question {currentQuestion + 1}/{quiz.length}
          </Text>
          <Text style={styles.quest}>
            {quiz[currentQuestion].questionText}
          </Text>

          <SafeAreaView style={styles.answer}>
            {quiz[currentQuestion].answerOptions.map((item) => (
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleClick(item.isCorrect)}
              >
                {item.answerText}
              </TouchableOpacity>
            ))}
          </SafeAreaView>
          <SafeAreaView style={styles.answer}>
            {quiz[currentQuestion].answerOptions2.map((item) => (
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleClick(item.isCorrect)}
              >
                {item.answerText}
              </TouchableOpacity>
            ))}
          </SafeAreaView>
        </SafeAreaView>
      );

    }

  }

  return (
    <SafeAreaView style={styles.container}>
      {content}
      {list}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  showScore: {
    fontSize: 40,
    textAlign: "center",
    justifyContent: "center",
    marginTop: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: "black",
    borderWidth: 2,
    backgroundColor: "#10e063",
    borderRadius: 15,
    color: "white",
  },
  quest: {
    fontSize: 30,
    textAlign: "center",
    justifyContent: "center",
    marginTop: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: "red",
    borderWidth: 2,
    backgroundColor: "#fff",
    borderRadius: 15,
  },
  answer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    justifyContent: "space-around",
    fontSize: 30,
    alignItems: "center",
    margin: 25,
  },
  button: {
    marginTop: 15,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: "black",
    borderWidth: 2,
    backgroundColor: "#f01616",
    color: "white",
    alignSelf: "center",
    borderRadius: 15,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
  },
});
