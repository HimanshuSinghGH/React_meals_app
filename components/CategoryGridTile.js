import React from 'react' ;

import  {Text, View , TouchableOpacity, StyleSheet, TouchableNativeFeedback} from 'react-native' ;

const CategoryGridTile = props => {
    return(
    <View style={styles.gridItem}>
    <TouchableOpacity style={{flex:1}} onPress={props.onSelect}>
    <View style={{...styles.container,...{backgroundColor:props.color}}}>
        <Text>{props.title}</Text>
    </View>
    </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        margin:15,
        height:150, 
        borderRadius:10 ,
        overflow:'hidden',
        elevation:3,
      },
      container:{
        flex:1,
        borderRadius:10,
        elevation:3,
        padding:15,
        justifyContent:'flex-end',
        alignItems:'flex-end',
      }
}) ;

export default CategoryGridTile ;