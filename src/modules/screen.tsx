import React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export const GPScreen = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <View style={styles.screenContainer}>
        <Text style={styles.text}>GP Calculator</Text>
        <View style={styles.formView}>
          <TextInput style={styles.formInput}></TextInput>
          <TextInput style={styles.formInput}></TextInput>
        </View>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  text: {
    color: "blue",
    fontSize: 20,
  },
  screenContainer: {
    flex: 1,
  },
  formView: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "blue",
  },

  formInput: {
    width: "20px",
    borderWidth: 5,
    backgroundColor: "white",
  },
});
