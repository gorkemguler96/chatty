import React, {useEffect, useState} from 'react';
import {View,Text,StyleSheet,Button} from "react-native";
import ContactRow from '../components/ContactRow'
import Separtor from "../components/Separtor";
import * as firebase from 'firebase/app'
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
import {getDatabase} from 'firebase/database'
import { getFirestore, setDoc, doc,collection,onSnapshot } from 'firebase/firestore';
import { firebaseConfig } from "../firebase-config";


const app = firebase.initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getDatabase(app)
const fireStore = getFirestore(app)

// const reference = db.ref(db,"age")

// console.log(deneme)

function Chats({navigation}) {

    useEffect(()=>{
        const isLoggedIn = true;
        if(!isLoggedIn){
            navigation.navigate("SignUp")
        }
    },[])

    const [chats,setChats] = useState([])

    useEffect( ()=>{
          console.log(collection(fireStore,'chats'));
    },[])

    return (
        <View >
            {chats.map((chat)=>(
                <View key={chat.id}>
                    <ContactRow
                        name={chat?.data()?.users.find((x)=>x !== auth?.currentUser?.email)}
                        subtitle={"No message yet"}
                        onPress={()=>{
                            navigation.navigate("Chat")
                        }}
                    />
                    <Separtor/>
                    {/*<Button title={"eklemelik"} onPress={()=>createUserWithEmailAndPassword(auth,"f@gmail.com","123123123")}/>*/}
                </View>
            ))}

        </View>
    );
}

export default Chats;


