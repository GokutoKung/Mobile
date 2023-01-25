import React, { Component } from "react";
import { View, TouchableOpacity , Text, StyleSheet, ImageBackground, Image} from "react-native";

const Home = ({ route, navigation }) => {
  const {userId, logout} = route.params;
  // console.log(userId)
  return (
    <View style={styles.center}>
      <ImageBackground source={require('../assets/home.png')} style={styles.backgroundImage}>
      <Image
            style={{
              width: 150,
              height: 150,
              alignSelf: "center",
              marginTop: 30
            }}
            source={require("../assets/logo.png")}
          />
          <View style={styles.row}>
          <TouchableOpacity 
        title="Profile"
        
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={styles.button}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        title="Learn"
        onPress={() => navigation.navigate("Learn")}
      >
        <Text style={styles.button}>Learn</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.row}>
      <TouchableOpacity 
        title="Practise"
        onPress={() => navigation.navigate("Practise")}
      >
        <Text style={styles.button}>Practise</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        title="Quiz"
        onPress={() => navigation.navigate("Quiz")}
      >
        <Text style={styles.button}>Quiz</Text>
      </TouchableOpacity>
      </View>
      <TouchableOpacity 
        title="Log Out"
        onPress={logout}
      >
        <Text style={styles.out}>Log Out</Text>
      </TouchableOpacity>
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
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#3A59FF',
    color: 'white',
    alignSelf: 'center',
    borderRadius: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize:  27,
    width: "150px",
    height: "60px"
  },
  out: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#f01616',
    color: 'white',
    alignSelf: 'center',
    borderRadius: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize:  27,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  row: {
    flexDirection: "row",
    alignSelf: "center"
  },
});

export default Home;