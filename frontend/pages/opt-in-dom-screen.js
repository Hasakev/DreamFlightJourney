import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

const OptInScreen = ({ navigation }) => {
  const [emailText, setEmailText] = useState("");
  const styles = StyleSheet.create({
    Heading: {
      fontSize: 30,
      fontWeight: "bold",
    },
    Container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    ContainerSub: {
      flex: 2,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return (
    <>
      <View style={styles.Container}>
        <Text style={styles.Heading}>{"Opt In \n \n"}</Text>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          label="Email Address"
          value={emailText}
          onChangeText={(emailText) => setEmailText(emailText)}
        />
      </View>
      <View style={styles.ContainerSub}>
        <Button
          buttonColor="#039BE5"
          textColor="black"
          mode="contained"
          onPress={() => navigation.navigate("Itinerary", { email: emailText })}
        >
          Send
        </Button>
      </View>
    </>
  );
};

export default OptInScreen;
