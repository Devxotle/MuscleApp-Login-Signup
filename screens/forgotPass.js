import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Button,Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getAuth, sendPasswordResetEmail } from '@firebase/auth';
import { getStorage, ref, } from "firebase/firestore";
import { initializeApp } from 'firebase/app';

const ForgotPass =() => {
    const [newPass, setnewPass] = React.useState('');
    const [email, setemail] = React.useState('');

    const [emailPage, setemailPage] = React.useState(true);
    const [digitPage, setdigitPage] = React.useState(false);
    const [passPage, setpassPage] = React.useState(false);

    const onDigitPage = () => {
        setdigitPage(true);
        setemailPage(false);
    }
    const onPassPage = () => {
        setpassPage(true);
        setdigitPage(false);
    }

    const onSubmit = () => {
        if (validateEmail(Email)) {
        console.log('Email', Email);
        console.log('Password', Password);}
    };

    const exampleResult = () => {
        console.log('Button Working');
    };

    return (
        <SafeAreaView>
            {emailPage && <View style={styles.mainAsset}>
                <View style={styles.logoContainer}>
                    <Image source={require('../assets/sampleLogo.png')} style={styles.logo}/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.labelText}>Email</Text>
                    <TextInput style={styles.input} />
                    <CustomButton text='Next' onPress={onDigitPage}/>
                </View>
            </View> }
            { digitPage && <View style={styles.mainAsset}>
                    <CustomButton text='Confirm' onPress={onPassPage}/>
                </View>}
            { passPage && <View style={styles.mainAsset}>
            <View style={styles.logoContainer}>
                    <Image source={require('../assets/sampleLogo.png')} style={styles.logo}/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.labelText}>New Password</Text>
                    <TextInput style={styles.input} />
                    <CustomButton text='Submit' onPress={exampleResult}/>
                </View>
            </View> }
        </SafeAreaView>
    );
 };


const styles = StyleSheet.create({
    mainAsset: {
        backgroundColor: '#0b2442',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        paddingBottom: 100,
      },
    input: {
        borderColor: 'white',
        height: 40,
        width: '80%', 
        borderRadius: 10,
        borderWidth: 1,
        margin: 7,
        padding: 10,
        color: 'white'
        },
    inputContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '30%'

    },
    customButton:{
        backgroundColor: '#0b2442',
        borderColor: '#1599de',
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        borderRadius: 10,
        borderWidth: 2,
        margin: 5
    },
    logoContainer:{
        width: '10%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        width: 250,
        height: 250,
        resizeMode: 'contain'
    },
    labelText:{
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },
    buttonText:{
        color: 'white',
        fontSize: 15
    },
});

//FireBase
const firebaseConfig = {
    apiKey: "AIzaSyAOHGMhiL6Taeroj7lJuPPWonWMZBju1kc",
    authDomain: "muscle-control-gym.firebaseapp.com",
    projectId: "muscle-control-gym",
    storageBucket: "muscle-control-gym.appspot.com",
    messagingSenderId: "722584037611",
    appId: "1:722584037611:web:bf011850a02b506a62b6ae",
    measurementId: "G-6287LCMKWQ"
  };
  
const app = initializeApp(firebaseConfig);

//Other Assets
const CustomButton = ({ text, onPress }) => {
    return (
      <TouchableOpacity style={styles.customButton} onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
      );
    };

export default ForgotPass;