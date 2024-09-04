import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import Register from './register';
import Login from './login';
import ForgotPass from './forgotPass';
import { SafeAreaView } from 'react-native-safe-area-context';


// Assets
const IntroButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.introButton} onPress={onPress}>
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

const Stack = createStackNavigator();

const StartScreen = ({navigation}) => {

  const onRegister = () =>{
    navigation.navigate(Register, onForgotPass);
  };
  const onLogin = () =>{
    navigation.navigate(Login);
  };
  const onForgotPass = () =>{
    navigation.navigate(ForgotPass);
  };

   return (
    <SafeAreaView style={styles.mainAsset}>
      <View style={styles.buttonContainer}>
        <IntroButton text="Register" onPress={onRegister}/>
        <IntroButton text="Login" onPress={onLogin}/>
        <PressText text='Login as Guest' style={styles.guestLogin} onPress={onRegister}/>
    </View>
    <StatusBar style="auto" />
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainAsset: {
    backgroundColor: '#0b2442',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  introButton: {
    backgroundColor: '#0b2442',
    borderColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 2,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    width: '25%'
},
  buttonText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center'
},
  guestLogin: {
    fontSize: 9,
    color: 'white',
    textDecorationLine: 'underline'
  },
});

export default StartScreen;