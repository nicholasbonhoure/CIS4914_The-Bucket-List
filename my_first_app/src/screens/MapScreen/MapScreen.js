import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ScrollView, Button} from 'react-native';
import NfcManager, {NfcTech} from 'react-native-nfc-manager';
import CheckBox from '@react-native-community/checkbox';

// Pre-step, call this before any NFC operations
NfcManager.start();

function MapScreen() {
  async function readNdef() {
    try {
      // register for the NFC tag with NDEF in it
      await NfcManager.requestTechnology(NfcTech.Ndef);
      // the resolved tag object will contain `ndefMessage` property
      const tag = await NfcManager.getTag();
      console.warn('Tag found', tag);
    } catch (ex) {
      console.warn('Oops!', ex);
    } finally {
      // stop the nfc scanning
      NfcManager.cancelTechnologyRequest();
    }
  }

  return (
    <>
      <Text> The University of Florida </Text>
      <View style={[styles.wrapper, {flexDirection: 'row', padding: 1, margin: 1}]}>
        <CheckBox 
          disabled={false}
        />
        <Text> Reitz Union </Text>
        <Button
          title="Scan"
          onPress={readNdef}
          color= "#FA4616"
        />
      </View>
      <View style={[styles.wrapper, {flexDirection: 'row', padding: 1, margin: 1}]}>
        <CheckBox 
          disabled={false}
        />
        <Text> Centry Tower </Text>
        <Button
          title="Scan"
          onPress={readNdef}
          color= "#FA4616"
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  body: {
    flex: 1,
    alignItems: 'center',
  },

  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default MapScreen;