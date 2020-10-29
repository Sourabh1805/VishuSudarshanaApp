import React, {useState} from 'react';
import { Text, View,StyleSheet,Image,ScrollView,ImageBackground,TouchableOpacity, TextInput } from 'react-native';

import Inputs from '../components/Inputs';
import Buttonstyles from '../styles/Buttonstyles';
import InputsStyles from '../styles/InputsStyles';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = props => {
    
    const [textInputPhonenumber, setTextInputPhonenumber] = useState('');
    const [textInputPassword, setTextInputPassword] = useState('');

    const checkTextInput = () => {
      
        if (textInputPhonenumber.length==0) {
          alert('Please Enter Phonenumber');
          return;
        }
        //Check for the Email TextInput
        if (!textInputPassword.trim()) {
          alert('Please Enter Password');
          return;
        }
        props.navigation.navigate("HomeScreen")
      };

    return (
        
        <ImageBackground source={require('../assets/images/v2.png')}  style={styles.container}>
        <ScrollView >
            <View style={styles.container}>
                <Image 
                    source={require('../assets/images/vlogo.png')} 
                    resizeMode="center" 
                    style={styles.image} />
                <Text style={styles.textTitle}>Welcome back</Text>
                <Text style={styles.textBody}>Log in to your existant account</Text>

                <View style={[InputsStyles.container]}>
                <Input 
                    placeholder={'phonenumber'}
                    inputContainerStyle={InputsStyles.inputContainer}
                    inputStyle={InputsStyles.inputText}
                    leftIcon= {
                        <Icon 
                            name={'phone'}
                            size={22}
                        />
                    }
                    onChangeText={textInputPhonenumber=> setTextInputPhonenumber(textInputPhonenumber)}
                />
                 </View>

                 <View style={[InputsStyles.container]}>
                <Input 
                    placeholder={'password'}
                    inputContainerStyle={InputsStyles.inputContainer}
                    inputStyle={InputsStyles.inputText}
                    secureTextEntry={true}
                    leftIcon= {
                        <Icon 
                            name={'lock'}
                            size={22}
                        />
                    }
                    onChangeText={textInputPassword=> setTextInputPassword(textInputPassword)}
                />
                 </View>

                
              
                <View style={{width: '90%'}}>
                    <Text style={[styles.textBody], {alignSelf: 'flex-end'}}>Forgot Password?</Text>
                </View>
                
                <TouchableOpacity style={Buttonstyles.submitbutton} onPress={checkTextInput}>
                        <Text style={Buttonstyles.submitText}>Login</Text>
                </TouchableOpacity>

                <Text style={styles.textBody}>Or connect using</Text>
                
                <View style={{flexDirection: 'row', marginVertical: 5}}>
                    <Text style={styles.textBody}>Don't Have an account</Text>
                    <Text style={[styles.textBody, {color: '#FF1047'}]} onPress={() => props.navigation.navigate('SignUp')}> Sign Up</Text> 
                    <Text style={[styles.textBody, {color: '#FF1047'}]} onPress={() => props.navigation.navigate('HomeScreen')}> HomeScreen</Text>
                </View>
            </View>
        </ScrollView>  
        </ImageBackground>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 400,
        height: 200,
        marginVertical: 10
    },
    textTitle: {
        fontFamily: 'Foundation',
        fontSize: 40,
        marginVertical: 10,
    },
    textBody: {
        fontFamily: 'Foundation',
        fontSize: 16
    }
});

export default LoginScreen