import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import MovieDetail from "../screens/MovieDetail";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home Screen" component={BottomTabNavigator} />
      <Stack.Screen name="Movie Detail" component={MovieDetail} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
