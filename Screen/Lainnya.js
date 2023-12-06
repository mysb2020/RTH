import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View, Text } from "react-native";

const Lainnya = () => {
  const [text, onChangeText] = React.useState("I love #reactnative mobile apps");
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>{`selection={{start: 7, end: 19}}`}</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          selection={{start: 7, end: 19}}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 40
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Lainnya
