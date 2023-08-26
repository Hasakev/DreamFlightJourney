import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button, TextInput } from "react-native-paper";
import SelectDropdown from "react-native-select-dropdown";
import { Button, TextInput, Provider, Surface } from "react-native-paper";
import Dropdown from "react-native-paper-dropdown";

const airlines = [
  { label: "Air Canada" },
  { label: "Air France" },
  { label: "Air India" },
  { label: "Air New Zealand" },
];

const SearchScreen = ({ navigation }) => {
  const [flightText, setFlightText] = useState("");
  const [bookingText, setBookingText] = useState("");
  const [seatText, setSeatText] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [airline, setAirline] = useState("");

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
      justifyContent: "center",
      alignItems: "center",
    },
    bottomHalf: {
      flex: 3,
      backgroundColor: "#50c3f0",
      justifyContent: "space-around",
      alignItems: "center",
    },
    logo: {
      resizeMode: "cover",
      width: 132,
      height: 116,
      borderRadius: 20,
    },
    input: {
      borderColor: "white",
      width: "60%",
      borderWidth: 1,
      borderRadius: 5,
      margin: 10,
    },
    dropdownStyle: {
      borderWidth: 1,
      width: "60%",
      borderRadius: 5,
      borderColor: "white",
      margin: 1,
    },
  });
  return (
    console.log("Search"),
    (
      <View style={{ flex: 1 }}>
        <View style={styles.topHalf}>
          <Image
            style={styles.logo}
            source={require("../assets/placeholder.png")}
          />
        </View>

        <View style={styles.bottomHalf}>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            label="Booking Reference"
            value={text}
            onChangeText={(text) => setText(text)}
          />

          <Dropdown
            label={"Airlines"}
            mode={"outlined"}
            visible={showDropDown}
            showDropDown={() => setShowDropDown(true)}
            onDismiss={() => setShowDropDown(false)}
            value={airline}
            setValue={setAirline}
            list={airlines}
            dropDownStyle={styles.dropdownStyle}
          />

          <TextInput
            style={styles.input}
            keyboardType="numeric"
            label="Flight Number"
            value={flightText}
            onChangeText={(text) => setFlightText(text)}
          />

          <TextInput
            style={styles.input}
            keyboardType="numeric"
            label="Seat Number"
            value={seatText}
            onChangeText={(text) => setSeatText(text)}
          />

          <Button
            buttonColor="#414141"
            mode="contained"
            onPress={() => navigation.navigate("Search")}
          >
            Search
          </Button>
        </View>
      </View>
    )
  );
};

export default SearchScreen;
