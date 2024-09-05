import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ForgotPass from './forgotPass';
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import { initializeApp } from 'firebase/app';

//Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAOHGMhiL6Taeroj7lJuPPWonWMZBju1kc",
  authDomain: "muscle-control-gym.firebaseapp.com",
  projectId: "muscle-control-gym",
  storageBucket: "muscle-control-gym.appspot.com",
  messagingSenderId: "722584037611",
  appId: "1:722584037611:web:bf011850a02b506a62b6ae",
  measurementId: "G-6287LCMKWQ",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const confirmUser = async (Email, Password)  => {
  const Query = query(collection(db, "usersInfo"), where( "Email" , "==", Email), where ("Password", "==", Password));
  const process = await getDocs(Query);
  return process;
  };


//Main Process
const Login = ({navigation}) => {
    const [Email, setEmail] = React.useState('');
    const [Password, setPassword] = React.useState('');

    const validateEmail = (email) => {
        if (!email.includes('@')) {
            Alert.alert('Invalid email', 'Properly type your Email');
          return false;
        }
        return true;
      };

    const onSubmit = async () => {
        if (validateEmail(Email)) {
        console.log('Email', Email);
        console.log('Password', Password);
        try {
          const proccessUser = await confirmUser(Email, Password); 
          if (!proccessUser.empty) {
            proccessUser.forEach((doc) => {
              console.log(doc.id, " => ", doc.data());
              Alert.alert( 'Email successfully', 'Email :' + doc.data().Email + 'Password :' + doc.data().Password);
            });
          } else {
            console.log("No matching user found.");
            Alert.alert( 'Email Failed', 'Wrong Email or Password');
          }
        } catch (error) {
          console.error("Error querying Firestore:", error);
        }
      }
    };

    const testing = () => {
      navigation.navigate(ForgotPass);
    };

  return (
    <SafeAreaView style={styles.mainAsset}>
        <View style={styles.inputContainer}>
            <TextInput style={styles.input} onChangeText={setEmail} value={Email} placeholder='Email' placeholderTextColor='white' keyboardType='email-address'/>
            <TextInput style={styles.input} onChangeText={setPassword} value={Password} placeholder='Password' placeholderTextColor='white' secureTextEntry ={true}/>
            <CustomButton text='Login' onPress={onSubmit}/>
            <PressText text='Forgot Password' style={styles.forgotPasswod} onPress={testing}/>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    mainAsset: {
        backgroundColor: '#0b2442',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
      },
    inputContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '50%'
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
    forgotPasswod: {
        fontSize: 9,
        color: 'white',
        marginTop: 2,
        textDecorationLine: 'underline'
        },
    customButton:{
        backgroundColor: '#0b2442',
        borderColor: '#1599de',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        width: '30%',
        borderRadius: 10,
        borderWidth: 1,
        padding: 1,
        margin: 5
    },
    buttonText:{
        color: 'white',
        fontSize: 15
    }
});
//Assets
const CustomButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.customButton} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
    );
  };

const PressText = ({text, style, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} >
      <Text style={style}>{text}</Text>
      </TouchableOpacity>
  );
};

export default Login;