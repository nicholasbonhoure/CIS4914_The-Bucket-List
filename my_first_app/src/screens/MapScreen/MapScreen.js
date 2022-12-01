import React from 'react';
import {View, 
        Text, 
        TouchableOpacity,  
        StyleSheet, 
        ScrollView, 
        Button, 
        Image,
        ImageBackground, 
        useWindowDimensions, } from 'react-native';
import NfcManager, {NfcTech} from 'react-native-nfc-manager';
import CheckBox from '@react-native-community/checkbox';
import UFIMAGE from '../../../assets/images/UF-University-of-Florida.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Logo from '../../../assets/images/Logo.png';

// Pre-step, call this before any NFC operations
NfcManager.start();

function MapScreen() {
  const {height} = useWindowDimensions();
  const {width} = useWindowDimensions();
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
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={[styles.container, {flexDirection: 'row',padding: 2}]}>
        <ImageBackground
          style={{height: 35, width: 35, padding: 2,}}
          source={Logo}
        />
        <Text style={styles.headerText}> The Bucket List </Text>
      </View>
      {/* Title */}
      <Text style={styles.title}> Your Trip To </Text>
      <Text style={styles.title}> The University of Florida </Text>

      {/* Location Image */}
      <Image
        source={UFIMAGE}
        style={[styles.image, {height: height * 0.5, flexDirection: 'row', padding: 10, margin: 10,}]} 
      />
      {/* Address */}
      <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20}/>
          <Text style={{color:"#777777"}}> University of Florida Gainesville, FL 32611</Text>
      </View>

      <View style={styles.list}>
        <Text style={[styles.title, {fontColor: 'white', textDecorationLine: 'underline'}]}> Your Itinerary: </Text>
        {/* Check Boxes */}
        <View style={[styles.wrapper, {flexDirection: 'row', padding: 1, margin: 1}]}>
          <CheckBox 
            disabled={false}
          />
          <Text> Reitz Union </Text>
          <Button
            title="Scan"
            onPress={readNdef}
            color= "#B7E9F7"
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
            color= "#B7E9F7"
          />
        </View>
        <View style={[styles.wrapper, {flexDirection: 'row', padding: 1, margin: 1}]}>
          <CheckBox 
            disabled={false}
          />
          <Text> Marston Library </Text>
          <Button
            title="Scan"
            onPress={readNdef}
            color= "#B7E9F7"
          />
        </View>
        <View style={[styles.wrapper, {flexDirection: 'row', padding: 1, margin: 1}]}>
          <CheckBox 
            disabled={false}
          />
          <Text> Plaza Of Americas </Text>
          <Button
            title="Scan"
            onPress={readNdef}
            color= "#B7E9F7"
          />
        </View>
        <View style={[styles.wrapper, {flexDirection: 'row', padding: 1, margin: 1}]}>
          <CheckBox 
            disabled={false}
          />
          <Text> Library West </Text>
          <Button
            title="Scan"
            onPress={readNdef}
            color= "#B7E9F7"
          />
        </View>
        <View style={[styles.wrapper, {flexDirection: 'row', padding: 1, margin: 1}]}>
          <CheckBox 
            disabled={false}
          />
          <Text> Ben Hill Giffin Stadium </Text>
          <Button
            title="Scan"
            onPress={readNdef}
            color= "#B7E9F7"
          />
        </View>
        <View style={[styles.wrapper, {flexDirection: 'row', padding: 1, margin: 1,}]}>
          <CheckBox 
            disabled={false}
          />
          <Text> Stephen O'Connel Center </Text>
          <Button 
            style={styles.ScanButton}
            title="Scan"
            onPress={readNdef}
            color= "#B7E9F7"
          />
        </View>
      </View>

      {/* boundary */}
      <View style={{padding: 15}}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    margin: 1,
    padding: 15,
  },

  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1,
  },

  body: {
    flex: 1,
    alignItems: 'center',
    padding: 1,
  },

  row: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingLeft: 20,
  },

  headerText: {
    fontWeight: 'bold',
    fontSize: 25,
    padding: 2,
  },

  text: {
    fontWeight: 'bold',
    color: 'white',
    padding: 1,
  },

  title: {
    fontSize: 30, 
    alignSelf: 'center', 
    fontWeight: 'bold',
    margin: 1,
  },

  image: {
    alignSelf: 'center',
    flexDirection: 'row',
    margin: 1,
    width: '90%',
    maxWidth: '90%',
    padding: 1,
  },

  list: {
    alignSelf: 'center',
    width: '90%',
    height: 400,
    backgroundColor: '#F2EECB',
    borderRadius: 20,
    marginBottom: 100,
    padding: 15,
  },

  ScanButton: {
    borderRadius:100,
    borderWidth: 1,
  }
});

export default MapScreen;