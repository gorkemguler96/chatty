import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import ContactRow from "../components/ContactRow";
import {colors} from "../config/constants";
import Separtor from "../components/Separtor";
import Cell from "../components/Cell";

function Settings(props) {
    return (
        <View>
           <ContactRow
               name={"Görkem GÜLER"}
               subtitle={"gorkemguler1996@gmail.com"}
               style={styles.contactRow}
           />

            <Separtor/>

            <Cell
                title={"Logout"}
                icon={"log-out-outline"}
                tintColor={colors.red}
                onPress={()=>{
                    alert("dont touch me again")
                }}
            />
            <Cell
                title={"Help"}
                icon={"information-outline"}
                tintColor={colors.green}
                onPress={()=>{
                    alert("dont touch me again")
                }}
                style={{marginTop: 20}}
            />
            <Cell
                title={"Tell a Friend"}
                icon={"heart-outline"}
                tintColor={colors.pink}
                onPress={()=>{
                    alert("dont touch me again")
                }}
            />


        </View>
    );
}

const styles = StyleSheet.create({
    contactRow:{
        backgroundColor:"white",
        marginTop:16,
        borderTopWidth:StyleSheet.hairlineWidth,
        borderColor:colors.border
    },
})

export default Settings;
