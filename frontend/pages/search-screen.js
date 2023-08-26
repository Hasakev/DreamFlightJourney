import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button, TextInput } from "react-native-paper";
import SelectDropdown from "react-native-select-dropdown";

const airlines = ["Air Canada", "Air France", "Air India", "Air New Zealand"];

const SearchScreen = ({ navigation }) => {
  const [text, setText] = useState("");
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
      flex: 2,
      backgroundColor: "#50c3f0",
      justifyContent: "center",
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
          <SelectDropdown
            data={airlines}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
          />

          <TextInput
            style={styles.input}
            keyboardType="numeric"
            label="Flight Number"
            value={text}
            onChangeText={(text) => setText(text)}
          />

          <TextInput
            style={styles.input}
            keyboardType="numeric"
            label="Seat Number"
            value={text}
            onChangeText={(text) => setText(text)}
          />

          <Button
            buttonColor="#414141"
            mode="contained"
            onPress={() =>
              navigation.navigate("StackNavigator", { screen: "ItineraryDom" })
            }
          >
            Search
          </Button>
        </View>
      </View>
    )
  );
};

export default SearchScreen;
