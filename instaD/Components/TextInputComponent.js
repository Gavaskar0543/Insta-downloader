import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

const TextInputComponent = () => {
  const [text, onChangeText] = React.useState('Enter URL');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    backgroundColor:'yellow',
    color:'brown',
    fontWeight:900,
    borderWidth: 1,
    padding: 10,
    fontFamily:'Poppins'
  },
});

export default TextInputComponent;