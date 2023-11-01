import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import UserPage from "./components/Screens/UserPage";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <UserPage />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  }
});
