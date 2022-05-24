import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {colors} from '../config/constants'

function ContactRow({ name, subtitle, onPress, style}) {
    return (
        <TouchableOpacity style={[styles.row, style]} onPress={onPress}>

            <View style={styles.avatar}>
                <Text style={styles.avatarLabel}>
                    {/*{name.split(' ').reduce((prev,current)=> `${prev[0]}${current[0]}`)}*/}
                    {name.split('@gmail.com')}
                </Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>

            <Ionicons name={"chevron-forward-outline"} size={20}/>

        </TouchableOpacity>

    );
}

export default ContactRow;

const styles = StyleSheet.create({
    row: {
        paddingHorizontal:16,
        paddingVertical:20,
        flexDirection:"row",
        alignItems:"center",
    },
    textContainer:{
        marginStart:16,
        flex:1
    },
    avatar:{
        width:56,
        height:56,
        backgroundColor:colors.primary,
        borderRadius:28,
        alignItems:"center",
        justifyContent:"center",
    },
    avatarLabel:{
        fontSize:20,
        color:"white",
    },
    name:{
        fontSize:16,
    },
    subtitle:{
        marginTop:2,
        color:'#565656'
    },
});
