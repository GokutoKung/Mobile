import React from "react";
import { StyleSheet } from "react-native";
// import คอมโพเนนต์ที่จำเป็น
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator as createStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import library ที่จำเป็น
//import { Ionicons } from '@expo/vector-icons'; 

// import screen ที่เกี่ยวข้อง
import Home from "../screens/Home";
import Learn from "../screens/Learn";
import Practise from "../screens/Practise"
import Quiz from "../screens/Quiz";
import CommuNavigator from "./CommuNivigation";
import Set from "../screens/Set";
import Logic from "../screens/Logic";
import Function from "../screens/Function";
import Conic from "../screens/Conic";
import Sequence from "../screens/Sequence";
import Calculus from "../screens/Calculus";
import SetQuiz from "../screens/SetQuiz";
import LogicQuiz from "../screens/LogicQuiz"
import FunctionQuiz from "../screens/FunctionQuiz";
import ConicQuiz from "../screens/ConicQuiz"
import SequenceQuiz from "../screens/SequenceQuiz";
import CalculusQuiz from "../screens/CalculusQuiz";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Profile from "../screens/Profile";
import AddPracticeForm from "../screens/AddPracticeForm";

// สร้าง navigator ตามโจทย์กำหนด
const Stack = createStackNavigator();
const btmTab = createBottomTabNavigator();
const Main = ({route, navigation}) => {
  const {userId, logout, role} = route.params;
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerStyle: { backgroundColor: "lightblue" } }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
        }}
        initialParams={
          {
            logout: logout,
          }
        }
      />
      <Stack.Screen
        name="Learn"
        component={Learn}
        options={{
          title: "Learn",
        }}
      />
      <Stack.Screen
        name="Set"
        component={Set}
        options={{
          title: "Set",
        }}
      />
      <Stack.Screen
        name="Logic"
        component={Logic}
        options={{
          title: "Logic",
        }}
      />
      <Stack.Screen
        name="Function"
        component={Function}
        options={{
          title: "Function",
        }}
      />
      <Stack.Screen
        name="Conic"
        component={Conic}
        options={{
          title: "Conic",
        }}
      />
      <Stack.Screen
        name="Sequence"
        component={Sequence}
        options={{
          title: "Sequence",
        }}
      />
      <Stack.Screen
        name="Calculus"
        component={Calculus}
        options={{
          title: "Calculus",
        }}
      />
      <Stack.Screen
        name="Practise"
        component={Practise}
        options={{
          title: "Practise",
        }}
        initialParams={
          {
            role: role,
          }
        }
      />
      <Stack.Screen
        name="Quiz"
        component={Quiz}
        options={{
          title: "Quiz",
        }}
        initialParams={
          {
            userId
          }
        }
      />
      <Stack.Screen
        name="SetQuiz"
        component={SetQuiz}
        options={{
          title: "SetQuiz",
        }}
      />
      <Stack.Screen
        name="LogicQuiz"
        component={LogicQuiz}
        options={{
          title: "LogicQuiz",
        }}
      />
      <Stack.Screen
        name="FunctionQuiz"
        component={FunctionQuiz}
        options={{
          title: "FunctionQuiz",
        }}
      />
      <Stack.Screen
        name="ConicQuiz"
        component={ConicQuiz}
        options={{
          title: "ConicQuiz",
        }}
      />
      <Stack.Screen
        name="SequenceQuiz"
        component={SequenceQuiz}
        options={{
          title: "SequenceQuiz",
        }}
      />
      <Stack.Screen
        name="CalculusQuiz"
        component={CalculusQuiz}
        options={{
          title: "CalculusQuiz",
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
        }}
        initialParams={
          {
            userId: userId,
          }
        }
      />
      <Stack.Screen
        name="AddPractice"
        component={AddPracticeForm}
        options={{
          title: "Practice Form",
        }}
      />
    </Stack.Navigator>
  );
}
// สร้าง Navigator หลัก
const Navigator = (props) => {
  const logout = () => {
    props.onMain("main")
  }

  return (
    <NavigationContainer>
      <btmTab.Navigator initialRouteName="Home"
      screenOptions={{ headerShown: false }}>
        <btmTab.Screen name="Home" component={Main} 
        options={{
          tabBarIcon:() => {
            return  <MaterialCommunityIcons name="home" size={30} color="black"/>;
          }
        }}
        initialParams={
          {
            userId: props.userId,
            logout: logout,
            role: props.role
          }
        }
        />
        <btmTab.Screen name="Community" component={CommuNavigator} 
        options={{
          tabBarIcon:() => {
            return  <MaterialCommunityIcons name="earth" size={30} color="black"/>;
          }
        }}
        initialParams={
          {
            userId: props.userId,
            name: props.name,
            surename: props.surename,
            role: props.role,
          }
          
        } />

      </btmTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Navigator;