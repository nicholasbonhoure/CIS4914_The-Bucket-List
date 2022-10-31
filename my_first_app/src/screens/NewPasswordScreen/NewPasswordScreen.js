import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import Logo from '../../../assets/images/Logo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/core';
import {useForm} from 'react-hook-form';

const NewPasswordScreen = () => {
    const {control, handleSubmit} = useForm();

    const navigation = useNavigation();

    const onSignInPressed = () => {
        navigation.navigate("SignInScreen")
    }

    const onSubmitPressed = (data) => {
        console.warn(data)
        navigation.navigate("HomeScreen")
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Reset Your Password</Text>
                
                <CustomInput 
                    name="code"
                    control={control}
                    placeholder="Code" 
                    rules={{
                        required: "Confirmation code is required"
                    }}
                />

                <CustomInput 
                    name="password"
                    control={control}
                    placeholder="Enter your new password" 
                    secureTextEntry
                    rules={{
                        required:  "Password*",
                        minLength: {
                            value: 8,
                            message: 'Your password must include atleast 8 characters'
                        }
                    }}
                />

                <CustomButton
                    text="Submit" 
                    onPress={handleSubmit(onSubmitPressed)}
                    type= "PRIMARY"
                />

                <CustomButton
                    text="Back to Sign In"
                    onPress={onSignInPressed}
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
        backgroundColor: "#FFF3E8",
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

export default NewPasswordScreen;