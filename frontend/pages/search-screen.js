import React, { useState } from "react";
import {StyleSheet, Text, View , Image} from "react-native";
import { Button, TextInput } from "react-native-paper";

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
      flex: 3,
      backgroundColor: "#50c3f0",
      justifyContent: "center",
      alignItems: "center",
    },
    logo: {
      resizeMode:'cover',
      width: 132,
      height: 116,
      borderRadius: 20,
    },
  });
  return (console.log("Search"),
    (
    <View style = {{ flex: 1}}>
      <View style={styles.topHalf}>
      <Image
          style={styles.logo}
          source={require("../assets/placeholder.png")}
        />
      </View>

      <View style = {styles.bottomHalf}>
      
          <TextInput
            label="Email"
            value={text}
            onChangeText={text => setText(text)}
          />
        
    
      <Button
            buttonColor="#414141"
            mode="contained"
            onPress={() =>
              navigation.navigate("ItineraryDom", {name: "Mashanm Siddiqudaspo"})
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
