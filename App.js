import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Chats from "./screens/Chats";
import Settings from "./screens/Settings";
import SignUp from "./screens/SignUp";
import {Ionicons} from "@expo/vector-icons";
import {colors} from "./config/constants";
import {StatusBar} from "react-native";
import Chat from './screens/Chat'




const Tabs = createBottomTabNavigator();
const TabsScreen = () => (
    <Tabs.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Chats') {
                    iconName = focused
                        ? 'chatbubbles'
                        : 'chatbubbles-outline';
                } else if (route.name === 'Settings') {
                    iconName = focused ? 'settings' : 'settings-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: 'gray',
        })}
    >
        <Tabs.Screen options={{headerTitleAlign:"center"}} name={"Chats"} component={Chats}/>
        <Tabs.Screen options={{headerTitleAlign:"center"}} name={"Settings"} component={Settings}/>
    </Tabs.Navigator>
)
const MainStack = createNativeStackNavigator();

function App(props) {
    return (
        <NavigationContainer mode={"modal"}>
            <MainStack.Navigator screenOptions={{headerShown:false}}>
                <MainStack.Screen name={"Tabs"} component={TabsScreen}/>
                <MainStack.Screen name={"SignUp"} component={SignUp}/>
                <MainStack.Screen name={"Chat"} component={Chat}/>
            </MainStack.Navigator>
            <StatusBar style="auto" />
        </NavigationContainer>
    );
}

export default App;
