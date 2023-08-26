import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
<<<<<<< HEAD
import HomeScreen from "./pages/home-screen";
import SearchScreen from "./pages/search-screen";
import ItineraryDomScreen from "./pages/itinerary-screen-dom";
import ItinerarySubScreen from "./pages/itinerary-screen-sub";
import OptInDomScreen from "./pages/opt-in-dom-screen";
import OptInSubScreen from "./pages/opt-in-sub-screen";
import SearchScreen from "./pages/search-screen";
=======
import ConfirmationScreen from "./pages/confirmation-screen";
import ProfileScreen from "./pages/profile-screen";
import HomeScreen from "./pages/home-screen";
import SearchScreen from "./pages/search-screen";
import ItineraryScreen from "./pages/itinerary-screen";
import OptInScreen from "./pages/opt-in-screen";
import ProblemSolutionScreen from "./pages/problem-solution-screen";
>>>>>>> 29060debe88f4c210005cc30d1b530bcf60dda94
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
<<<<<<< HEAD
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="ItineraryDom" component={ItineraryDomScreen} />
        <Stack.Screen name="ItinerarySub" component={ItinerarySubScreen} />
        <Stack.Screen name="OptInDom" component={OptInDomScreen} />
        <Stack.Screen name="OptInSub" component={OptInSubScreen} />
=======
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Itinerary" component={ItineraryScreen} />
        <Stack.Screen name="OptIn" component={OptInScreen} />
        <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
        <Stack.Screen
          name="ProblemSolution"
          component={ProblemSolutionScreen}
        />
>>>>>>> 29060debe88f4c210005cc30d1b530bcf60dda94
      </Stack.Navigator>
    </NavigationContainer>
  );
}
