// components/MealItem.js
import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

function MealItem({ title, imageUrl, onPress }) {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        onPress={onPress}
        style={styles.button}
      >
        <View style={styles.innerContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
