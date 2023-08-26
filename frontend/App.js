import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import HomeScreen from "./pages/home-screen";
import SearchScreen from "./pages/search-screen";
import ItineraryDomScreen from "./pages/itinerary-screen-dom";
import ItinerarySubScreen from "./pages/itinerary-screen-sub";
import OptInDomScreen from "./pages/opt-in-dom-screen";
import OptInSubScreen from "./pages/opt-in-sub-screen";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="ItineraryDom" component={ItineraryDomScreen} />
        <Stack.Screen name="ItinerarySub" component={ItinerarySubScreen} />
        <Stack.Screen name="OptInDom" component={OptInDomScreen} />
        <Stack.Screen name="OptInSub" component={OptInSubScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
