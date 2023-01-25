
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity , Image } from 'react-native';
import firebase from '../DBMS/firebaseDB';

const LogIn = (props) => {
    const [buttonState, setButtonState] = useState("main");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userList, setUserList] = useState([]);
    const [feedback, setFeedback] = useState("");

    const register = () => {
        setButtonState("register");
    }

    const emailHandler = (text) => {
        setEmail(text);
    }

    const passwordHandler = (text) => {
        setPassword(text);
    }

    const resetHandler = () => {
        setEmail("");
        setPassword("");
    }

    const getUser = () => {
        const db = firebase.firestore().collection("UserInfo");
        const all_data = [];
        db.get().then((querySnapshot) => {
            querySnapshot.forEach((res) => {
                const { email, password, name, surename, role } = res.data();
                all_data.push({ key: res.id, email, password, name, surename, role });
            });
        })
        setUserList(all_data);
    }

    const isRegister = () => {
        for (const i in userList) {
            if (userList[i].email == email) {
                return true;
            }
        }
        return false;
    }

    const isPass = () => {
        if (isRegister()) {
            for (const i in userList) {
                if (userList[i].password == password) {
                    props.setKey(userList[i].key, userList[i].name, userList[i].surename, userList[i].role)
                    return true;
                }
            }
        }
        return false;
    }

    let msg;
    const logIn = () => {
        if (isPass()) {
            setButtonState("login");
        }
        else if (isRegister() == true && isPass() == false) {
            setFeedback("password");
        }
        else if (isRegister() == false) {
            setFeedback("user");
        }

    }

    if (buttonState == "register") {
        props.onMain(buttonState);
    }
    else if (buttonState == "login") {
        props.onMain(buttonState);
    }

    if (feedback == "user") {
        msg = (<Text style={{color:"red"}}>user is not register</Text>);
    }
    else if (feedback == "password") {
        msg = (<Text style={{color:"red"}}>password is incorrect</Text>);
    }
    else {
        msg = (<Text></Text>);
    }

    useEffect(() => {
        getUser();
    }, [])

    return (
        <View style={styles.container}>
            <Image
            style={{
              width: 100,
              height: 100,
              alignSelf: "center",
              marginTop: 30
            }}
            source={require("../assets/logo.png")}
          />
            <Text style={styles.header}>Log In</Text>
            <Text style={{fontSize: 30, marginTop: 10}}>Email</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => emailHandler(text)}
                placeholder="Enter Your Email"
                keyboardType="email-address"
                value={email}
            />
            <Text style={{fontSize: 30,}}>Password</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => passwordHandler(text)}
                placeholder="Enter Your Password"
                keyboardType="default"
                value={password}
            />
            {msg}
            <View style={styles.row}>
            <TouchableOpacity
                style={styles.button}
                title="Log In"
                onPress={logIn}
            >
                <Text style={styles.login}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                title="Reset"
                onPress={resetHandler}
            >
                <Text style={styles.reset}>Reset</Text>
            </TouchableOpacity>
            </View>
            <Text style={{fontSize: 20, marginTop: 10, color: "red"}}>don't have userId?</Text>
            <TouchableOpacity
                style={styles.button}
                title="Register"
                onPress={register}
            >
                <Text style={styles.register}>Register</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 30,
        textAlign: "center",
        borderRadius: 15,
    },
    row: {
        flexDirection: "row",
    },
    header: {
        fontSize: 40,
        fontWeight: 500,
    },
    button:{
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
    },
    login: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        borderColor: '#000',
        borderWidth: 2,
        backgroundColor: '#10e063',
        color: 'white',
        alignSelf: 'center',
        borderRadius: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize:  25,
    },
    reset: {
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
        fontSize:  25,
    },
    register: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        borderColor: '#000',
        borderWidth: 2,
        backgroundColor: '#2795e8',
        color: 'white',
        alignSelf: 'center',
        borderRadius: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize:  25,
    },
});

export default LogIn;