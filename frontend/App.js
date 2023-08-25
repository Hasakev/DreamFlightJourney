import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const TextInANest = () => {
  const [titleText, setTitleText] = useState("Dream Flight Journey");
  const bodyText = "Your safety is our priority";

  const onPressTitle = () => {
    setTitleText("Dream Flight Journey");
  };

  const styles = StyleSheet.create({
    baseText: {
      fontFamily: "Cochin",
    },
    titleText: {
      fontSize: 20,
      fontWeight: "bold",
    },
  });

  return (
    <View>
      <Text style={styles.baseText}>
        <Text style={styles.titleText} onPress={onPressTitle}>
          {titleText}
          {"\n"}
          {"\n"}
        </Text>
        <Text numberOfLines={5}>{bodyText}</Text>
      </Text>
    </View>
  );
};

export default function App() {
  return <TextInANest />;
}
