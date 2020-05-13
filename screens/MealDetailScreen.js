import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MealDetailScreen = props => {
  return (
    <View style={styles.container}>
      <Text>Meal Detail Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MealDetailScreen ;