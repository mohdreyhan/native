import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Button,
  ImageBackground,
  Modal,
  Text
} from "react-native";
import InvoiceTable from "./InvoiceTable";
import info from "../info/info";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invoiceTableData: [[]],
      info: info.Invoices,
      show: false
    };
  }

  fetchInfo = show => {
    let tempData = [[]];
    this.state.info.forEach(record => {
      tempData.push([record.Id, record.Company, record.Cost, record.Discount]);
    });
    this.setState({
      invoiceTableData: tempData,
      show: show
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
      ItemsTableHeader: ItemsTableHeader,
      invoiceItems: invoiceItems,
      modal: this.modal
    });
  };

  render() {
    return (
      <ImageBackground
        resizeMode="cover"
        source={require("./img.jpg")}
        style={styles.container}
      >
        <View style={{ alignItems: "center", paddingBottom: 30 }}>
          <Button title="fetch Info" onPress={() => this.fetchInfo(true)} />
        </View>
        <View style={{ paddingLeft: 10, paddingRight: 10 }}>
          <InvoiceTable
            tableData={this.state.invoiceTableData}
            navigateToItems={this.navigateToItems}
            InvoiceTableHeader={InvoiceTableHeader}
            show={this.state.show}
          />
        </View>
      </ImageBackground>
    );
  }
}

const InvoiceTableHeader = ["Id", "Company", "Cost", "Discount"];
const ItemsTableHeader = ["Id", "Product", "Quantity", "Cost"];

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 30 }
});
