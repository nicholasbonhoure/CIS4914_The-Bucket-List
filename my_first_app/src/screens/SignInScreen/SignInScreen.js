import React, {useState} from 'react';
import {
    View, 
    Text, 
    Image, 
    StyleSheet, 
    useWindowDimensions, 
    ScrollView,
    TextInput,
 } from 'react-native';
import Logo from '../../../assets/images/Logo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/core';
import {useForm, Controller} from 'react-hook-form';
import auth from '@react-native-firebase/auth';
import {authentication} from '../../../firebase/firebase-config';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const SignInScreen = () => {
    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const [isSignedIn, setIsSignedIn] = useState(false);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);


    const {
        control, 
        handleSubmit, 
        formState: {errors},
    } = useForm();

    const onSignInPressed = (data) => {
        auth().signInWithEmailAndPassword(data.username, data.password)
        .then((re)=>{
            setIsSignedIn(true);
        })
        .catch((re)=>{
            console.log(re);
        })
        console.log(data.password);
        isSignedIn ? navigation.navigate("HomeScreen") : console.log('incorrect log in')
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

                <Text style={{fontSize: 40, alignSelf: 'center', fontWeight: 'bold'}}>The Bucket List</Text>

                <Image 
                    source={Logo} // accredited too Adrien Coquet FR
                    style={[styles.logo, {height: height * 0.3}]} 
                    resizeMode="contain" 
                />

                <Text style={{fontSize: 24, alignSelf: 'center', fontWeight: 'bold'}}>Log In</Text>
                
                <CustomInput 
                    name="username"
                    placeholder="Username" 
                    value={email}
                    onChangeText={text=>setEmail(text)}
                    control={control}
                    rules={{required: 'Username*', minLength: {value: 3, message: 'Username must be longer than 3 characters'}, maxLength: {value: 30, message: 'Username must be shorter than 30 characters'}}}
                />

                <CustomInput 
                    name="password"
                    placeholder="Password" 
                    value={password}
                    onChangeText={text=>setPassword(text)}
                    secureTextEntry={true}
                    control={control}
                    rules={{required: 'Password*', minLength: {value: 8, message: 'Password must be atleast 8 characters'}}}
                />  

                <CustomButton
                    text="Sign In" 
                    onPress={handleSubmit(onSignInPressed)}
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
        backgroundColor: "#FFF3E8",
    },
    logo: {
        width: '50%',
        maxWidth: 300,
        maxHeight: 200,
    },
    
});

export default SignInScreen;