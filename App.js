import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

// Redux
import { store } from "./redux/store";
import { Provider } from "react-redux";

// Base application
import Scanner from "./src/Scanner";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Scanner />
      </Provider>
    </NavigationContainer>
  );
}
