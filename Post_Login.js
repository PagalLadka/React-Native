import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, Image, ScrollView } from 'react-native';
import PromptCard from './PromptCard';
import prompts from './promptData.json';  // Importing the JSON data

export default function Post_Login() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome to</Text>
        <Image style={styles.image} source={require("./assets/moment.png")} />
      </View>
      <View style={styles.container}>
        <ScrollView>
          {prompts.map(promptData => (  // Mapping through the imported JSON data
            <PromptCard key={promptData.id} prompt={promptData.prompt} time={promptData.time} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    alignItems: "center",
    flex: 1,
    backgroundColor: 'plum',
  },
  container: {
    alignItems: "center",
    width: "95%",
    flex: 1
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
    backgroundColor: "white",
    height: 150
  },
  image: {
    width: 150,
    height: 150,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: "#6A5ACD",
  }
});
