import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import firebase from '../DBMS/firebaseDB';

const Profile = ({route, navigation}) => {
    const {userId} = route.params;

    const [buttonState, setButtonState] = useState("normal");
    const [name, setName] = useState("");
    const [sureName, setSureName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [info, setInfo] = useState("");
    const [score, setScore] = useState(0);
    const [editToggle, setEditToggle] = useState(false);

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

    const resetHandler = () => {
        setName("");
        setSureName("");
        setEmail("");
        setPassword("");
        setInfo("");
    }

    const editHandler = () => {
        setButtonState("edit");
        setEditToggle(true);
    }

    const confirmHandler = (props) => {
        setButtonState("normal");
        const db = firebase.firestore().collection("UserInfo");
        db.doc(props.userId).set({
            name: name,
            surename: sureName,
            email: email,
            password: password,
            info: info,
            quizScore: score
        })
    }

    const infoHandler = (text) => {
        setInfo(text);
    }

    const getInfo = () => {
        const db = firebase.firestore().collection("UserInfo");
        const all_data = [];
        db.get().then((querySnapshot) => {
            querySnapshot.forEach((res) => {
                const { name, surename, email, password, info, quizScore } = res.data();
                all_data.push({ key: res.id, name, surename, email, password, info, quizScore });
            });
            for (const i in all_data) {
                if (all_data[i].key === userId) {
                    setName(all_data[i].name);
                    setSureName(all_data[i].surename);
                    setEmail(all_data[i].email);
                    setPassword(all_data[i].password);
                    setInfo(all_data[i].info);
                    setScore(all_data[i].score);
                }
            }
        })

    }

    let content;
    if (buttonState == "normal") {
        content = (
            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.button}
                    title="Edit"
                    onPress={editHandler}
                >
                <Text style={styles.edit}>Edit</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity
                    style={styles.button}
                    title="Back to Home"
                    //onPress={backHandler}
                >
                <Text style={styles.back}>Back to Home</Text>
                </TouchableOpacity> */}
            </View>
        );
    }
    else if (buttonState == "edit") {
        content = (
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
                    title="Reset"
                    onPress={resetHandler}
                >
                <Text style={styles.reset}>Reset</Text>
                </TouchableOpacity>
            </View>
        );
    }

    useEffect(() => {
        getInfo();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Profile</Text>
            <Text style={{fontSize: 20, marginTop: 10, color: "white"}}>Name</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => nameHandler(text)}
                value={name}
                placeholder="Enter Your Name"
                keyboardType="default"
                editable={editToggle}
            />
            <Text style={{fontSize: 20, color: "white"}}>Sure Name</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => sureNameHandler(text)}
                value={sureName}
                placeholder="Enter Your Sure Name"
                keyboardType="default"
                editable={editToggle}
            />
            <Text style={{fontSize: 20, color: "white"}}>Email</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => emailHandler(text)}
                value={email}
                placeholder="Enter Your Email"
                keyboardType="email-address"
                editable={editToggle}
            />
            <Text style={{fontSize: 20, color: "white"}}>Password</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => passwordHandler(text)}
                value={password}
                placeholder="Enter Your Password"
                keyboardType="default"
                editable={editToggle}
            />
            <Text style={{fontSize: 20, color: "white"}}>Info</Text>
            <TextInput
                style={styles.input2}
                onChangeText={text => infoHandler(text)}
                value={info}
                placeholder="Enter Info"
                keyboardType="default"
                editable={editToggle}
                multiline
                numberOfLines={4}
            />
            {content}
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#366fb5"
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 30,
        textAlign: "center",
        borderRadius: 15,
        color: "white",
        borderColor: "white",
    },
    input2: {
        height: 50,
        width: "70%",
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 30,
        textAlign: "center",
        borderRadius: 15,
        color: "white",
        borderColor: "white",
    },
    row: {
        flexDirection: "row",
    },
    header: {
        fontSize: 30,
        fontWeight: 500,
        color: "white",
        marginTop: 10,
        fontWeight: "bold"
    },
    button:{
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
    },
    edit: {
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
    back: {
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
    confirm: {
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

export default Profile;