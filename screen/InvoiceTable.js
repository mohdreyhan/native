import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Table, Row, TableWrapper, Cell } from "react-native-table-component";

export default class InvoiceTable extends Component {
  render() {
    const { tableData, InvoiceTableHeader, navigateToItems } = this.props;

    return (
      <View style={styles.container}>
        <Table borderStyle={{ borderWidth: 2, borderColor: "#40a9ff"}}>
          
          <Row
            data={InvoiceTableHeader}
            style={styles.head}
            textStyle={{color : "white" , fontWeight: "bold" , margin: 6}}

          />
        
          {tableData.map((rowData, index) => (
            <TableWrapper key={index} style={styles.row}>
              {rowData.map((cellData, cellIndex) => (
                <Cell
                  key={cellIndex}
                  data={cellData}
                  textStyle={styles.text}
                  onPress={() => navigateToItems(tableData[index])}
                />
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