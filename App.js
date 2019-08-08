import React from "react";
import HomePage from './screen/HomePage';
import ItemsTable from './screen/ItemsTable';
import { createAppContainer, createStackNavigator } from "react-navigation";



export default function App() {
  return (
      <Container />
  );
}

const AppStackNavigator = createStackNavigator({
  Home: HomePage,
  Items : ItemsTable

 
});

const Container = createAppContainer(AppStackNavigator);
