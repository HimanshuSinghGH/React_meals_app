import React from 'react';
import { StyleSheet, Text, View , Button, FlatList} from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data' ;
import MealItem from "../components/MealItem" ;

const CategoryMeals = props => {
    const catId = props.navigation.getParam('categoryId') ;
    
    const dispalyedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >=0 ) ;
    
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId) ;

    const renderMealItem = itemdata => {
      return (<MealItem title={itemdata.item.title} duration={itemdata.item.duration} complexity={itemdata.item.complexity} affordability={itemdata.item.affordability} image={itemdata.item.imageUrl} onSelectMeal={() => {props.navigation.navigate({routeName:'MealDetail' ,
    params :{mealId: itemdata.item.id}})}}/>)
    }
  
  
    return (
    <View style={styles.container}>
      <FlatList data={dispalyedMeals} renderItem={renderMealItem} style={{width:"100%"}} />
    </View>
  );
};

CategoryMeals.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId') ;

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

  return {
    headerTitle : selectedCategory.title,
  } ; 
} ;

const styles = StyleSheet.create({
  container: {
    margin:10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CategoryMeals ;