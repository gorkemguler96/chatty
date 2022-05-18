import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import { colors } from "../config/constants";
import Button from '../components/Button'

function SignUp(props) {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>Create new account</Text>
                    <TextInput style={styles.input} placeholder={"Enter your name"}/>
                    <TextInput style={styles.input} placeholder={"Enter your email"}/>
                    <TextInput style={styles.input} placeholder={"Enter your password"}/>

                    <View style={styles.buttonsContainer}>
                        <Button title={"Sign In"} varient={"secondary"}/>
                        <Button title={"Sign Up"} varient={"primary"}/>
                    </View>

                </View>
            </SafeAreaView>
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        flex:1,
    },
    contentContainer:{
      padding:36,
    },
    title:{
        fontSize:36,
        color:"white",
        fontWeight:"800",
        marginBottom:16,
    },
    input:{
        backgroundColor:"white",
        fontSize:15,
        marginTop:16,
        paddingHorizontal:16,
        paddingVertical:14,
        borderRadius:6,
    },
    buttonsContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:32,
    },
    // buttonContainer:{
    //     backgroundColor:"black",
    //     paddingHorizontal:18,
    //     paddingVertical:12,
    //     borderRadius:6,
    // },
    // buttonLabel:{
    //     color:"white",
    //     fontSize:18,
    // }
})

export default SignUp;

