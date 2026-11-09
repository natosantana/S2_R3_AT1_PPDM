import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TelaPrincipal from "./src/pages/TelaPrincipal";
import Camera from "./src/pages/Camera";
import GPS from "./src/pages/GPS";
import Acelerometro from "./src/pages/Acelerometro";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaPrincipal">
        <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="GPS" component={GPS} />
        <Stack.Screen name="Acelerometro" component={Acelerometro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}