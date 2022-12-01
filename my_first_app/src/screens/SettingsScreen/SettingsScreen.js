import React from 'react';
import {View, Text, StyleSheet, ScrollView, ImageBackground, Button } from 'react-native';
import Logo from '../../../assets/images/Logo.png';

const SettingsScreen = () => {

    const accountSettings = () => {
        console.warn("Account Pressed")
    }

    const tripSettings = () => {
        console.warn("My Trip Pressed")
    }

    const historySettings = () => {
        console.warn("Past Visits Pressed")
    }

    const contactSettings = () => {
        console.warn("Contact Us Pressed")
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
            <Button 
                title="Account"
                fontWeight='bold'
                color='#777777'
                borderTopColor='black'
                borderBottomColor='black'
                onPress={accountSettings}
            />
            <Button 
                title="My Trip"
                fontWeight='bold'
                color='#777777'
                borderTopColor='black'
                borderBottomColor='black'
                onPress={tripSettings}
            />
            <Button 
                title="Past Visits"
                fontWeight='bold'
                color='#777777'
                borderTopColor='black'
                borderBottomColor='black'
                onPress={historySettings}
            />
            <Button 
                title="Contact Us"
                fontWeight='bold'
                color='#777777'
                borderTopColor='black'
                borderBottomColor='black'
                onPress={contactSettings}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: "#FFF3E8",
    },
    container:{
        flex: 1,
        backgroundColor: 'white',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        margin: 1,
        padding: 15,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 25,
        padding: 2,
    },
    buttonSytle: {
        fontWeight: 'bold',
        color: '#777777',
        borderTopColor: 'black',
        borderBottomColor: 'black',
    },
});

export default SettingsScreen;

