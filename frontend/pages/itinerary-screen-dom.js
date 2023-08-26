import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

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

  const styles = StyleSheet.create({
    container: {
      padding: 10,
      borderWidth: 1,
      borderColor: "lightgray",
      borderRadius: 5,
      marginBottom: 10,
    },
    label: {
      fontWeight: "bold",
      marginBottom: 5,
    },
  });

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.label}>Passenger Name</Text>
        <Text>{data.passengerName}</Text>
      </View>

      {data.flightSegments.map((flightSegment, index) => (
        <View key={index} style={styles.container}>
          <Text style={styles.label}>Flight Number</Text>
          <Text>{flightSegment.flightNumber}</Text>
          <Text>
            {flightSegment.departureAirportCode}
            {" -> "}
            {flightSegment.arrivalAirportCode}
          </Text>
        </View>
      ))}

      {/* Conditionally render emergency information */}
      {data.flightSegments.map((flightSegment, index) => {
        if (flightSegment.flightNumber === emergencies.flightNumber) {
          return (
            <View key={index} style={styles.container}>
              <Text style={styles.label}>{emergencies.delayReason}</Text>
            </View>
          );
        }
        return null;
      })}
    </>
  );
};

export default ItineraryDomScreen;
