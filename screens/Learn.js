import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";

const Learn = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <ImageBackground
        source={require("../assets/learn.png")}
        style={styles.backgroundImage}
      >
        <Text style={{fontSize: 30, color: "white"}}>เนื้อหามัธยมศึกษาปีที่ 4</Text>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => navigation.navigate("Set")}>
            <Text style={styles.button}>Set</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Logic")}>
            <Text style={styles.button}>Logic</Text>
          </TouchableOpacity>
        </View>
        <Text style={{fontSize: 30, color: "white"}}>เนื้อหามัธยมศึกษาปีที่ 5</Text>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => navigation.navigate("Function")}>
            <Text style={styles.button}>Function</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Conic")}>
            <Text style={styles.button}>Conic</Text>
          </TouchableOpacity>
        </View>
        <Text style={{fontSize: 30, color: "white"}}>เนื้อหามัธยมศึกษาปีที่ 6</Text>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => navigation.navigate("Sequence")}>
            <Text style={styles.button}>Sequence</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Calculus")}>
            <Text style={styles.button}>Calculus</Text>
          </TouchableOpacity>
        </View>
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
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "#3A59FF",
    color: "white",
    alignSelf: "center",
    borderRadius: 25,
    textAlign: "center",
    fontWeight: "bold",
    padding: "10%",
    fontSize: 27,
    marginTop: "10%",
    width: "180px",
    height: "60px"
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignSelf: "center",
  },
});

export default Learn;
