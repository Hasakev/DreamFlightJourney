import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  const [titleText, setTitleText] = useState("Dream Flight Journey");
  const onPressTitle = () => {
    setTitleText("Dream Flight Journeys");
  };
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
  });

  return (
    console.log("HomeScreen.js: HomeScreen()"),
    (
      <View style={styles.Container}>
        <Text style={styles.Heading}> {titleText}</Text>
        {"\n"}
        {"\n"}
        <Button
          title="Find Itinerary"
          onPress={() =>
            navigation.navigate("Profile", {
              name: "PLACEHOLDER",
            })
          }
        />
      </View>
    )
  );
};

export default HomeScreen;
