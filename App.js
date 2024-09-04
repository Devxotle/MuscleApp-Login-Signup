
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './screens/register';
import Login from './screens/login';
import ForgotPass from './screens/forgotPass';
import StartScreen from './screens/startPage';


const Stack = createStackNavigator();


  const onRegister = () =>{
    navigation.navigate(Register, onForgotPass);
  };
  const onLogin = () =>{
    navigation.navigate(Login);
  };
  const onForgotPass = () =>{
    navigation.navigate(ForgotPass);
  };


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={StartScreen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPass" component={ForgotPass} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
