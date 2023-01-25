import React, { Component, useEffect, useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, ImageBackground, TextInput, Button } from "react-native";
import firebase from '../DBMS/firebaseDB';

const AddPracticeForm = ({ route, navigation }) => {
    const [question, setQuestion] = useState("");
    const [choice1, setChoice1] = useState("");
    const [choice2, setChoice2] = useState("");
    const [choice3, setChoice3] = useState("");
    const [choice4, setChoice4] = useState("");
    const [solve, setSolve] = useState("");
    const [title, setTitle] = useState("");
    const [choice1IsCorrect, setChoice1IsCorrect] = useState(false);
    const [choice2IsCorrect, setChoice2IsCorrect] = useState(false);
    const [choice3IsCorrect, setChoice3IsCorrect] = useState(false);
    const [choice4IsCorrect, setChoice4IsCorrect] = useState(false);
    const questionHandler = (text) => {
        setQuestion(text);
    };

    const choice1Handler = (text) => {
        setChoice1(text);
    };

    const choice2Handler = (text) => {
        setChoice2(text);
    };

    const choice3Handler = (text) => {
        setChoice3(text);
    };

    const choice4Handler = (text) => {
        setChoice4(text);
    };

    const solveHandler = (text) => {
        setSolve(text);
    };

    const resetHandler = () => {
        setQuestion("");
        setChoice1("");
        setChoice2("");
        setChoice3("");
        setChoice4("");
        setSolve("");
    };

    let msg = (<Text style={{ fontSize: 30, }}>Practise Title is </Text>);
    const titleHandler = (text) => {
        setTitle(text);
    };
    msg = (<Text style={{ fontSize: 30, }}>Practise Title is {title}</Text>);

    const isCorrectHandler = (choice) => {
        if (choice == 1) {
            setChoice1IsCorrect(true);
            setChoice2IsCorrect(false);
            setChoice3IsCorrect(false);
            setChoice4IsCorrect(false);
        }
        else if (choice == 2) {
            setChoice1IsCorrect(false);
            setChoice2IsCorrect(true);
            setChoice3IsCorrect(false);
            setChoice4IsCorrect(false);
        }
        else if (choice == 3) {
            setChoice1IsCorrect(false);
            setChoice2IsCorrect(false);
            setChoice3IsCorrect(true);
            setChoice4IsCorrect(false);
        }
        else if (choice == 4) {
            setChoice1IsCorrect(false);
            setChoice2IsCorrect(false);
            setChoice3IsCorrect(false);
            setChoice4IsCorrect(true);
        }
    };

    const submitHandler = () => {
        const db = firebase.firestore().collection("Practice");
        db.add({
            title: title,
            solve: solve,
            questionText: question,
            answerOptions: [
                { answerText: choice1, isCorrect: choice1IsCorrect},
                { answerText: choice2, isCorrect: choice2IsCorrect}
            ],
            answerOptions2: [
                { answerText: choice3, isCorrect: choice3IsCorrect},
                { answerText: choice4, isCorrect: choice4IsCorrect}
            ]
        }).then(() => {
            resetHandler();
        })
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Question</Text>
            <TextInput
            style={styles.input}
                onChangeText={(text) => questionHandler(text)}
                value={question}
                multiline={true}
                numberOfLines={3}
            />
            <Text>Choice 1</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => choice1Handler(text)}
                value={choice1}
            />
            <TouchableOpacity
                onPress={() => isCorrectHandler(1)}
            >
                <Text>{String(choice1IsCorrect)}</Text>
            </TouchableOpacity>
            <Text>Choice 2</Text>
            <TextInput
            style={styles.input}
                onChangeText={(text) => choice2Handler(text)}
                value={choice2}
            />
            <TouchableOpacity
                onPress={() => isCorrectHandler(2)}
            >
                <Text >{String(choice2IsCorrect)}</Text>
            </TouchableOpacity>
            <Text>Choice 3</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => choice3Handler(text)}
                value={choice3}
            />
            <TouchableOpacity
                onPress={() => isCorrectHandler(3)}
            >
                <Text >{String(choice3IsCorrect)}</Text>
            </TouchableOpacity>
            <Text>Choice 4</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => choice4Handler(text)}
                value={choice4}
            />
            <TouchableOpacity
                onPress={() => isCorrectHandler(4)}
            >
                <Text >{String(choice4IsCorrect)}</Text>
            </TouchableOpacity>
            <Text>Solve</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => solveHandler(text)}
                value={solve}
                multiline={true}
                numberOfLines={8}
            />
            {msg}
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
            <View style={styles.row}>
                <TouchableOpacity
                    title="Submit"
                    onPress={submitHandler} >
                    <Text style={styles.submit}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    title="Reset"
                    onPress={resetHandler} >
                    <Text style={styles.reset}>Reset</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    row: {
        flexDirection: "row",
    },
    button: {
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
    },
    submit: {
        marginLeft: 5,
        marginRight: 5,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        paddingRight: 5,
        borderColor: '#000',
        borderWidth: 2,
        backgroundColor: '#10e063',
        color: 'white',
        alignSelf: 'center',
        borderRadius: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize:  30,
    },
    reset: {
        marginLeft: 5,
        marginRight: 5,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        paddingRight: 5,
        borderColor: '#000',
        borderWidth: 2,
        backgroundColor: '#f01616',
        color: 'white',
        alignSelf: 'center',
        borderRadius: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize:  30,
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
        fontSize:  30,
        width: "100%",
      },
      header: {
        fontSize: 30,
        fontWeight: 500,
    },
    input: {
        borderWidth: 1,
        fontSize: 30,
        textAlign: "center",
        borderRadius: 15,
    },
});

export default AddPracticeForm;