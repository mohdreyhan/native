import React, { Component } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import { Container, Content, Card, CardItem } from "native-base";

export default class ItemDetails extends Component {
  render() {
    const { navigation } = this.props;
    invoiceItems = navigation.getParam("data", "no inovice items received");
    return (
      <View style={styles.container}>
        <Container>
          <Content>
            <View style = {{flex: 1, flexDirection: 'row'}}>
            <Card style = {{width : 160, height : 100 }}>
              <CardItem style = {{textAlign : "center" ,justifyContent : "center", alignItems : "center"}}>
                <Text style = {{fontSize : 20}}>
                  <Text>ID</Text>{'\n'}{'\n'}
                <Text>{invoiceItems[0]}</Text>
                </Text>
              </CardItem >
            </Card>
            <Card style = {{width : 160,height : 100 }}>
              <CardItem style = {{textAlign : "center" ,justifyContent : "center", alignItems : "center"}}>
                <Text style ={{  fontSize : 20}}>
                  <Text>Product</Text>{'\n'}{'\n'}
                <Text>{invoiceItems[1]}</Text>
                </Text>
              </CardItem>
            </Card>
            </View>
            <View style = {{flex: 1, flexDirection: 'row'}}>
            <Card style = {{width : 160, height : 100 }}>
            <CardItem style = {{textAlign : "center" ,justifyContent : "center", alignItems : "center"}}>
                <Text style ={{  fontSize : 20}}>
                  <Text>Quantity</Text>{'\n'}{'\n'}
                <Text>{invoiceItems[2]}</Text>
                </Text>
              </CardItem>
            </Card>
            <Card style = {{width : 160,height : 100 }}>
              <CardItem style ={{ textAlign : "center" ,justifyContent : "center", alignItems : "center"}}>
                <Text style ={{ fontSize : 20 }}>
                  <Text>Cost</Text>{'\n'}{'\n'}
                <Text >{invoiceItems[3]}</Text>
                </Text>
              </CardItem>
            </Card>
            </View>
          </Content>
        </Container>
        <View style = {{flex : 1 , flexDirection : "row"}}>
          <Button title = "Previous" />
          <Button title = "Next" />
        </View>
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
