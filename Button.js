import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function FlatButton({text, onPress, style}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style = {[styles.button, style]}>
                <Text style = {styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create(
    {
        button: {
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 14,
            backgroundColor: "#556B2F",
            height: 50,
            width: 220
        },
        buttonText: {
            color: "white",
            fontWeight: "bold",
            textTranform: "uppercase",
            textAlign: "center",
            fontSize: 16
        }
    }
)