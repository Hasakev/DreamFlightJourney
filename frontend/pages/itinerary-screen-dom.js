import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

const ItineraryDomScreen = ({ navigation }) => {
  const data = {
    passengerName: "John Doe",
    bookingReference: "ABC123XYZ",
    flightSegments: [
      {
        flightNumber: "XY123",
        airline: "Blue Skies Airlines",
        departureCity: "New York",
        departureAirportCode: "JFK",
        departureDateTime: "2023-09-15 08:00 AM",
        arrivalCity: "Los Angeles",
        arrivalAirportCode: "LAX",
        arrivalDateTime: "2023-09-15 11:00 AM",
        duration: "3 hours",
      },
      {
        flightNumber: "ZY456",
        airline: "Blue Skies Airlines",
        departureCity: "Los Angeles",
        departureAirportCode: "LAX",
        departureDateTime: "2023-09-18 02:30 PM",
        arrivalCity: "New York",
        arrivalAirportCode: "JFK",
        arrivalDateTime: "2023-09-18 09:00 PM",
        duration: "5.5 hours",
      },
    ],
    totalDuration: "8.5 hours",
    totalPrice: "$550.00",
    seatNumber: "24A",
    departureTerminal: "Terminal 2",
    arrivalTerminal: "Terminal 4",
    baggageAllowance: "1 checked bag, 1 carry-on",
    contactInformation: {
      email: "john.doe@example.com",
      phone: "+1 (555) 123-4567",
    },
  };

  const emergencies = {
    flightNumber: "XY123",
    airline: "Blue Skies Airlines",
    departureCity: "New York",
    departureAirportCode: "JFK",
    departureDateTime: "2023-09-15 08:00 AM",
    arrivalCity: "Los Angeles",
    arrivalAirportCode: "LAX",
    arrivalDateTime: "2023-09-15 11:00 AM",
    originalDepartureDateTime: "2023-09-15 08:00 AM",
    delayReason: "Weather conditions",
    newDepartureDateTime: "2023-09-15 10:30 AM",
  };

<<<<<<< HEAD
const Data = {
  kevin: true,
  richie: 9999

}
const ItineraryScreen = ({ navigation, route }) => {


=======
>>>>>>> 2026665e4f55072e3d5f0782b42dc8587d18d5e7
  const styles = StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: "lightgray",
      borderRadius: 5,
      marginBottom: 10,
      backgroundColor: "#50c3f0",
    },
    label: {
      fontWeight: "bold",
      marginBottom: 5,
    },
    warningBlock: {
      backgroundColor: "yellow", // Background color of the container
      borderRadius: 5, // Rounded corners
    },
    warningText: {
      color: "red", // Text color
      fontWeight: "bold", // Text weight
    },
    main: {
      flex: 1,
      backgroundColor: "white",
    },
    buttonContainer: {
      alignItems: "center", // Center the button horizontally
      paddingBottom: 20, // Add padding at the bottom
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
<<<<<<< HEAD
      <View style={styles.topHalf} >
        <Text style={styles.Heading}>{route.params.name}'s Itinerary</Text>
=======
      <div style={styles.main}>
        <View style={styles.container}>
          <Text style={styles.label}>Passenger Name</Text>
          <Text>{data.passengerName}</Text>
        </View>
        {data.flightSegments.map((flightSegment, index) => (
          <View key={index} style={styles.container}>
            <Text style={styles.label}>
              Flight Number - {flightSegment.flightNumber}
            </Text>
            <Text>
              {flightSegment.departureAirportCode}
              {" -> "}
              {flightSegment.arrivalAirportCode}
            </Text>
            <Text>{flightSegment.departureDateTime}</Text>
          </View>
        ))}
        {/* Conditionally render emergency information */}
        {data.flightSegments.map((flightSegment, index) => {
          if (flightSegment.flightNumber === emergencies.flightNumber) {
            return (
              <View key={index} style={styles.warningBlock}>
                <Text style={styles.warningText}>
                  {flightSegment.flightNumber}
                  {" Delayed: "}
                  {emergencies.delayReason}
                </Text>
              </View>
            );
          }
        })}
      </div>
      <View style={styles.buttonContainer}>
        <Button
          buttonColor="#039BE5"
          textColor="black"
          mode="contained"
          onPress={() => navigation.navigate("OptIn")}
        >
          Opt In to Notifications
        </Button>
>>>>>>> 2026665e4f55072e3d5f0782b42dc8587d18d5e7
      </View>
    </>
  );
};

<<<<<<< HEAD
export default {ItineraryScreen, Data};
=======
export default ItineraryDomScreen;
>>>>>>> 2026665e4f55072e3d5f0782b42dc8587d18d5e7
