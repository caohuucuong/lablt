// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import các màn hình
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen name="Categories" component={CategoriesScreen} options={{ title: 'Danh mục' }} />
      <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} options={{ title: 'Các món ăn' }} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} options={{ title: 'Chi tiết món ăn' }} />
    </Stack.Navigator>
  );
}

function TabsNavigator() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Danh mục" component={StackNavigator} />
      <Tabs.Screen name="Yêu thích" component={FavoritesScreen} />
      <Tabs.Screen name="Cài đặt" component={SettingsScreen} />
    </Tabs.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Trang chủ" component={TabsNavigator} />
      <Drawer.Screen name="Yêu thích" component={FavoritesScreen} />
      <Drawer.Screen name="Cài đặt" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
