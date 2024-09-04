import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { SafeAreaView } from 'react-native-safe-area-context';

const SubmitButton = ({ text, onPress }) => {
    return (
      <TouchableOpacity style={styles.subButton} onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
      );
     };

const Register = () => {
    const [inputs, setInputs] = React.useState({
        LastName: '',
        FirstName: '',
        Age: '',
        Members: '',
        ContactNumber: '',
        Height: '',
        Weight: '',
        BMI: '',
        Email: '',
        Password: '',
    });
    const ContatNumtoString = String(inputs.ContactNumber);

    const handleChange = (name, value) => {
        setInputs(prevInputs => ({
          ...prevInputs,
          [name]: value,
        }));
      };
    const validateInput = (inputs) => {
        if (Object.values(inputs).some(value => value === null || value === '')){
            Alert.alert('there is null', 'check');
            return false;
        } else if (ContatNumtoString.length !== 11){
            Alert.alert('Contact number error', 'check');
        } else if (inputs.BMI > 150 || inputs.BMI < 10){
            Alert.alert('BMI error', 'check');
        } else if (!inputs.Email.includes('@')) {
            Alert.alert('Invalid email', 'Properly type your Email');
        }
        else{Alert.alert('there is no null', 'check'); return true;}
    };
    const onSubmit = () => {
        if (validateInput(inputs))
        console.log(inputs);
    }


  return (
    <SafeAreaView style={styles.mainAsset}>
        <View style={styles.logoContainer}>
            <Image source={require('./assets/sampleLogo.png')} style={styles.logo}/>
        </View>
        <ScrollView style={styles.scroll}>
            <Text style={styles.labelText}>Last Name</Text>
            <TextInput style={styles.input} onChangeText={text => handleChange('LastName', text)} value={inputs.LastName}/>
            <Text style={styles.labelText}>First Name</Text>
            <TextInput style={styles.input} onChangeText={text => handleChange('FirstName', text)} value={inputs.FirstName}/>
            <View style={styles.twoInput}>
                <View style={styles.labelAgeMem}>
                    <Text style={styles.textAgeMem}>Age</Text> 
                    <Text style={styles.textAgeMem}>Membership</Text>
                </View>
                <View style={styles.doubleInputs}>
                    <TextInput style={styles.inputAge} onChangeText={text => handleChange('Age', text)} value={inputs.Age} keyboardType='numeric'  maxLength={2} textAlign='center'/>
                    <TextInput style={styles.inputMem} onChangeText={text => handleChange('Members', text)} value={inputs.Members}/>
                </View>
            </View>
            <Text style={styles.labelText}>Contact Number</Text>
            <TextInput style={styles.input} onChangeText={text => handleChange('ContactNumber', text)} value={inputs.ContactNumber} keyboardType='numeric' maxLength={11}/>
            <View style={styles.twoInput}>
                <View style={styles.labelHeightWeight}>
                    <Text style={styles.labelText}>Height(CM)</Text> 
                    <Text style={styles.labelText}>Weight(KG)</Text>
                </View>
                <View style={styles.doubleInputs}>
                    <TextInput style={styles.inputHeightWeight} onChangeText={text => handleChange('Height', text)} value={inputs.Height}  keyboardType='numeric' maxLength={4} textAlign='center'/>
                    <TextInput style={styles.inputHeightWeight} onChangeText={text => handleChange('Weight', text)} value={inputs.Weight}  keyboardType='numeric' maxLength={4} textAlign='center'/>
                </View>
            </View>
            <Text style={styles.labelText}>BMI (Optional)</Text>
            <TextInput style={styles.inputHeightWeight} onChangeText={text => handleChange('BMI', text)} value={inputs.BMI}  keyboardType='numeric' maxLength={3} textAlign='center'/>
            <Text style={styles.labelText}>Email</Text>
            <TextInput style={styles.input} onChangeText={text => handleChange('Email', text)} value={inputs.Email}/>
            <Text style={styles.labelText}>Password</Text>
            <TextInput style={styles.input} onChangeText={text => handleChange('Password', text)} value={inputs.Password} secureTextEntry ={true}/>
            <View style={styles.buttonContainer}>
            <SubmitButton text='Register' onPress={onSubmit}/>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    mainAsset: {
        flex: 1,
        backgroundColor: '#0b2442',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
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
    scroll: {
        height: '80%',
        width: '100%',
    },
    input: {
        borderColor: 'white',
        height: 30,
        width: '90%',
        borderRadius: 15,
        borderWidth: 1,
        marginHorizontal: 10,
        marginVertical: 5,
        paddingLeft: 15,
        color: 'white'
    },
    twoInput:{
        justifyContent: 'space-between'
    },
    doubleInputs:{
        flexDirection: 'row',
    },
    labelText:{
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 5,
    },
    labelAgeMem:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 30,
        marginRight: 110,
    },
    textAgeMem:{
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },
    inputAge:{
        borderColor: 'white',
        height: 30,
        width: '20%',
        borderRadius: 15,
        borderWidth: 1,
        marginHorizontal: 10,
        marginVertical: 5,
        color: 'white'
    },
    inputMem:{
        borderColor: 'white',
        height: 30,
        width: '65%',
        borderRadius: 15,
        borderWidth: 1,
        marginHorizontal: 10,
        marginVertical: 5,
        paddingLeft: 15,
        color: 'white'
    },
    inputHeightWeight:{
        borderColor: 'white',
        height: 30,
        width: '42%',
        borderRadius: 15,
        borderWidth: 1,
        marginHorizontal: 10,
        marginVertical: 5,
        color: 'white'
    },
    labelHeightWeight:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 25,
        marginRight: 70,
    },
    buttonContainer:{
        width: '100%',
        alignItems: 'center',
        marginVertical: 10,
        justifyContent: 'center',
    },
    subButton: {
    backgroundColor: '#0b2442',
    borderColor: '#16a4ed',
    borderRadius: 10,
    borderWidth: 2,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    width: '25%'
    },
    buttonText:{
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default Register;