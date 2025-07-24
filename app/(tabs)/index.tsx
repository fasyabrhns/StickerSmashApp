import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const PlaceholderImage = require("@/assets/images/image1.jpg");
const index = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.containerImage}>
          <ImageViewer imgSource={PlaceholderImage} />
        </View>
        <View style={styles.buttonContainer}>
          <Button theme="primary" label="Chosse a photo" />
          <Button label="use a photo" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
  },
  containerImage: {
    flex: 1,
    paddingTop: 20,
  },
  buttonContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});

export default index;
