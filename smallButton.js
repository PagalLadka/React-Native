import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function SmallButton({ text, onPress, style }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.button, style]}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 6,
        backgroundColor: "#556B2F",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 70  // Ensuring a decent width for each button
    },
    buttonText: {
        color: "white",
        textAlign: "center",
        fontSize: 12
    }
});
