// import React, { useEffect, useState } from 'react';

// import { BleManager } from 'react-native-ble-plx';
// import { Platform, PermissionsAndroid, View } from 'react-native';

// const BleComponent = () => {
//   const [manager, setManager] = useState();

//   async function requestBLEPermission() {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
//         {
//           title: 'Bluetooth permission',
//           message: 'We need to access your bluetooth',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         },
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         setManager(new BleManager());
//       } else {
//         console.tron.log('Camera permission denied');
//       }
//     } catch (err) {
//       console.tron.log(err);
//     }
//   }

//   useEffect(() => {
//     requestBLEPermission();

//     return () => {
//       manager.destroy();
//     };
//   }, []);

//   // async function setupNotifications(device) {
//   //   for (const id in sensors) {
//   //     const service = serviceUUID(id);
//   //     const characteristicW = writeUUID(id);
//   //     const characteristicN = notifyUUID(id);

//   //     const characteristic = await device.writeCharacteristicWithResponseForService(
//   //       service, characteristicW, "AQ==" /* 0x01 in hex */
//   //     )

//   //     device.monitorCharacteristicForService(service, characteristicN, (error, characteristic) => {
//   //       if (error) {
//   //         error(error.message);
//   //         return;
//   //       }
//   //       updateValue(characteristic.uuid, characteristic.value);
//   //     });
//   //   }
//   // }

//   function scanAndConnect() {
//     manager.startDeviceScan(null, null, (error, device) => {
//       console.tron.log('Scanning...');
//       console.tron.log(device);

//       if (error) {
//         console.tron.log(error.message);
//         return;
//       }

//       if (device.name === 'TI BLE Sensor Tag' || device.name === 'SensorTag') {
//         console.tron.log('Connecting to TI Sensor');
//         manager.stopDeviceScan();
//         device
//           .connect()
//           .then((_device) => {
//             console.tron.log('Discovering services and characteristics');
//             return _device.discoverAllServicesAndCharacteristics();
//           })
//           .then((_device) => {
//             console.tron.log('Setting notifications');
//             // return setupNotifications(_device);
//           })
//           .then(
//             () => {
//               console.tron.log('Listening...');
//             },
//             (_error) => {
//               console.tron.log(_error.message);
//             },
//           );
//       }
//     });
//   }

//   useEffect(() => {
//     if (manager != null) {
//       console.tron.log(manager);
//       if (Platform.OS === 'ios') {
//         manager.onStateChange((state) => {
//           if (state === 'PoweredOn') scanAndConnect();
//         });
//       } else {
//         scanAndConnect();
//       }
//     }
//   }, [manager]);

//   return <View />;
// };

// export default BleComponent;
