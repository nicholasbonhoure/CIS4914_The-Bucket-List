import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import Logo from '../../../assets/images/Logo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native'

const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [email, setEmail] = useState('');

    const navigation = useNavigation();

    const onRegisterPressed = () => {
        navigation.navigate('ConfirmEmailScreen')
    }
    
    const onTermsPressed = () => {
        console.warn("Terms and conditions")
    }

    const onSignInPressed = () => {
        console.warn("HEllO")
        navigation.navigate('SignInScreen')
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Create An Account</Text>
                
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

                <CustomInput 
                    placeholder="Retype Your Password" 
                    value={passwordRepeat} 
                    setValue={setPasswordRepeat} 
                    secureTextEntry={true}
                />

                <CustomInput 
                    placeholder="Email" 
                    value={email} 
                    setValue={setEmail} 
                    secureTextEntry={true}
                />

                <CustomButton
                    text="Register" 
                    onPress={onRegisterPressed}
                    type= "PRIMARY"
                />

                <Text style={styles.text}>
                    When registering you are accepting our{' '}
                    <Text style={styles.link} onPress={onTermsPressed}>Terms and Conditions</Text>.
                </Text>

                <CustomButton
                    text="Back to Sign In"
                    onPres={onSignInPressed}
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

export default SignUpScreen;