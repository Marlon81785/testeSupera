import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, Image, TextInput } from 'react-native';

import { styles } from './Styles/HomeStyle';


export default class Home extends Component {
    constructor( { navigation }){
        super();
        this.state = {
            navigation: navigation,

        }
        
         
    }


    render(){
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View>
                        <TextInput style={styles.headerInput} placeholder="Buscar" />
                    </View>
                    <View style={styles.headerIcon}>
                        <TouchableOpacity>
                            <Image 
                                style={{width: 27, height: 27}}
                                source={require('../assets/carrinho-de-compras.png')}
                            />
                        </TouchableOpacity>
                    </View>
                  
                </View>





            </View>
        );
    }
    
}