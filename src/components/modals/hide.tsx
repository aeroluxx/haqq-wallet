import React, {useEffect} from 'react';

import {StatusBar, StyleSheet, View} from 'react-native';

import {
  LIGHT_BG_1,
  LIGHT_GRAPHIC_GREEN_2,
  LIGHT_TEXT_BASE_3,
} from '../../variables';
import {ISLMCirclesIcon, Text} from '../ui';

export const HideModal = () => {
  useEffect(() => {
    StatusBar.setBackgroundColor(LIGHT_GRAPHIC_GREEN_2);
    return () => StatusBar.setBackgroundColor(LIGHT_BG_1);
  }, []);
  return (
    <View style={page.container}>
      <ISLMCirclesIcon />
      <Text t2 style={page.text}>
        ISLM Wallet
      </Text>
    </View>
  );
};

const page = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: LIGHT_GRAPHIC_GREEN_2,
  },
  text: {
    color: LIGHT_TEXT_BASE_3,
    marginHorizontal: 20,
    textAlign: 'center',
    marginTop: 24,
  },
});