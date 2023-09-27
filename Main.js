import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Button,
  Image,
} from "react-native";
import FlatButton from "./Button";

export default function ({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    if (!username) errors.username = "Username is required";
    if (!password) errors.password = "Password is required";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Submitted", username, password);
      setUsername("");
      setPassword("");
      setErrors({});

      navigation.navigate('Post_Login');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Image
          style={styles.image}
          source={require("./assets/moment.png")}
        ></Image>
        <View style = {styles.fourcontainer}>
            <Text style={styles.label}>Username</Text>
            <TextInput
            style={styles.input}
            placeholder="Enter your username"
            onChangeText={setUsername}
            value={username}
            />
            {errors.username ? (
            <Text style={styles.errorText}>{errors.username}</Text>
            ) : null}
            <Text style={styles.label}>Password</Text>
            <TextInput
            style={styles.input}
            placeholder="Enter your password"
            onChangeText={setPassword}
            value={password}
            />
            {errors.password ? (
            <Text style={styles.errorText}>{errors.password}</Text>
            ) : null}
            {/* <View style = {alignSelf = 'center'}> */}
            <Button color = "#556B2F" title = "Login" onPress = {handleSubmit}></Button>
            {/* </View> */}
        </View>
      </View>
    </View>
  );
}

const plumColor = "plum";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: plumColor,
  },
  form: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
    alignSelf: "center",
    color:"#556B2F"
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginBottom: 50,
  },
  errorText: {
    color: "red",
    fontSize: 15,
    marginBottom: 10,
  },
  fourcontainer: {
    marginTop:-50
  }
});
