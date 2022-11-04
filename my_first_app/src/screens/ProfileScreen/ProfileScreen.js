import React from 'react';
import {View, Text, StyleSheet, ScrollView } from 'react-native';

const ProfileScreen = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text>Profile Page</Text>
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

export default ProfileScreen;
