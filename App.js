import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import Register from './register';
import Login from './login';
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
const onPressExample = () => {
  console.log('Press is Pressed');
  };
const Stack = createStackNavigator();

const HomeScreen = ({navigation}) => {

  const onRegister = () =>{
    navigation.navigate(Register);
  };
  const onLogin = () =>{
    navigation.navigate(Login);
  };

   return (
    <SafeAreaView style={styles.mainAsset}>
      <View style={styles.buttonContainer}>
        <IntroButton text="Register" onPress={onRegister}/>
        <IntroButton text="Login" onPress={onLogin}/>
        <PressText text='Login as Guest' style={styles.guestLogin} onPress={onPressExample}/>
    </View>
    <StatusBar style="auto" />
  </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
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
