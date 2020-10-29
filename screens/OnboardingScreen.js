import React, { Component } from 'react';
import { View, Text,Image, StyleSheet,TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
const Dots = ({selected}) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View 
            style={{
                width:6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
}

const Skip = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Next</Text>
    </TouchableOpacity>
);

const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Done</Text>
    </TouchableOpacity>
);
const OnboardingScreen = ({navigation}) => {
 


    return (
        <Onboarding
        bottomBarColor = "#F7CA18"
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => navigation.replace("login")}
        onDone={() => navigation.replace("login")}
        pages={[
          {
            backgroundColor: '#F7CA18',
            image: <Image source={require('../assets/images/vv.png')} resizeMode="cover"
                style={styles.sliderImage}/>,
            title: 'Onboarding',
            
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          
          {
            backgroundColor: '#F7CA18',
            image: <Image source={require('../assets/images/v3.png')} resizeMode="cover"
                style={styles.sliderImage}/>,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#F7CA18',
            image: <Image source={require('../assets/images/v4.png')} resizeMode="cover"
                style={styles.sliderImage}/>,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },

        ]}
      />
    );
}

export default OnboardingScreen;
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
    sliderImage: {
      height: '110%',
      width: '100%',
      alignSelf: 'center',
      borderRadius: 8,
    },
  });