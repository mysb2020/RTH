import React from 'react'
import { Camera, CameraType } from 'expo-camera';
import { useState, useEffect } from 'react';
import { PhotoIcon } from "react-native-heroicons/outline";
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Scan = () => {
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = React.useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const toggleCameraType = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };
  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log('Photo', photo);
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
    <Camera style={styles.camera} type={type} ref={cameraRef}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
          <Text style={styles.text}>Flip Camera</Text>
        </TouchableOpacity>
      </View>
    </Camera>
    <View style={styles.bottomButtonContainer}>
    <PhotoIcon size={45} color="#022201"
                  className=" items-center justify-center"/>
        <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
          <Text style={styles.captureText}>cekrek</Text>
        </TouchableOpacity>
      </View>
  </View>
  )
}

export default Scan

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'flex-end',
  },
  button: {
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  bottomButtonContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 30,
    paddingLeft: 40,
    bottom: 0,
    width: '100%',
    height: '13%',
    backgroundColor: 'white',
  },
  captureButton: {
    backgroundColor: '#044902',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    left: 75,
    height: 70,
    width: 70,
    borderRadius: 50,
  },
  captureText: {
    fontSize: 10,
    color: 'black',
    borderRadius: 20,
  },
})