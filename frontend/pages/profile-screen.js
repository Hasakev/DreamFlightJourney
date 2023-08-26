import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const ProfileScreen = ({ navigation, route }) => {
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
    <View>
      <Text>This is {route.params.name}'s profile</Text>
      <View style={styles.bottomHalf}>
        <Button
          buttonColor="#414141"
          mode="contained"
          onPress={() =>
            navigation.navigate("Itinerary", {
              name: "Masham Siqyeioiao",
            })
          }
        >
          View Itinerary
        </Button>
      </View>
    </View>
  );
};

export default ProfileScreen;
