import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "./Main";
import FlatButton from "./Button";
import SignUp from "./SignUp";
import Post_Login from './Post_Login'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Post_Login" component={Post_Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.welcomeText}>Welcome to</Text>
          <Image style={styles.image} source={require("./assets/moment.png")} />
        </View>
        <Text style={styles.welcomeText2}>
          We are an Application from Kolkata, India, aiming to revolutionize the social media market, one country at a time, starting with India.
        </Text>
      </View>
      <View style={styles.middle}>
        <Text style={styles.buttonText}>Come On In</Text>
        <FlatButton
          text="Login"
          onPress={() => navigation.navigate("Main")}
          buttonStyle={styles.loginButton}
          textStyle={styles.buttonText}
        />
        <Text style={styles.linkText}>Not a User? Sign Up</Text>
        <FlatButton
          text="Sign Up"
          onPress={() => navigation.navigate("SignUp")}
          buttonStyle={styles.signupButton}
          textStyle={styles.buttonText}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "plum",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 24,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#333",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: "bold",
    marginRight: 10,
    color: "#6A5ACD",
  },
  image: {
    width: 100,
    height: 100,
  },
  welcomeText2: {
    fontSize: 16,
    textAlign: "center",
    color: "#333",
  },
  middle: {
    marginTop: 40,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FAF3E0",
  },
  loginButton: {
    backgroundColor: "#556B2F",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 20,
  },
  signupButton: {
    backgroundColor: "#8B4513",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 10,
  },
  linkText: {
    fontSize: 16,
    color: "#333",
    marginTop: 10,
  },
});
