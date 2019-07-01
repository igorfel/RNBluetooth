import React, { useEffect, useState } from 'react';
import BleComponent from '~/components/bleComponent';

import {
  Text, Image, StyleSheet, Dimensions, ImageBackground, StatusBar,
} from 'react-native';

// import { BleManager } from 'react-native-ble-plx';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  fileName: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  instructions: {
    color: '#DDD',
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
  },
  welcome: {
    height: Dimensions.get('window').height * 0.11,
    marginVertical: Dimensions.get('window').height * 0.11,
    width: Dimensions.get('window').height * 0.9 * (1950 / 662),
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const Main = () => (
  <ImageBackground
    source={{
      uri: 'https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/background.png',
    }}
    style={styles.container}
    resizeMode="cover"
  >
    <StatusBar barStyle="light-content" backgroundColor="#7159c1" />

    <Text style={styles.welcome}>Bem-vindo ao teste Bluetooth/BLE!</Text>
    <BleComponent />
  </ImageBackground>
);
export default Main;
