import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Table, Row, TableWrapper, Cell } from "react-native-table-component";

export default class InvoiceTable extends Component {
  render() {
    const { tableData, InvoiceTableHeader, navigateToItems, show } = this.props;

    return show ? (
      <Table borderStyle={{ borderWidth: 2, borderColor: "white" }}>
        <Row
          data={InvoiceTableHeader}
          style={styles.head}
          textStyle={{ color: "white", fontWeight: "bold", margin: 6 }}
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
    ) : null;
  }
}

const styles = StyleSheet.create({
  head: { height: 40, backgroundColor: "#40a9ff" },
  text: { margin: 6 },
  row: { flexDirection: "row"},
  bf: { flex: 1 }
});
