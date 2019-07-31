import React, { Component } from "react";
import { StyleSheet, View, Button } from "react-native";
import InvoiceTable from "./InvoiceTable";
import info from "../info/info";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invoiceTableData: [[]],
      info: info.Invoices
    };
  }
  fetchInfo = () => {
    let tempData = [[]];
    this.state.info.forEach(record => {
      tempData.push([record.Id, record.Company, record.Cost, record.Discount]);
    });
    this.setState({
      invoiceTableData: tempData
    });
  };

  navigateToItems = data => {
    const id = data[0];
    const items = this.state.info.filter(item => item.Id === id);
    let invoiceItems = [];
    items.map(invoices => {
      invoices.InvoiceItems.map(item =>
        invoiceItems.push([item.id, item.Product, item.Quantity, item.Cost])
      );
    });
    this.props.navigation.navigate("Items", {
      invoiceItems: invoiceItems,
      ItemsTableHeader: ItemsTableHeader
    });
  };

  
  render() {
    return (
      <View style={styles.container}>
        <Button title="fetch Info" onPress={this.fetchInfo} />
        <InvoiceTable
          tableData={this.state.invoiceTableData}
          InvoiceTableHeader={InvoiceTableHeader}
          navigateToItems={this.navigateToItems}
        />
      </View>
    );
  }
}

const InvoiceTableHeader = ["Id", "Company", "Cost", "Discount"];
const ItemsTableHeader = ["Id", "Product", "Quantity", "Cost"];

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" }
});