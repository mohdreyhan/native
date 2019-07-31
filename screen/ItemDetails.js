import React, { Component } from "react";
import { StyleSheet, View, Button, Text } from "react-native";

export default class ItemDetails extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Item Details</Text>
        <Button
          title="go to Home Page"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#40a9ff"},
  text: { margin: 6 },
  row: { flexDirection: "row", backgroundColor: "#FFF1C1" },
});
