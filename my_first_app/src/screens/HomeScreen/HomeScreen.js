import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import MapScreen from '../MapScreen/MapScreen';
import ExploreScreen from '../ExploreScreen';

const Tab = createBottomTabNavigator();

const HomeNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="ExploreScreen" component={ExploreScreen} options={{headerShown: false}} />
            <Tab.Screen name="MapScreen" component={MapScreen} options={{headerShown: false}}/>
        </Tab.Navigator>
    );
}

const HomeScreen = () => {
    return (
        <HomeNavigation></HomeNavigation>
    );
}

export default HomeScreen;