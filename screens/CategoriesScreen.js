import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = props => {

    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity onPress={() => {
                props.navigation.navigate({ routeName:'CategoryMeals' , params : {
                    categoryId : itemData.item.id
                }})}
            }
            style={styles.gridItem}>
            <View >
                <Text>{itemData.item.title}</Text>
            </View>
            </TouchableOpacity>
        )}

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
    gridItem:{
      flex:1,
      margin:15,
      height:150,  
    },
});

export default CategoriesScreen;
