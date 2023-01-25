import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import firebase from '../DBMS/firebaseDB';

const Item = ({ item, onPress }) => (
    <TouchableOpacity style={styles.post} onPress={onPress} >
        <Text style={styles.header}> {item.title}</Text>
        <Text style={styles.txt}> {item.question}</Text>
    </TouchableOpacity>
);

const Community = ({ route, navigation }) => {
    const [questionList, setQuestionList] = useState([]);

    const { userId, name, surename, role } = route.params;
    const isFocused = useIsFocused();

    const getQuestion = () => {
        const db = firebase.firestore().collection("Question");
        const all_data = [];
        db.get().then((querySnapshot) => {
            querySnapshot.forEach((res) => {
                const { question, title, userId } = res.data();
                all_data.push({ key: res.id, question, title, userId });
            });
            setQuestionList(all_data);
        });
    }

    const openDetail = (key, postById) => {
        navigation.navigate("Detail", { questionId: key, postById: postById, name, surename, role, userId })
    }

    const addQuestion = (key) => {
        navigation.navigate("Form", { userId: key })
    }

    useEffect(() => {
        getQuestion();
    }, [isFocused])

    const renderItem = ({ item }) => {
        return (
            <Item
                item={item}
                onPress={() => openDetail(item.key, item.userId)}
            />
        )
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/community.png')} style={styles.backgroundImage}>
            <FlatList
                data={questionList}
                renderItem={renderItem}
                keyExtractor={item => item.key}
            />
            <View style={styles.bottom}>
                <TouchableOpacity
                    style={styles.button}
                    title="Add Question"
                    onPress={() => addQuestion(userId)}
                >
                    <Text style={styles.add}>Add Question</Text>
                </TouchableOpacity>
            </View>
            </ImageBackground>
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
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 20,
        marginTop: 80
    },
    header: {
        fontSize: 20,
        textAlign: "center",
    },
    txt: {
        fontSize: 20,
        textAlign: "center",
    },
    add: {
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
    post: {
        marginTop: 15,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        borderColor: '#000',
        borderWidth: 2,
        backgroundColor: '#fff',
        color: 'white',
        alignSelf: 'center',
        borderRadius: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize:  25,
        width: "60%",
    },
    backgroundImage: {
        flex: 1,
        width: "100%",
    height: "100%",
      },
});

export default Community;