import React from "react";
import HomePage from './screen/HomePage';
import ItemsTable from './screen/ItemsTable';
//import ItemDetails from './screen/ItemDetails';
import { createAppContainer, createStackNavigator } from "react-navigation";

export default function App() {
  return (
    <React.Fragment>
      <Container />
    </React.Fragment>
  );
}

const AppStackNavigator = createStackNavigator({
  Home: HomePage,
  Items : ItemsTable,
  //Details : ItemDetails

 
});

const Container = createAppContainer(AppStackNavigator);
