import React, { useState } from "react";
import { StyleSheet, View } from 'react-native';
import LogIn from './screens/LogIn';
import Profile from './screens/Profile';
import Register from './screens/Register';
import Navigator from "./Navigation/Navigator";
import Test from "./screens/Test";

export default function App() {
  const [screenState, setScreenState] = useState("main");
  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [sureName, setSureName] = useState("");
  const [role, setRole] = useState("");

  const stateHandler = (state) => {
    setScreenState(state);
  }

  const userKey = (key, name, surename, role) => {
    setUserId(key);
    setName(name);
    setSureName(surename);
    setRole(role);
  }


  let content = <LogIn onMain={stateHandler}/>;
  
  if(screenState == "main"){
    content = (<LogIn onMain={stateHandler} setKey={userKey}/>);
  }
  else if(screenState == "register"){
    content = (<Register onMain={stateHandler}/>);
  }
  else if(screenState == "login"){
    content = (<Navigator userId={userId} name={name} surename={sureName} role={role} onMain={stateHandler}/>);
  }

  return (
    <View style={styles.screen}>
      {content}
    </View>
    // <Test/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    flex: 1,
  },

});
