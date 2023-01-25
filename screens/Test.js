import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Image,
    TextInput,
    View,
    Button
} from "react-native";
import firebase from '../DBMS/firebaseDB';
import ConicSection from "./Sequence";

const Test = () => {
    const [txt, setTxt] = useState([]);
    let t = "A\nB\nC\nDF FF"

    const handler = () => {
        const db = firebase.firestore().collection("Practice");
        db.doc("6Zd4FsrM79rwQZ1l41ht").set({
            Answer: txt
        })
        // setTxt(t);
    }

    const getData = () => {
        const db = firebase.firestore().collection("Practice");
        const all_data = [];
        db.get().then((querySnapshot) => {
            querySnapshot.forEach((res) => {
                const { Answer } = res.data();
                all_data.push({ key: res.id, Answer });
                console.log(all_data)
            });
            setTxt(all_data)
            console.log(txt)
        })
        
    }
    
    useEffect(() => {
        getData();
        // console.log(txt)
    }, []);

    return (
        <View>
            <TextInput
                value={t}
                multiline={true}
                numberOfLines={10}
            />
            <Button onPress={getData}/>
            {/* <Text>hello</Text> */}
        </View>
    );

}

export default Test;