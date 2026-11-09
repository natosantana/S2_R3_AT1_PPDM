
import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import type { RootStackParamList } from "../types/RootStackParamList";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function TelaPrincipal() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Principal</Text>

      <Button
        title="Capturar uma Fotografia"
        onPress={() => navigation.navigate("Camera")}
      />

      <View style={styles.buttonSpacing} />

      <Button
        title="Obter a Localização Atual"
        onPress={() => navigation.navigate("GPS")}
      />

      <View style={styles.buttonSpacing} />

      <Button
        title="Acelerômetro em Tempo Real"
        onPress={() => navigation.navigate("Acelerometro")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  buttonSpacing: {
    height: 16,
  },
});
