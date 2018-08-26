import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeList from './HomeList';
import HomeProducts from './HomeProducts';

const Navedador = StackNavigator({
    HomeList: {
        screen: HomeList
    },
    HomeProducts: {
        screen: HomeProducts
    }
});

export default Navedador;