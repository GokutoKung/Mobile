import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet, ImageBackground } from "react-native";

const Practise = ({ route, navigation }) => {
  const {role} = route.params;
  const addPractise = () => {
    navigation.navigate("AddPractice")
  }

  let content;
  if (role == "admin") {
    content = (
      <View style={styles.row}>
        <TouchableOpacity
          title="Add Question"
          onPress={() => addPractise()}
        >
          <Text style={styles.bottom}>Add Practise</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.center}>
      <ImageBackground source={require('../assets/learn.png')} style={styles.backgroundImage}>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => navigation.navigate("SetQuiz")}
          >
            <Text style={styles.button}>SetQuiz</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("LogicQuiz")}
          >
            <Text style={styles.button}>LogicQuiz</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => navigation.navigate("FunctionQuiz")}
          >
            <Text style={styles.button}>FunctionQuiz</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("ConicQuiz")}
          >
            <Text style={styles.button}>ConicQuiz</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => navigation.navigate("SequenceQuiz")}
          >
            <Text style={styles.button}>SequenceQuiz</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("CalculusQuiz")}
          >
            <Text style={styles.button}>CalculusQuiz</Text>
          </TouchableOpacity>
        </View>
        {content}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  button: {
    marginRight: 5,
    marginLeft: 5,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "#3A59FF",
    color: "white",
    borderRadius: 25,
    textAlign: "center",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 27,
    width: "205px",
    height: "60px"
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: "center"
  },
  row: {
    flexDirection: "row",
  },
  bottom: {
    marginBottom: 20,
    marginTop: 60,
    marginRight: 5,
    marginLeft: 5,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "#3A59FF",
    color: "white",
    borderRadius: 25,
    textAlign: "center",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 27,
    width: "205px",
    height: "60px"
  },
});

export default Practise;