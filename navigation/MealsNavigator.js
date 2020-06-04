import React from 'react';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator } from 'react-navigation-tabs';
import {Ionicons} from '@expo/vector-icons';

import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMeal from '../screens/CategoryMeal';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';
import FavouriteScreen from '../screens/FavouriteScreen' ;

const MealsNavigator = createStackNavigator({
    Categories : CategoriesScreen,
    CategoryMeals : CategoryMeal,
    MealDetail : MealDetailScreen
}, {
    defaultNavigationOptions : {
        headerStyle : {
            backgroundColor: Colors.primaryColor
        },
        headerTintColor:'white',
    }
});

const MealsFavTabNavigator = createMaterialBottomTabNavigator(
    {
        Meals:{ screen:MealsNavigator, 
            navigationOptions:{
                tabBarIcon: (tabInfo) =>{
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/> ;
                }}
        },
        Favourites:{ screen:FavouriteScreen, 
            navigationOptions:{
                tabBarIcon: (tabInfo) =>{
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/> ;
                }}
        },
    },
    {
     activeColor:Colors.accentColor,
     barStyle:{
        backgroundColor:Colors.primaryColor,
    }},
);

export default createAppContainer(MealsFavTabNavigator);