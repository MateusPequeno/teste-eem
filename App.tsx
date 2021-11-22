import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginScreen from "./screens/LoginScreen/LoginScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <LoginScreen />
    </SafeAreaProvider>
  );
}
