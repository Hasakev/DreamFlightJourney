import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import ConfirmationScreen from "./pages/confirmation-screen";
import ProfileScreen from "./pages/profile-screen";
import HomeScreen from "./pages/home-screen";
import SearchScreen from "./pages/search-screen";
import ItineraryScreen from "./pages/itinerary-screen";
import OptInScreen from "./pages/opt-in-screen";
import ProblemSolutionScreen from "./pages/problem-solution-screen";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Itinerary" component={ItineraryScreen} />
        <Stack.Screen name="OptIn" component={OptInScreen} />
        <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
        <Stack.Screen
          name="ProblemSolution"
          component={ProblemSolutionScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
