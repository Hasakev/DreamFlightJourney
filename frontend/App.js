import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Import your screens here
import HomeScreen from "./pages/home-screen";
import SearchScreen from "./pages/search-screen";
import ItineraryDomScreen from "./pages/itinerary-screen-dom";
import ItinerarySubScreen from "./pages/itinerary-screen-sub";
import OptInDomScreen from "./pages/opt-in-dom-screen";
import OptInSubScreen from "./pages/opt-in-sub-screen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="ItineraryDom" component={ItineraryDomScreen} />
      <Stack.Screen name="ItinerarySub" component={ItinerarySubScreen} />
      <Stack.Screen name="OptInDom" component={OptInDomScreen} />
      <Stack.Screen name="OptInSub" component={OptInSubScreen} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: true }}
      /> 
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerShown: true }}
      />
      {/* ... other tab screens ... */}
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;
