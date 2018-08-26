
import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Home from './src/Home';
import Contato from './src/Contato';
import Horarios from './src/Horarios';
import Sobre from './src/Sobre';

const Navegador = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Inicio',
      tabBarIcon: ({ focused, tintColor }) => {
        if (focused) {
          return (
            <Image source={require('./assets/images/home_azul.png')} style={{ width: 26, height: 26 }} />
          )
        } else {
          return (
            <Image source={require('./assets/images/home_preto.png')} style={{ width: 26, height: 26 }} />
          )
        }
      }
    }
  },
  Contato: { screen: Contato },
  Horarios: { screen: Horarios },
  Sobre: { screen: Sobre }
}, {
    tabBarOptions: {
      showIcon: true
    }
    //tabBarPosition: 'top'
  });

export default Navegador;

