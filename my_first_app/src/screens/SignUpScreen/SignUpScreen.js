import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import Logo from '../../../assets/images/Logo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import auth from '@react-native-firebase/auth';
import {authentication} from '../../../firebase/firebase-config';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const EMAIL_REGEX= /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const SignUpScreen = () => {
    const{control, handleSubmit, watch} = useForm();
    const pwd = watch('password');

    const [isSignedIn, setIsSignedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState(null);
    const [email, setEmail] = useState(null);

    const navigation = useNavigation();
    
    //const authentication = getAuth();

    const onRegisterPressed = (data) => {
        auth().createUserWithEmailAndPassword(data.email,data.password)
        .then((re)=> {
            console.log(re);
            setIsSignedIn(true)
        })
        .catch((re)=> {
            console.log(re);
        })
        console.log(data)
        navigation.navigate('ConfirmEmailScreen')
    }
    
    const onTermsPressed = () => {
        console.warn("Terms and conditions")
    }

    const onSignInPressed = () => {
        navigation.navigate('SignInScreen')
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Create An Account</Text>
                
                <CustomInput 
                    name="username" 
                    control={control}
                    placeholder="Username"
                    value={username}
                    onChangeText = { text => setUsername(text)}
                    rules={{required: 'Username*', minLength: {value: 3, message: 'Username must be longer than 3 characters'}, maxLength: {value: 30, message: 'Username must be shorter than 30 characters'}}}
                />

                <CustomInput 
                    name="password"
                    control={control}
                    placeholder="Password" 
                    value={password}
                    onChangeText = { text => setPassword(text)} 
                    secureTextEntry={true}
                    rules={{required: 'Password*', minLength: {value: 8, message: 'Password must be longer than 8 characters'}}}
                />

                <CustomInput
                    name="repeatPassword"
                    control={control} 
                    placeholder="Retype Your Password" 
                    secureTextEntry={true}
                    rules={{
                        validate: value => 
                            value == pwd || 'Password do not match',
                    }}
                />

                <CustomInput
                    name="email"
                    control={control} 
                    placeholder="Email" 
                    value={email}
                    onChangeText = { text => setEmail(text)} 
                    rules={{pattern: {EMAIL_REGEX, message: 'Invalid Email'}}}
                />

                <CustomButton
                    text="Register" 
                    onPress={handleSubmit(onRegisterPressed)}
                    type= "PRIMARY"
                />

                <Text style={styles.text}>
                    When registering you are accepting our{' '}
                    <Text style={styles.link} onPress={onTermsPressed}>Terms and Conditions</Text>.
                </Text>

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

export default SignUpScreen;