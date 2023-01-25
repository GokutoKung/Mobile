import React, { useState, useEffect } from "react";
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, FlatList, View } from "react-native";
import { questions } from "./questions";
import firebase from "../DBMS/firebaseDB";

const Item = ({ item }) => (
  <View style={styles.container2}>
    <Text style={styles.item}> {item.name} </Text>
    <Text style={styles.item}> {item.surename} </Text>
    <Text style={styles.item}> {item.quizScore} </Text>
  </View>
);

export default function Quiz({route, navigation}) {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [showScore, setShowScore] = React.useState(false);
  const [user, setUser] = useState([]);

  const {userId} = route.params;

  const handleClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      setUserScore();
    }
  };
  const [time, setTime] = React.useState(600);
  const timerRef = React.useRef(time);
  const twodigittime = (sec) => {
    return Math.floor((sec / 60)).toString().padStart(2, '0') + ':' + Math.floor((sec % 60)).toString().padStart(2, '0')
  }

  const setUserScore = () =>{
    const db = firebase.firestore().collection("UserInfo").doc(userId);
    const data = user.filter((users) => users.key == userId)
    db.set({
        name: data[0].name,
        surename: data[0].surename,
        email: data[0].email,
        password: data[0].password,
        info: data[0].info,
        quizScore: score,
        role: data[0].role
    });
    getUserInfo();
  }

  const getUserInfo = () => {
    const db = firebase.firestore().collection("UserInfo").orderBy("quizScore", "desc");
    const all_data = [];
    db.get().then((querySnapshot) => {
      querySnapshot.forEach((res) => {
        const { name, surename, quizScore, email, password, role, info } = res.data();
        all_data.push({ key: res.id, name, surename, quizScore, email, password, role, info });
      });
    })
    setUser(all_data);
  }

  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
      />
    )
  }

  React.useEffect(() => {
    getUserInfo();
    const timerId = setInterval(() => {
      timerRef.current -= 1;
      if (timerRef.current <= 0) {
        clearInterval(timerId);
        setShowScore(true);
      } else {
        setTime(timerRef.current);
      }
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {showScore ? (
        <SafeAreaView>
          <Text style={styles.header}>Ranking</Text>
          <FlatList
            data={user}
            renderItem={renderItem}
            keyExtractor={item => item.key}
          />
          <Text style={styles.showScore}>Your score is {score} out of {questions.length}</Text>
        </SafeAreaView>
      ) : (
        <>
          <Text style={styles.timer}> {twodigittime(time)} </Text>
          <Text style={styles.box}>
            Question {currentQuestion + 1}/{questions.length}
          </Text>
          <Text style={styles.quest}>{questions[currentQuestion].questionText}</Text>

          <SafeAreaView style={styles.answer}>
            {questions[currentQuestion].answerOptions.map((item) => (
              <TouchableOpacity style={styles.button} onPress={() => handleClick(item.isCorrect)}>
                {item.answerText}
              </TouchableOpacity>
            ))}
          </SafeAreaView>
          <SafeAreaView style={styles.answer}>
            {questions[currentQuestion].answerOptions2.map((item) => (
              <TouchableOpacity style={styles.button} onPress={() => handleClick(item.isCorrect)}>
                {item.answerText}
              </TouchableOpacity>
            ))}
          </SafeAreaView>
        </>
      )}
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
    fontSize: 30,
    textAlign: "center",
    justifyContent: "center",
    marginTop: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: '#10e063',
    borderWidth: 2,
    backgroundColor: '#fff',
    borderRadius: 15,
    color: "#000"
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
    borderColor: 'red',
    borderWidth: 2,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  answer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 5,
    justifyContent: "space-around",
    fontSize: 30,
    alignItems: "center",
    margin: 25,
  },
  button: {
    marginTop: 5,
    marginRight: 5,
    marginLeft: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: '#f01616',
    color: 'white',
    alignSelf: 'center',
    borderRadius: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    width: "100%",
    height: "100%",
    flex: 1,
  },
  box: {
    marginTop: 15,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: '#f01616',
    color: 'white',
    alignSelf: 'center',
    borderRadius: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
  timer: {
    marginTop: 15,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: '#f5e77a',
    color: 'black',
    alignSelf: 'center',
    borderRadius: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
  
  container2: {
    flex: 3,
    flexDirection: "row"
  },
  item: {
    flex: 1,
    fontSize: 25,
    justifyContent: "center",
    textAlign: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#D91200",
    color: "white",
    fontSize: 40,
  },
});
