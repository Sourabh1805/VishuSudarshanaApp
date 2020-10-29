import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';

class Inputs extends Component {
    state = {isFocused: false};

    onFocusChange = () => {
        if(this.isFocused==false)
        {
            this.setState({isFocused: false})
        }
        else{
        this.setState({isFocused: true})
        }
    }

    render() {
        return(
            <View style={[styles.container, {borderColor: this.state.isFocused ? '#2B2C85': '#000000'}]}>
                <Input 
                    placeholder={this.props.name}
                    onFocus={this.onFocusChange}
                    inputContainerStyle={styles.inputContainer}
                    inputStyle={styles.inputText}
                    secureTextEntry={this.props.pass}
                    leftIcon= {
                        <Icon 
                            name={this.props.icon}
                            size={22}
                            color={this.state.isFocused ? '#2B2C85' : '#000000'}
                        />
                    }
                />
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 50,
        borderRadius: 20,
        marginVertical: 10,
        borderWidth: 3.5
    },
    inputContainer: {
        borderBottomWidth: 0
    },
    inputText: {
        color: '#2B2C85',
        fontWeight: 'bold',
        marginLeft: 5
    }
});

export default Inputs;