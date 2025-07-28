import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

type Props = {
  onPress?: () => void;
};

const ButtonCircle = ({ onPress }: Props) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.buttonCircle} onPress={onPress}>
        <MaterialIcons name="add" size={25} color="#A2D5C6" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 84,
    height: 84,
    marginHorizontal: 60,
    borderWidth: 4,
    borderColor: "#ffd33d",
    borderRadius: 42,
    padding: 3,
  },
  buttonCircle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 42,
    backgroundColor: "#fff",
  },
});
export default ButtonCircle;
