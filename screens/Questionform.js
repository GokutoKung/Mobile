import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import firebase from '../DBMS/firebaseDB';

const QuestionForm = ({route, navigation}) => {
    const [title, setTitle] = useState("");
    const [question, setQuestion] = useState("");
    const [detail, setDetail] = useState("");

    const {userId} = route.params;

    let msg = (<Text style={{fontSize: 30,}}>Your Title is {title}</Text>);
    const titleHandler = (text) => {
        setTitle(text);
        msg = (<Text style={{fontSize: 30,}}>Your Title is {title}</Text>);
    }

    const questionHandler = (text) => {
        setQuestion(text);
    }

    const detailHandler = (text) => {
        setDetail(text);
    }

    const cancel = () => {
        navigation.navigate("Question")
    }

    const submit = () => {
        const db = firebase.firestore().collection("Question");
        db.add({
            title: title,
            question: question,
            detail: detail,
            userId
        })
        navigation.navigate("Question")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Question Form</Text>
            <Text style={{fontSize: 30, marginTop: 10}}>question</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => questionHandler(text)}
                value={question}
                placeholder="Enter Your Question"
                keyboardType="default"
            />
            <Text style={{fontSize: 30,}}>detail</Text>
            <TextInput
                style={styles.input2}
                onChangeText={text => detailHandler(text)}
                value={detail}
                placeholder="Enter Detail"
                keyboardType="default"
                multiline
                numberOfLines={4}
            />
            {msg}
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
            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.button}
                    title="Submit"
                    onPress={submit}
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
        fontSize: 30,
        textAlign: "center",
        borderRadius: 15,
        width: "70%",
    },
    input2: {
        height: 100,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 30,
        textAlign: "center",
        borderRadius: 15,
        width: "70%",
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
    button2: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        paddingRight: 5,
        borderColor: '#000',
        borderWidth: 2,
        backgroundColor: '#2795e8',
        color: 'white',
        borderRadius: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize:  25,
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
});

export default QuestionForm;