import React, { Component } from "react";
import { StyleSheet,View, Button, Text } from "react-native";
import {CardView} from "react-native-cardview";

export default class ItemDetails extends Component {
  render() {
    const { navigation } = this.props;
    invoiceItems = navigation.getParam("data", "no inovice items received");
    return (
      <View style={styles.container}>
        <CardView cardElevation={2} cardMaxElevation={2} cornerRadius={5}>
          <Text style={{ fontSize: 5 }}>Id</Text>
          <Text>{invoiceItems[0]}</Text>
        </CardView>
        <Button
          title="go to Items Page"
          onPress={() => this.props.navigation.navigate("Items")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#40a9ff" },
  text: { margin: 6 },
  row: { flexDirection: "row", backgroundColor: "#FFF1C1" }
});
