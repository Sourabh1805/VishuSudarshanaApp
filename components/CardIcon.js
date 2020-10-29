import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements'

export default class CardIcon extends Component {
  

  render() {
    return (
        <Card containerStyle={styles.cardstyle}>
        
            <View style={styles.Container}>
                <TouchableOpacity
                    style={styles.btn} 
                        >
                        <View style={styles.cardicon}>
                        <Icon 
                                    name={'calendar' }
                                    size={35}
                                    color= '#FF1047'
                        />
                        </View>
                        <Text style={styles.BtnTxt}>Calender</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn} 
                        >
                        <View style={styles.cardicon}>
                        <FontAwesome5  
                                    name={'eye'}
                                    size={35}
                                    color= '#FF1047'
                        />
                        </View>
                        <Text style={styles.BtnTxt}>Rashi</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={styles.btn} 
                        >
                        <View style={styles.cardicon}>
                        <FontAwesome5  
                                    name={'praying-hands'}
                                    size={35}
                                    color= '#FF1047'
                        />
                        </View>
                        <Text style={styles.BtnTxt}>Pooja</Text>
                </TouchableOpacity>
            </View>
        </Card>
    );
  }
};

const styles= StyleSheet.create({
    Container:{
        flexDirection: "row",
        width:'90%',
        alignSelf: 'center',
        marginTop: 25,
        marginBottom:10,
    },
    btn:{
        flex:1,
        width:'20%',
        marginHorizontal:0,
        alignSelf: 'center',
    },
    cardicon:{
        borderWidth:0,
        alignItems:'center',
        justifyContent:'center',
        alignSelf: 'center',
        width:70,
        height:70,
        backgroundColor:'#F7CA18',
        borderRadius:50,
        
    },
    BtnTxt:{
        alignSelf: 'center',
        marginTop: 5,
        color:'#F7CA18',
        fontSize:20,
    },
    cardstyle: {
        backgroundColor:'#FF1047',
        borderRadius: 25,
        borderWidth:0,
    },
    cardheading:{
        color: '#2B2C85',
        fontSize: 5,
        fontWeight: "bold"
    },
    imagestyle:{
        width: 200,
        height: 200,
    }
})