import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { styles } from './Styles/HomeStyle';

export default class Home extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return (
            <View style={styles.container}>
              <Text>Home</Text>
            </View>
        );
    }
    
}