import React from 'react';
import {View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const ConfirmEmailScreen = () => {
    const {control, handleSubmit} = useForm();

    const navigation = useNavigation();

    const onBackPressed = () => {
        console.warn("TODO")
        navigation.navigate("SignInScreen")
    }

    const onConfirmPressed = (data) => {
        console.warn(data);
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
                    name="code"
                    control={control}
                    placeholder="Enter your confirmation code" 
                    rules={{
                        required: 'Must input confirmation code'
                    }} 
                />

                <CustomButton
                    text="Confirm" 
                    onPress={handleSubmit(onConfirmPressed)}
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

export default ConfirmEmailScreen;