import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import Logo from '../../../assets/images/Logo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPressed = () => {
        //TODO: validate the user

        navigation.navigate("HomeScreen");
    }

    const onForgotPasswordPressed = () => {
        navigation.navigate("ForgotPasswordScreen")
    }

    const onSignInFacebook = () => {
        console.warn("onSignInFacebook")
        
    }

    const onSignInGoogle = () => {
        console.warn("onSignInGoogle")
        
    }

    const onSignInGatorLink = () => {
        console.warn("onSignInGatorLink")
    }

    const onSignedUpPressed = () => {
        navigation.navigate("SignUpScreen")
    }

    const onContinueAsGuest = () => {
        navigation.navigate("HomeScreen")
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image 
                    source={Logo} 
                    style={[styles.logo, {height: height * 0.3}]} 
                    resizeMode="contain" 
                />
                
                <CustomInput 
                    placeholder="Username" 
                    value={username} 
                    setValue={setUsername} 
                />

                <CustomInput 
                    placeholder="Password" 
                    value={password} 
                    setValue={setPassword} 
                    secureTextEntry={true}
                />

                <CustomButton
                    text="Sign In" onPress={onSignInPressed}
                    type="PRIMARY"
                />

                <CustomButton
                    text="Forgot password?" 
                    onPress={onForgotPasswordPressed}
                    type="TERTIARY"
                />

                <CustomButton
                    text= "Sign In with GatorLink"
                    onPress={onSignInGatorLink}
                    bgColor= "#E7EAF4"
                    fgColor="#FA4616"
                /> 

                <CustomButton
                    text="Sign In with Facebook" 
                    onPress={onSignInFacebook}
                    bgColor="#E7EAF4"
                    fgColor="#4765A9"
                />

                <CustomButton
                    text="Sign In with Google" 
                    onPress={onSignInGoogle}
                    bgColor="#FAE9EA"
                    fgColor="#DD4D44"
                />

                <CustomButton
                    text="Don't have an account? Register Here" 
                    onPress={onSignedUpPressed}
                    type="TERTIARY"
                />

                <CustomButton
                    text="Continue as guest ->" 
                    onPress={onContinueAsGuest}
                    type="TERTIARY"
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
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
});

export default SignInScreen;