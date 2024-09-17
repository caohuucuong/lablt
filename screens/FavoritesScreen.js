import React from 'react';
import { View, Text, FlatList } from 'react-native';

// Giả sử chúng ta có một mảng các món ăn yêu thích
const FAVORITE_MEALS = [
  { id: 'm1', title: 'Spaghetti', imageUrl: 'https://example.com/spaghetti.jpg' },
  { id: 'm2', title: 'Quick Salad', imageUrl: 'https://example.com/salad.jpg' },
];

function FavoriteMealItem({ title, imageUrl }) {
  return (
    <View style={{ margin: 10 }}>
      <Text>{title}</Text>
      <Image source={{ uri: imageUrl }} style={{ width: '100%', height: 150 }} />
    </View>
  );
}

export default function FavoritesScreen() {
  return (
    <View>
      <FlatList
        data={FAVORITE_MEALS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FavoriteMealItem title={item.title} imageUrl={item.imageUrl} />
        )}
      />
    </View>
  );
}
