import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import Logo from '../../../assets/images/Logo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native'

const ConfirmEmailScreen = () => {
    const [code, setCode] = useState('');

    const navigation = useNavigation();

    const onBackPressed = () => {
        console.warn("TODO")
        navigation.navigate("SignInScreen")
    }

    const onConfirmPressed = () => {
        navigation.navigate("HomeScreen")
    }

    const onResendPressed = () => {
        console.warn("Resent Code")
    }


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Confirm Your Email</Text>
                
                <CustomInput 
                    placeholder="Enter your confirmation code" 
                    value={code} 
                    setValue={setCode} 
                />

                <CustomButton
                    text="Confirm" 
                    onPress={onConfirmPressed}
                    type= "PRIMARY"
                />

                <CustomButton
                    text="Resend Code"
                    onPress={onResendPressed}
                    type="SECONDARY"
                />

                <CustomButton
                    text="Back to Sign In"
                    onPress={onBackPressed}
                    type="SECONDARY"
                />

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#051C60",
        margin: 10,
    },
    text: {
        width: "80%",
        color: "gray",
        marginVertical: 10,
    },
    link: {
        color: "#FE994A",
    },
});

export default ConfirmEmailScreen;