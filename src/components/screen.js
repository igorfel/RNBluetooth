import React, { useEffect } from "react";
import { View } from "react-native";

// import { Container } from './styles';

export default function Screen(prop) {
  useEffect(() => {
    console.tron.log(prop);
  }, []);

  return <View />;
}
