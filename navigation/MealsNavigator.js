import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMeal from '../screens/CategoryMeal';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors'

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

export default createAppContainer(MealsNavigator);