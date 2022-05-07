import * as React from "react";

// Redux
import { store } from "./redux/store";
import { Provider } from "react-redux";

//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

// Base application
import HomeScreen from "./screens/HomeScreen";
import ScanScreen from "./screens/ScanScreen";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Scanner" component={ScanScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
