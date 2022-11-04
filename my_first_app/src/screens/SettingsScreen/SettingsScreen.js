import React from 'react';
import {View, Text, StyleSheet, ScrollView } from 'react-native';

const SettingsScreen = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text>Settings Page</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: "#FFF3E8",
    },
});

export default SettingsScreen;
