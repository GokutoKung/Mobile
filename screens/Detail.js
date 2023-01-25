import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Button,
  TextInput,
} from "react-native";
import firebase from "../DBMS/firebaseDB";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Item = ({ item, onPress, content }) => (
  <View>
    <TextInput
      style={styles.input2}
      placeholder="Enter Your Answer"
      keyboardType="default"
      editable={false}
      value={item.answer}
    />
    <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={{
            paddingVertical: 15,
            paddingHorizontal: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
        <MaterialCommunityIcons name="thumb-up" size={30} color="black">
          <Text> {item.like}</Text>
          {content} 
        </MaterialCommunityIcons>
      </View>
    </TouchableOpacity>
  </View>
);

const Detail = ({ route, navigation }) => {
  const [answerList, setAnswerList] = useState([]);
  const [newAnswer, setNewAnswer] = useState("");
  const [answerQuestion, setAnswerQuestion] = useState([]);
  const [questionEditToggle, setQuestionEditToggle] = useState(false);
  const [title, setTitle] = useState("");
  const [questionInfo, setQuestionInfo] = useState("");
  const [detail, setDetail] = useState("");

  const { questionId, postById, name, surename, role, userId } = route.params;

  const getAnswer = () => {
    const db = firebase.firestore().collection("Answer");
    const all_data = [];
    db.get().then((querySnapshot) => {
      querySnapshot.forEach((res) => {
        const { answer, like, questId, userId } = res.data();
        all_data.push({ key: res.id, answer, like, questId, userId });
      });
      const all_data2 = all_data.filter((ans) => ans.questId == questionId);
      setAnswerList(all_data2);
    });
  };

  const getQuestion = () => {
    const db = firebase.firestore().collection("Question");
    const all_data = [];
    db.get().then((querySnapshot) => {
      querySnapshot.forEach((res) => {
        const { question, title, userId, detail } = res.data();
        all_data.push({ key: res.id, question, title, detail, userId });
      });

      for (const i in all_data) {
        if (all_data[i].key === questionId) {
          setQuestionInfo(all_data[i].question);
          setTitle(all_data[i].title);
          setDetail(all_data[i].detail);
        }
      }
    });
  };

  const getAnswerQuestion = () => {
    const db = firebase.firestore().collection("Answer");
    const all_data = [];
    db.get().then((querySnapshot) => {
      querySnapshot.forEach((res) => {
        const { questId } = res.data();
        all_data.push({ key: res.id, questId });
      });

      const data = all_data.filter((ans) => ans.questId == questionId);
      setAnswerQuestion(data);
    });
  };

  const answerHandler = (text) => {
    setNewAnswer(text);
  };

  const resetHandler = () => {
    setNewAnswer("");
  };

  const addHandler = () => {
    const db = firebase.firestore().collection("Answer");
    db.add({
      answer: newAnswer,
      like: 0,
      questId: questionId,
      userId,
    });
    getAnswer();
    setNewAnswer("");
  };

  const addLike = (item) => {
    const newLike = item.like + 1;
    console.log(newLike);
    const db = firebase.firestore().collection("Answer").doc(item.key);
    db.set({
      answer: item.answer,
      like: newLike,
      questId: item.questId,
      userId: item.userId,
    });
    getAnswer();
    setNewAnswer("");
  };

  const deleteHandler = () => {
    const db = firebase.firestore();
    db.collection("Question").doc(questionId).delete();
    for (const i in answerQuestion) {
      db.collection("Answer").doc(answerQuestion[i].key).delete();
    }
    navigation.navigate("question");
  };

  const editHandler = () => {
    setQuestionEditToggle(true);
  };

  const isOwnerAnswer = (item) => {
    if (item.userId == userId || role == "admin") {
      return true;
    } else {
      return false;
    }
  };

  const answerDeleteHandler = (item) => {
    const db = firebase.firestore();
    db.collection("Answer").doc(item.key).delete();
    getAnswer();
  };

  const renderItem = ({ item }) => {
    let answerContent;
    if (isOwnerAnswer(item)) {
      answerContent = (
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            title="Delete"
            onPress={() => answerDeleteHandler(item)}
          >
            <Text style={styles.delete}>Delete</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <Item item={item} onPress={() => addLike(item)} content={answerContent} />
    );
  };

  const titleHandler = (text) => {
    setTitle(text);
  };

  const questionHandler = (text) => {
    setQuestionInfo(text);
  };

  const detailHandler = (text) => {
    setDetail(text);
  };

  const clearHandler = () => {
    setQuestionInfo("");
    setTitle("");
    setDetail("");
  };

  const confirmHandler = () => {
    const db = firebase.firestore().collection("Question");
    db.doc(questionId).set({
      question: questionInfo,
      detail: detail,
      userId: userId,
      title: title,
    });
    setQuestionEditToggle(false);
  };

  let questionContent;
  if (role == "admin" || userId == postById) {
    questionContent = (
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          title="Edit"
          onPress={editHandler}
        >
          <Text style={styles.edit}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          title="Delete"
          onPress={deleteHandler}
        >
          <Text style={styles.delete}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    questionContent = <Text></Text>;
  }

  let questionEdit;
  let btnQuestionEdit;
  if (questionEditToggle) {
    questionEdit = (
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          title="Confirm"
          onPress={confirmHandler}
        >
          <Text style={styles.confirm}>Confirm</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          title="Clear"
          onPress={clearHandler}
        >
          <Text style={styles.clear}>Clear</Text>
        </TouchableOpacity>
      </View>
    );
    questionContent = <Text></Text>;
    btnQuestionEdit = (
      <View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          title="Set"
          onPress={() => titleHandler("Set")}
        >
          <Text style={styles.button2}>Set</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          title="Logic"
          onPress={() => titleHandler("Logic")}
        >
          <Text style={styles.button2}>Logic</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          title="Function"
          onPress={() => titleHandler("Function")}
        >
          <Text style={styles.button2}>Function</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          title="Conic"
          onPress={() => titleHandler("Conic")}
        >
          <Text style={styles.button2}>Conic</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          title="Series"
          onPress={() => titleHandler("Series")}
        >
          <Text style={styles.button2}>Series</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          title="Calculus"
          onPress={() => titleHandler("Calculus")}
        >
          <Text style={styles.button2}>Calculus</Text>
        </TouchableOpacity>
      </View>
      </View>
    );
  } else {
    questionEdit = <Text></Text>;
    btnQuestionEdit = <Text></Text>;
  }

  useEffect(() => {
    getQuestion();
    getAnswer();
    getAnswerQuestion();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}> Post By </Text>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          marginTop: 10,
          marginBottom:10
        }}
      >
        <Text style={{ fontSize: 30 }}> {name} </Text>
        <Text style={{ fontSize: 30 }}> {surename} </Text>
      </View>
      <TextInput
        style={styles.input2}
        onChangeText={(text) => questionHandler(text)}
        value={questionInfo}
        placeholder="Enter Your Question"
        keyboardType="default"
        editable={questionEditToggle}
      />
      <Text style={{ fontSize: 30 }}>{title}</Text>
      <TextInput
        style={styles.input2}
        onChangeText={(text) => detailHandler(text)}
        value={detail}
        placeholder="Enter Detail"
        keyboardType="default"
        multiline
        numberOfLines={4}
        editable={questionEditToggle}
      />
      {questionContent}
      {questionEdit}
      {btnQuestionEdit}
      <Text style={{ fontSize: 30 }}> Answer</Text>
      <FlatList
        data={answerList}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          onChangeText={answerHandler}
          value={newAnswer}
          placeholder="Enter Your answer"
          keyboardType="default"
        />
        <TouchableOpacity
          style={styles.button}
          title="Add"
          onPress={addHandler}
        >
          <Text style={styles.add}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          title="Reset"
          onPress={resetHandler}
        >
          <Text style={styles.reset}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 55,
    width: "80%",
    fontSize: 20,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 30,
    textAlign: "center",
    borderRadius: 15,
  },
  input2: {
    height: "30%",
    width: "60%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 30,
    textAlign: "center",
    alignSelf: "center",
    borderRadius: 15,
  },
  row: {
    flexDirection: "row",
  },
  header: {
    fontSize: 30,
    fontWeight: 500,
  },
  button: {
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
  },
  button2: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: "#000",
    borderWidth: 2,
    backgroundColor: "#2795e8",
    color: "white",
    alignSelf: "center",
    borderRadius: 15,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
  },
  edit: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: "#000",
    borderWidth: 2,
    backgroundColor: "#10e063",
    color: "white",
    alignSelf: "center",
    borderRadius: 15,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
  },
  delete: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: "#000",
    borderWidth: 2,
    backgroundColor: "#f01616",
    color: "white",
    alignSelf: "center",
    borderRadius: 15,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
  },
  confirm: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: "#000",
    borderWidth: 2,
    backgroundColor: "#10e063",
    color: "white",
    alignSelf: "center",
    borderRadius: 15,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
  },
  clear: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: "#000",
    borderWidth: 2,
    backgroundColor: "#f01616",
    color: "white",
    alignSelf: "center",
    borderRadius: 15,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
  },
  add: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: "#000",
    borderWidth: 2,
    backgroundColor: "#2795e8",
    color: "white",
    alignSelf: "center",
    borderRadius: 15,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
  },
  reset: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: "#000",
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

export default Detail;
