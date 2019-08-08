import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Button,
  ScrollView
} from "react-native";
import { Table, Row, TableWrapper, Cell } from "react-native-table-component";
import { Card, CardItem } from "native-base";

export default class ItemsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testdata: [],
      hide: true,
      showdetails: false,
      disPrevBtn: null,
      disNextBtn: null,
      index: null
    };
  }

  navigateToDetails = (data, show, hide, invoiceItems, index) => {
    this.setState({
      testdata: data,
      showdetails: show,
      hide: hide,
      index: index
    });

    disPrevBtn = index === 0 ? true : false;
    this.setState({ disPrevBtn: disPrevBtn });

    disNextBtn = index === invoiceItems.length - 1 ? true : false;
    this.setState({ disNextBtn: disNextBtn });
  };

  BackToItems = () => {
    this.setState({ showdetails: false });
    this.setState({ hide: true });
  };

  navigateItems = (itemDetails, targetIndex) => {
    let tempArray = [];
    itemDetails.map((item, i) => {
      if (i === targetIndex) {
        tempArray = item;
      }
    });
    this.navigateToDetails(tempArray, true, false, itemDetails, targetIndex);
  };

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
      <ImageBackground
        resizeMode="cover"
        source={require("./img.jpg")}
        style={styles.container}
      >
        <ScrollView style={{ paddingLeft: 10, paddingRight: 10 }}>
          <View>
            <CreateTable
              hide={this.state.hide}
              invoiceItems={invoiceItems}
              ItemsTableHeader={ItemsTableHeader}
              navigateToDetails={this.navigateToDetails}
            />
            <View>
              <ShowData
                invoiceItems={invoiceItems}
                data={this.state.testdata}
                index={this.state.index}
                showdetails={this.state.showdetails}
                modalVisible={this.state.modalVisible}
                BackToItems={this.BackToItems}
                disPrevBtn={this.state.disPrevBtn}
                disNextBtn={this.state.disNextBtn}
                navigateItems={this.navigateItems}
                targetIndex={this.state.targetIndex}
                modalDisplay={this.modalDisplay}
              />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const CreateTable = props => {
  return props.hide ? (
    <View>
      <Text style={{ fontSize: 30, paddingBottom: 30 }}>Invoice Items</Text>
      <Table borderStyle={{ borderWidth: 2, borderColor: "white" }}>
        <Row
          data={ItemsTableHeader}
          style={styles.head}
          textStyle={{ color: "white", fontWeight: "bold", margin: 6 }}
        />
        {invoiceItems.map((rowData, index) => (
          <TableWrapper key={index} style={styles.row}>
            {rowData.map((cellData, cellIndex) => (
              <Cell
                key={cellIndex}
                data={cellData}
                textStyle={styles.text}
                onPress={() =>
                  props.navigateToDetails(
                    rowData,
                    true,
                    false,
                    invoiceItems,
                    index
                  )
                }
              />
            ))}
          </TableWrapper>
        ))}
      </Table>
    </View>
  ) : null;
};

const ShowData = props => {
  return props.showdetails ? (
    <View>
      <View
        style={{ alignSelf: "flex-end", paddingLeft: 90, paddingBottom: 20 }}
      >
        <Button
          title="Edit"
          onPress={() => props.modalDisplay(!props.modalVisible)}
        />
      </View>
      <Card>
        <CardItem>
          <Text style={{ fontSize: 20 }}>
            <Text>ID : </Text>
            <Text>{props.data[0]}</Text>
          </Text>
        </CardItem>
      </Card>
      <Card>
        <CardItem>
          <Text style={{ fontSize: 20 }}>
            <Text>product : </Text>
            <Text>{props.data[1]}</Text>
          </Text>
        </CardItem>
      </Card>

      <Card>
        <CardItem>
          <Text style={{ fontSize: 20 }}>
            <Text>Quantity : </Text>
            <Text>{props.data[2]}</Text>
          </Text>
        </CardItem>
      </Card>
      <Card>
        <CardItem>
          <Text style={{ fontSize: 20 }}>
            <Text>Cost : </Text>
            <Text>{props.data[3]}</Text>
          </Text>
        </CardItem>
      </Card>
      <View style={{ flexDirection: "row", paddingTop: 30 }}>
        <View style={{ paddingLeft: 40, paddingRight: 60 }}>
          <Button
            style={styles.button}
            title="Previous"
            disabled={props.disPrevBtn}
            onPress={() =>
              props.navigateItems(props.invoiceItems, props.index - 1)
            }
          />
        </View>
        <View style={{ paddingLeft: 70, paddingRight: 40 }}>
          <Button
            title="Next"
            disabled={props.disNextBtn}
            onPress={() =>
              props.navigateItems(props.invoiceItems, props.index + 1)
            }
          />
        </View>
      </View>
      <View style={styles.button}>
        <Button title=" Back to Items" onPress={() => props.BackToItems()} />
      </View>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 30 },
  head: { height: 40, backgroundColor: "#40a9ff" },
  text: { margin: 6 },
  row: { flexDirection: "row", height: 40 },
  button: {
    alignItems: "center",
    paddingTop: 30
  }
});
