import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import MapScreen from '../MapScreen/MapScreen';
import ExploreScreen from '../ExploreScreen';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Image } from 'react-native';
import { Text } from 'react-native';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import SettingsScreen from '../SettingsScreen/SettingsScreen';
const Tab = createBottomTabNavigator();

const HomeNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 15,
                    height: 90,
                    ...styles.shadow
                }
            }}
        >
            <Tab.Screen name="ExploreScreen" component={ExploreScreen} options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                            <Image
                                source={require('../../../assets/images/explore.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#4765A9' : '#748c94'
                                }}
                            />
                            <Text 
                                style={{color: focused ? '#4765A9' : '#748c94', fontSize: 12}}>
                                Explore
                            </Text>
                        </View>
                    ),
                }} />
            <Tab.Screen name="MapScreen" component={MapScreen} options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                            <Image
                                source={require('../../../assets/images/MyTrip.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#4765A9' : '#748c94'
                                }}
                            />
                            <Text 
                                style={{color: focused ? '#4765A9' : '#748c94', fontSize: 12}}>
                                My Trip
                            </Text>
                        </View>
                    ),
                    }}/>
            <Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                            <Image
                                source={require('../../../assets/images/profile.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#4765A9' : '#748c94'
                                }}
                            />
                            <Text 
                                style={{color: focused ? '#4765A9' : '#748c94', fontSize: 12}}>
                                Profile
                            </Text>
                        </View>
                    ),
                    }}/>
            <Tab.Screen name="SettingsScreen" component={SettingsScreen} options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                            <Image
                                source={require('../../../assets/images/settings.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#4765A9' : '#748c94'
                                }}
                            />
                            <Text 
                                style={{color: focused ? '#4765A9' : '#748c94', fontSize: 12}}>
                                Settings
                            </Text>
                        </View>
                    ),
                    }}/>
        </Tab.Navigator>
    );
}

const HomeScreen = () => {
    return (
        <HomeNavigation></HomeNavigation>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
});

export default HomeScreen;