import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { Table, Row, TableWrapper, Cell } from "react-native-table-component";

export default class ItemsTable extends Component {

  navigateToDetails = data =>{
    this.props.navigation.navigate("Details",{
      data : data
    })
  }
  
  render() {
    const { navigation } = this.props;

    ItemsTableHeader = navigation.getParam(
      "ItemsTableHeader",
      "no inovice items received"
    );
    invoiceItems = navigation.getParam(
      "invoiceItems",
      "no inovice items received"
    );

    return (
      <View style={styles.container}>
        <Text>Invoice Items</Text>
        <Table borderStyle={{ borderWidth: 2, borderColor: "#40a9ff" }}>
          <Row
            data={ItemsTableHeader}
            style={styles.head}
            textStyle={{color : "white" , fontWeight: "bold", margin: 6}}
          />
          {invoiceItems.map((rowData, index) => (
            <TableWrapper key={index} style={styles.row}>
              {rowData.map((cellData, cellIndex) => (
                <Cell key={cellIndex} data={cellData} textStyle={styles.text} onPress = {()=>this.navigateToDetails(rowData)}/>
              ))}
            </TableWrapper>
          ))}
        </Table>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff"},
  head: { height: 40, backgroundColor: "#40a9ff" },
  text: { margin: 6 },
  row: { flexDirection: "row", backgroundColor: "#FFF1C1" },
});
