import React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';

import { CATEGORIES } from '../data/dummy-data'

const CategoryMeals = props => {
    const catId = props.navigation.getParam('categoryId') ;

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId) ;
  return (
    <View style={styles.container}>
      <Text>Categoriy Meals</Text>
      <Text>{selectedCategory.title}</Text>
      <Button title='Go To Details' onPress={() => {
        props.navigation.navigate({routeName:'MealDetail'})
      }}/>
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
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CategoryMeals ;