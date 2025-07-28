import Button from "@/components/Button";
import ButtonCircle from "@/components/ButtonCircle";
import EmojiList from "@/components/EmojiList";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiSticker from "@/components/EmojiSticker";
import IconButton from "@/components/IconButton";
import ImageViewer from "@/components/ImageViewer";

import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import React, { useRef, useState } from "react";
import { ImageSourcePropType, StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { captureRef } from "react-native-view-shot";

const PlaceholderImage = require("@/assets/images/image1.jpg");

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );
  const [showOption, setShowOption] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickesEmoji] = useState<
    ImageSourcePropType | undefined
  >(undefined);
  const [status, reuqustPermission] = MediaLibrary.usePermissions();
  const imageRef = useRef<View>(null);

  if (status === null) {
    reuqustPermission();
  }

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowOption(true);
    } else {
      alert("You did not select any image.");
    }
  };

  const onReset = () => {
    setShowOption(false);
  };

  const onAddSticker = () => {
    setModalVisible(true);
  };

  const onModalClose = () => {
    setModalVisible(false);
  };

  const onSaveImageAsync = async () => {
    try {
      const localUri = await captureRef(imageRef, {
        height: 440,
        quality: 1,
      });

      await MediaLibrary.saveToLibraryAsync(localUri);
      if (localUri) {
        alert("Saved!");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.containerImage}>
        <View ref={imageRef} collapsable={false}>
          <ImageViewer
            imgSource={PlaceholderImage}
            selectedImage={selectedImage}
          />
          {pickedEmoji && (
            <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
          )}
        </View>
      </View>
      {showOption ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <ButtonCircle onPress={onAddSticker} />
            <IconButton
              icon="save-alt"
              label="save"
              onPress={onSaveImageAsync}
            />
          </View>
        </View>
      ) : (
        <View style={styles.buttonContainer}>
          <Button
            theme="primary"
            label="Chosse a photo"
            onPress={pickImageAsync}
          />
          <Button label="use a photo" onPress={() => setShowOption(true)} />
        </View>
      )}
      <EmojiPicker isVisible={modalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickesEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
    </GestureHandlerRootView>
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
  optionsContainer: {
    position: "absolute",
    bottom: 80,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
});

export default Index;
