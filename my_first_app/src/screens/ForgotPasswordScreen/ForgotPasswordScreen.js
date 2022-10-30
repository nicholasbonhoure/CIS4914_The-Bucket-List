import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import Logo from '../../../assets/images/Logo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native'

const ForgotPasswordScreen = () => {
    const [username, setUsername] = useState('');

    const navigation = useNavigation();

    const onSignInPressed = () => {
        navigation.navigate("SignInScreen")
    }

    const onSendPressed = () => {
        navigation.navigate("NewPasswordScreen")
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Reset Your Password</Text>
                
                <CustomInput 
                    placeholder="Username" 
                    value={username} 
                    setValue={setUsername} 
                />

                <CustomButton
                    text="Send" 
                    onPress={onSendPressed}
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

export default ForgotPasswordScreen;