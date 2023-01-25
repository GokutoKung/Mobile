import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import firebase from '../DBMS/firebaseDB';

const Register = (props) => {
    const [buttonState, setButtonState] = useState("register");
    const [name, setName] = useState("");
    const [sureName, setSureName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const nameHandler = (text) => {
        setName(text);
    }
    const sureNameHandler = (text) => {
        setSureName(text);
    }
    const emailHandler = (text) => {
        setEmail(text);
    }
    const passwordHandler = (text) => {
        setPassword(text);
    }
    const cancel = () => {
        setButtonState("main");
    }

    if (buttonState == "main") {
        props.onMain(buttonState)
    }

    const resetHandler = () => {
        setName("");
        setSureName("");
        setEmail("");
        setPassword("");
    }

    const addInfo = () => {
        const db = firebase.firestore().collection("UserInfo");
        db.add({
            name: name,
            surename: sureName,
            email: email,
            password: password,
            info: "",
            role: "user"
        }).then(() => {
            resetHandler();
        })
    }

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
            <Text style={styles.header}>Register</Text>
            <Text style={{fontSize: 30,  marginTop: 10}}>Name</Text>
            <TextInput
                style={styles.input}
                onChangeText={nameHandler}
                value={name}
                placeholder="Enter Your Name"
                keyboardType="default"
            />
            <Text style={{fontSize: 30,}}>Sure Name</Text>
            <TextInput
                style={styles.input}
                onChangeText={sureNameHandler}
                value={sureName}
                placeholder="Enter Your Sure Name"
                keyboardType="default"
            />
            <Text style={{fontSize: 30,}}>Email</Text>
            <TextInput
                style={styles.input}
                onChangeText={emailHandler}
                value={email}
                placeholder="Enter Your Email"
                keyboardType="email-address"
            />
            <Text style={{fontSize: 30,}}>Password</Text>
            <TextInput
                style={styles.input}
                onChangeText={passwordHandler}
                value={password}
                placeholder="Enter Your Password"
                keyboardType="default"
            />
            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.button}
                    title="Submit"
                    onPress={addInfo}
                >
                    <Text style={styles.submit}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    title="Cancel"
                    onPress={cancel}
                >
                    <Text style={styles.cancel}>Cancel</Text>
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
        fontSize: 30,
        fontWeight: 500,
    },
    button:{
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
    },
    submit: {
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
    cancel: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        borderColor: '#000',
        borderWidth: 2,
        backgroundColor: '#f01616',
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
        borderColor: '#000',
        borderWidth: 2,
        backgroundColor: '#f01616',
        color: 'white',
        alignSelf: 'center',
        borderRadius: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize:  25,
    },
});

export default Register;