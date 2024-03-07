import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const RoundButtom = ({BGcolor, text, textColor, outline}: any) => {
  return (
    <TouchableOpacity
      style={[
        styles.ButtonStyle,
        {backgroundColor: BGcolor, borderColor: outline},
      ]}>
      <Text style={[styles.ButtonText, {color: textColor}]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default RoundButtom;

const styles = StyleSheet.create({
  ButtonStyle: {
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 30,
    width: 150,
    borderWidth: 1,
  },
  ButtonText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
});
