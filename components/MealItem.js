import React from 'react' ;
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';

const MealItem = props => {
    return(
        <View style={styles.mealItem}>
        <TouchableOpacity onPress={props.onSelectMeal}>
            <View>
                <View style={{...styles.mealRow, ...styles.mealHeader}}>
                    <ImageBackground source={{uri:props.image}} style={styles.bgImage}>
                    <Text style={styles.title}>{props.title}</Text>
                    </ImageBackground>
                </View>
                <View style={{...styles.mealRow,...styles.mealDetail}}>
                    <Text>{props.duration}m</Text>
                    <Text>{props.complexity}</Text>
                    <Text>{props.affordability}</Text>
                </View>
            </View>
        </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    title:{
        fontSize:20,
        color:'white',
        backgroundColor: 'rgba(0,0,0,.6)' ,
        paddingVertical:5,
        paddingHorizontal:12,
        textAlign:'center'
    },
    mealItem:{
        height:200,
        width:"100%",
        backgroundColor:"rgba(0,0,0,.05)",
        borderRadius:10,
        overflow:'hidden',
        marginBottom:10,
    },
    mealRow: {
        flexDirection:"row",
        alignItems:"center",
    },
    mealHeader: {
        height:"85%",
    },
    mealDetail:{
        paddingHorizontal:10,
        justifyContent:'space-between',
        alignItems:"center",
        paddingTop:7,


    },
    bgImage: {
        width:"100%",
        height:"100%",
        justifyContent:'flex-end',
    },
}) ;

export default MealItem ;