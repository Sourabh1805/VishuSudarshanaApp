import React from 'react';
import { Text, View,StyleSheet,ScrollView,Image,ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';
import CardIcon from '../components/CardIcon';

const HomeScreen = ({navigation}) => {
    
  
    return (
        <ImageBackground source={require('../assets/images/v2.png')}  style={styles.container}>
      <ScrollView style={styles.container}>
       
        <View style={styles.sliderContainer}>
          <Swiper
            autoplay
            horizontal={false}
            height={200}
            activeDotColor="#FF1047">
            <View style={styles.slide}>
              <Image
                source={require('../assets/banners/b1.jpg')}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={require('../assets/banners/b2.jpg')}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            
          </Swiper>
        </View>

      
        <CardIcon/>
        </ScrollView>
        
        
        </ImageBackground>
        );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    sliderContainer: {
      height: 200,
      width: '90%',
      marginTop: 10,
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: 8,
    },
  
    wrapper: {},
  
    slide: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'transparent',
      borderRadius: 8,
    },
    sliderImage: {
      height: '100%',
      width: '100%',
      alignSelf: 'center',
      borderRadius: 8,
    },
});