import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {colors} from "../config/constants";

function Cell({title,icon,tintColor,onPress,style}) {
    return (
        <TouchableOpacity style={[styles.cell,style]} onPress={onPress}>
            <View style={[styles.iconContainer,{backgroundColor: tintColor}]}>
                <Ionicons name={icon} size={24} color={"white"}/>
            </View>
            <Text style={styles.title}>
                {title}
            </Text>
            <Ionicons name={"chevron-forward-outline"} size={20}/>
        </TouchableOpacity>
    );
}

const styles =StyleSheet.create({
    cell:{
        paddingHorizontal:16,
        paddingVertical:12,
        backgroundColor:"white",
        flexDirection:"row",
        alignItems:"center",
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderColor:colors.border,
    },
    title:{
        fontSize:16,
        marginStart:16,
        flex:1,
    },
    iconContainer:{
        width:32,
        height:32,
        backgroundColor:colors.red,
        borderRadius:6,
        alignItems:"center",
        justifyContent:"center",
    }
})

export default Cell;
