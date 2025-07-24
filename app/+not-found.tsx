import { Link, Stack } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

const notFoundScreen = () => {
  return (
    <>
      <Stack.Screen options={{ title: "Ooops! screen not found dude" }} />
      <View style={styles.container}>
        <Link href="/" style={styles.linkButton}>
          STEP, n back to Home screen!
        </Link>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    justifyContent: "center",
    alignItems: "center",
  },

  linkButton: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});

export default notFoundScreen;
