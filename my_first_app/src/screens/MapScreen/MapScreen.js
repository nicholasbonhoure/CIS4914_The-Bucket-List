import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import MapView from 'react-native-maps';

export default function Map() {

    return (
        <View style={styles.body}>
            <Text style={styles.text}>
                Map TEMP
            </Text>
            <MapView style={styles.map}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.421,
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
    },

    text: {
        fontWeight: 'bold',
        color: 'white',
    },

    map: {
        width: '100%',
        Height: '60%',
    }
})