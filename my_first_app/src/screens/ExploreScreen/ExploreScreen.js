import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList, TextInput, ImageBackground, Alert, Button} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import Logo from '../../../assets/images/Logo.png';
import InfoIcon from '../../../assets/images/info_icon.svg';

const addTrip = () => {
    console.warn("Added trip")
}

const markerClicked = (data) => {
    Alert.alert(
        "The University of Florida",
        "Add to your Bucket List?",
        [
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        {
            cancelable: true,
        }
    );
}


function Map() {

    var state = {
        coordinates: [
            {name: "The University of Florida", latitude: 29.643946, longitude: -82.355659},
            {name: "Cade Muesuem", latitude: 29.643423, longitude: -82.324967},
        ]
    }

    return (
        <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
                latitude: 29.643946,
                longitude: -82.355659,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }}
        >
            <Marker coordinate={{latitude: 29.643946, longitude: -82.355659}}> 
                <Callout onPress={markerClicked}>
                    {/* <Image source={Logo} /> */}
                    <Text style={{color: 'black'}}>The University Of Florida</Text>
                </Callout>
            </Marker>
        </MapView>
        // {
        //     state.coordinates.map(marker => (
        //         <Marker
        //             key={marker.name}
        //             coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
        //         >
        //             <Callout onPress={markerClicked}>
        //                 {/* <Image source={Logo} /> */}
        //                 <Text style={{color: 'black'}}>{marker.name}</Text>
        //             </Callout>
        //         </Marker>
        //     ))
        // }
    );
}


const ExploreScreen = () => {
    const [filterdData, setfilterdData] = useState([]);
    const [masterData, setmasterData] = useState([]);
    const [search, setsearch] = useState('');
 
    useEffect(()=> {
        fetchPosts();
        return () => {

        }
    }, [])

    const searchTips = () => {
        console.warn("Search Tips")
    }

    const fetchPosts =() => {
        const apiURL = 'https://jsonplaceholder.typicode.com/posts';
        fetch(apiURL)
        .then((response) => response.json())
        .then((responseJson) => {
            setfilterdData(responseJson);
            setmasterData(responseJson);
        }).catch((error) => {
            console.error(error);
        })
    }

    const ItemView = ({item}) => {
        return (
            <Text style={styles.itemStyle}>
                {item.id}{'.'}{item.title.toUpperCase()}
            </Text>
        )
    }

    const ItemSeparatorView = () => {
        return (
            <View
                style={{height: 0.5, width: '100%', backgroundColor: '#c8c8c8'}}
            />
        )

    }

    const searchFilter = (text) => {
        if(text){
            const newData= masterData.filter((item) => {
              const itemData = item.title ? 
                                item.title.toUpperCase() 
                                : ''.toUpperCase();
                const textData= text.toUpperCase();
                return itemData.indexOf(textData) >-1;
            });
            setfilterdData(newData);
            setsearch(text);
        }else{
            setfilterdData(masterData);
            setsearch(text);
        }
    }


    return (
        // <ScrollView showsVerticalScrollIndicator={false}>
        <>
            <Map style={styles.container}></Map>
            <View style={[styles.container, {flexDirection: 'row'}]}>
                <ImageBackground
                    style={{height: 35, width: 35,}}
                    source={Logo}
                />
                <TextInput
                    style={[styles.textInputStyle, {height: '60%'}]}
                    value={search}
                    placeholder="Search"
                    underlineColorAndroid="transparent"
                    onChangeText={(text)=> searchFilter(text)}
                />
                <ImageBackground
                    style={{height: 20, width: 20}}
                    source={InfoIcon}
                    onPress={searchTips}
                />
                {/* <FlatList
                    data={filterdData}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={ItemSeparatorView}
                    renderItem={ItemView}
                /> */}
            </View>
        </>
        // </ScrollView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    itemStyle:{
        flex: 1,
    },
    textInputStyle: {
        flex: 1,
        height: "60%",
        width: "70%",
        borderWidth: 1,
        margin: 5,
        flexDirection: 'row',
        borderColor: '#009688',
        backgroundColor: "#FFF3E8",
    },
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        height: "10%",
        width: "100%",
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      map: {
        // ...StyleSheet.absoluteFillObject,
        flex: 1,
        height: "100%",
      },
});

export default ExploreScreen;
