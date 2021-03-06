import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile'

const CategoriesScreen = props => {

    const renderGridItem = (itemData) => {
        return <CategoryGridTile 
            title={itemData.item.title}
            color={itemData.item.color} 
            onSelect= {() => {
            props.navigation.navigate({ routeName:'CategoryMeals' , params : {
                categoryId : itemData.item.id
            }})}}/> 
    }

    return (
        <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
    );
};

CategoriesScreen.navigationOptions = {
    headerTitle :'Meal Categories',
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default CategoriesScreen;
