import { Image } from "expo-image";
import { useState } from "react";
import {
  FlatList,
  ImageSourcePropType,
  Platform,
  Pressable,
  StyleSheet,
} from "react-native";

type Props = {
  onSelect: (image: ImageSourcePropType) => void;
  onCloseModal: () => void;
};

const EmojiList = ({ onSelect, onCloseModal }: Props) => {
  const [emoji] = useState<ImageSourcePropType[]>([
    require("../assets/images/IMAGE(1).png"),
    require("../assets/images/IMAGE(2).png"),
    require("../assets/images/IMAGE(4).png"),
    require("../assets/images/IMAGE(5).png"),
    require("../assets/images/IMAGE(6).png"),
    require("../assets/images/IMAGE(7).png"),
  ]);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === "web"}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}
        >
          <Image source={item} key={index} style={styles.image} />
        </Pressable>
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});

export default EmojiList;
