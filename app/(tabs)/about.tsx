import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const about = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.text}>About Screen</Text>
        </View>
        <Link href="/" style={styles.linkButton}>
          Back to Home
        </Link>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "F6F6F6",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#000000",
  },
  linkButton: {
    textDecorationLine: "underline",
    color: "#000000",
  },
});

export default about;
