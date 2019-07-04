import React, { useEffect, useState } from "react";
import { Modal, View, SafeAreaView } from "react-native";
import {
  DocumentPicker,
  DocumentPickerUtil
} from "react-native-document-picker";
import RNFS from "react-native-fs";
import LottieView from "lottie-react-native";

import { OpenFilesButton } from "./style";

export default function DocPicker({ nav }) {
  const [layout, setLayout] = useState();
  const [loading, setLoading] = useState(false);

  function showFilePicker() {
    DocumentPicker.show(
      {
        filetype: [DocumentPickerUtil.allFiles()]
      },
      (error, res) => {
        setLoading(true);

        if (error) {
          console.tron.log(error);
          return;
        }
        if (res.uri != null) {
          RNFS.readFile(res.uri).then(res => {
            setLayout(JSON.parse(res));
          });
        }
      }
    );
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }

  useEffect(() => {
    if (layout != null) {
      setLoading(false);
      nav.navigate("Screen", { layout });
    }
  }, [layout]);

  return (
    <>
      <OpenFilesButton title="Carregar JSON" onPress={showFilePicker} />
      <Modal
        animationType="slide"
        transparent={false}
        visible={loading}
        onRequestClose={() => {}}
      >
        <SafeAreaView
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View>
            {/* <LottieView
              source={require("~/assets/loading.json")}
              autoPlay
              loop
              autoSize
              style={{ width: 600, height: 600 }}
            /> */}
          </View>
        </SafeAreaView>
      </Modal>
    </>
  );
}
