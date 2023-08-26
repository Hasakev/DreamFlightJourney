import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const ItineraryScreen = ({ navigation, route }) => {
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
    <View style={styles.Container}>
      <Text style={styles.Heading}>{route.params.name}'s Itinerary</Text>
    </View>
  );
};

export default ItineraryScreen;
