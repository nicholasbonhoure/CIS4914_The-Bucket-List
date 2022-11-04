import React from 'react';
import {View, Text, StyleSheet, ScrollView } from 'react-native';

const ExploreScreen = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text>Explore Page</Text>
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

export default ExploreScreen;
