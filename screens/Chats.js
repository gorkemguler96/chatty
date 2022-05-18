import React, {useEffect} from 'react';
import {View,Text,StyleSheet} from "react-native";
import ContactRow from '../components/ContactRow'
import Separtor from "../components/Separtor";

const chats = [
    {
        users:['gorkemguler1996@gmail.com', 'a@gmail.com'],
        messages:[]
    },
    {
        users:['gorkemguler1996@gmail.com', 'a@gmail.com'],
        messages:[]
    },{
        users:['gorkemguler1996@gmail.com', 'a@gmail.com'],
        messages:[]
    },{
        users:['gorkemguler1996@gmail.com', 'a@gmail.com'],
        messages:[]
    },
    {
        users:['gorkemguler1996@gmail.com', 'a@gmail.com'],
        messages:[]
    },{
        users:['gorkemguler1996@gmail.com', 'a@gmail.com'],
        messages:[]
    },

]


function Chats({navigation}) {

    useEffect(()=>{
        const isLoggedIn = true;
        if(!isLoggedIn){
            navigation.navigate("SignUp")
        }
    },[])

    return (
        <View >
            {chats.map((chat,index)=>(
                <>
                    <ContactRow
                        key={index}
                        name={"chat.users.find(x=>x !== firebase.auth().currentUser.email)"}
                        subtitle={"React Native Course"}
                        onPress={()=>{
                            navigation.navigate("Chat")
                        }}
                    />
                    <Separtor/>
                </>
            ))}

        </View>
    );
}

export default Chats;


