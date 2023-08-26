import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from "react-native-paper";

const HomeScreen = ({ navigation }) => {
  const [titleText, setTitleText] = useState("Dream Flight Journey");
  const onPressTitle = () => {
    setTitleText("Dream Flight Journeys"); // An example of a state change
  };
  const styles = StyleSheet.create({
    Heading: {
      fontSize: 30,
      fontWeight: "bold",
    },
    topHalf: {
      flex: 2,
      backgroundColor: "#50c3f0",
      justifyContent: "center",
      alignItems: "center",
    },
    bottomHalf: {
      flex: 3,
      backgroundColor: "#50c3f0",
      justifyContent: "start",
      alignItems: "center",
    },
    logo: {
      width: 132,
      height: 116,
    },
  });

  return (
    console.log("HomeScreen.js: HomeScreen()"),
    (
      <>
        <View style={styles.topHalf}>
          <Image
            style={styles.logo}
            source={require("../assets/placeholder.png")}
          />
        </View>
        <View style={styles.bottomHalf}>
          <Text style={styles.Heading}>
            {titleText} {"\n\n"}
          </Text>
          <Button
            buttonColor="#414141"
            mode="contained"
            onPress={() =>
              navigation.navigate("Search", {
                name: "PLACEHOLDER",
              })
            }
          >
            Find Itinerary
          </Button>
        </View>
      </>
    )
  );
};

export default HomeScreen;
