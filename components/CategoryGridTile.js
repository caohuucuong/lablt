// components/CategoryGridTile.js
import React from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';

function CategoryGridTile({ title, imageUrl, onPress }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={styles.button}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    height: 200,
    elevation: 3,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: '100%',
    height: '70%',
    borderRadius: 10,
  },
  title: {
    marginTop: 10,
    fontWeight: 'bold',
  },
});
