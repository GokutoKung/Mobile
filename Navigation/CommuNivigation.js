import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import Community from '../screens/Community';
import Detail from '../screens/Detail';
import QuestionForm from '../screens/Questionform';

const Stack = createNativeStackNavigator();

const CommuNavigator = ({route, navigation}) => {
    const { userId, name, surename, role } = route.params;
    return (
        // <NavigationContainer >
            <Stack.Navigator initialRouteName='Question' screenOptions={{ headerStyle: { backgroundColor: "lightblue" } }}>
                <Stack.Screen name="Question" component={Community} initialParams={
                    {
                        userId: userId,
                        name: name,
                        surename: surename,
                        role: role,
                    }
                } />
                <Stack.Screen name="Detail" component={Detail} />
                <Stack.Screen name="Form" component={QuestionForm} />
            </Stack.Navigator>
        // </NavigationContainer>
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
    },
});

export default CommuNavigator;