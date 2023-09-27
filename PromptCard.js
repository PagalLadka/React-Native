import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import SmallButton from './smallButton';

export default function PromptCard({ prompt, time }) {
    return (
        <View style={styles.promptBox}>
            <Text style={styles.promptText} numberOfLines={3} ellipsizeMode="tail">{prompt}</Text>
            <Text style={styles.timeText}>{time}</Text>
            <View style={styles.buttonContainer}>
                <SmallButton text={'Like'} />
                <SmallButton text={'Comment'} style={{ marginHorizontal: 5 }} />
                <SmallButton text={'View'} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    promptBox: {
        width: 350,
        borderWidth: 1,
        elevation: 3,
        marginVertical: 10,
        padding: 15,
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: "center",
    },
    promptText: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 5
    },
    timeText: {
        fontSize: 14,
        color: '#6A5ACD',
        marginBottom: 10   // Space above buttons
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        width: '100%'
    }
});
