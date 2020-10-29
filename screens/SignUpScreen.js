import React from 'react';
import {View, StyleSheet, Text, ScrollView, Image,ImageBackground} from 'react-native';

import Inputs from '../components/Inputs';
import Submit from '../components/Submit';

const SignUpScreen = props => {
    return (
        <ImageBackground source={require('../assets/images/v2.png')}  style={styles.container}>
        <ScrollView >
            <View style={styles.container}>
                <Image 
                    source={require('../assets/images/vlogo.png')} 
                    resizeMode="center" 
                    style={styles.image} />
                
                <Text style={styles.textTitle}>Let's Get Started</Text>
                <Text style={styles.textBody}>Create an account to get all features</Text>
                <Inputs name="Full Name" icon="user" />
                <Inputs name="Email" icon="envelope" />
                <Inputs name="Phone" icon="phone" />
                <Inputs name="Password" icon="lock" pass={true} />
                <Inputs name="Confirm Password" icon="lock" pass={true} />
                <Submit color="#FF1047" title="CREATE" />
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.textBody}>Aiready have an account</Text>
                    <Text style={[styles.textBody, {color: '#FF1047'}]} onPress={() => props.navigation.navigate('Home')}> Login here</Text>

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
    },
    image: {
        width: 400,
        height: 250,
        marginVertical: 10,
    },
    textTitle: {
        fontSize: 40,
        fontFamily: 'Foundation',
        marginVertical: 5
    },
    textBody: {
        fontSize: 16,
        fontFamily: 'Foundation'
    }
});

export default SignUpScreen;