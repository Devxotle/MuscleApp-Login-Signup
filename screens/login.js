import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ForgotPass from './forgotPass';


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

    const onSubmit = () => {
        if (validateEmail(Email)) {
        console.log('Email', Email);
        console.log('Password', Password);}
    };

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

export default Login;