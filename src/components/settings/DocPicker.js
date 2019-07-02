import React, { useEffect, useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import {
  DocumentPicker,
  DocumentPickerUtil
} from "react-native-document-picker";
import RNFS from "react-native-fs";

// import { Container } from './styles';

export default function DocPicker({ nav }) {
  const [layout, setLayout] = useState();

  function showFilePicker() {
    DocumentPicker.show(
      {
        filetype: [DocumentPickerUtil.allFiles()]
      },
      (error, res) => {
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
  }

  useEffect(() => {
    if (layout != null) {
      nav.navigate("Screen", { layout });
    }
  }, [layout]);

  return (
    <Button
      style={styles.filePicker}
      color="#333"
      title="Carregar JSON"
      onPress={showFilePicker}
    />
  );
}

const styles = StyleSheet.create({});
