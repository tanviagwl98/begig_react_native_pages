import React from 'react';
import { View, TouchableOpacity, Platform } from 'react-native';
import {withNavigation} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

function BackButton(){
        return (
            <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}>
            <View style={{  padding:20,justifyContent: 'center', alignItems: 'center' }}>
            <Icon name="md-arrow-back" size={25} color="#000000" />    
            </View>
            </TouchableOpacity>
          );
      }
      
export default withNavigation(BackButton);