import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Data = {
  kevin: true,
  richie: 9999

}
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
    topHalf: {
      flex: 1,
      backgroundColor: "#50c3f0",
      justifyContent: "top",
      alignItems: "center",
    },
  });

  return (
    <>
      <View style={styles.topHalf} >
        <Text style={styles.Heading}>{route.params.name}'s Itinerary</Text>
      </View>
    </>
  );
};

export default {ItineraryScreen, Data};
