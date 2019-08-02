import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { Table, Row, TableWrapper, Cell } from "react-native-table-component";
import { Container, Content, Card, CardItem } from "native-base";



export default class ItemsTable extends Component {
  constructor(props){
    super(props);
    this.state ={
      testdata : [],
      testindex : "",
      hide : true,
      showdetails : false
      
    }
  }

  navigateToDetails = (data,show,hide)=>
  {
    this.setState({testdata : data});
    this.setState({showdetails : show})
    this.setState({hide : hide})

  }

  BackToItems = () =>
  {
    this.setState({showdetails : false})
    this.setState({hide : true})

  }

  
  render(){
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
       <CreateTable hide = {this.state.hide} invoiceItems={invoiceItems} ItemsTableHeader = {ItemsTableHeader} navigateToDetails={this.navigateToDetails}/>
        <View>
          <ShowData data = {this.state.testdata} index= {this.state.index} showdetails = {this.state.showdetails} BackToItems = {this.BackToItems}/>
        </View>
      </View>
    )
    
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#40a9ff" },
  text: { margin: 6 },
  row: { flexDirection: "row", backgroundColor: "#FFF1C1" }
});

const CreateTable = (props) =>
{
  return props.hide ? (
    <View>
       <Table borderStyle={{ borderWidth: 2, borderColor: "#40a9ff" }}>
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
                  onPress={() => props.navigateToDetails(rowData,true,false)}
                />
              ))}
            </TableWrapper>
          ))}
        </Table>
        </View>

  ):
  null
}

const ShowData = (props) =>
{ 
  
  
  return props.showdetails ?(
<View>
       <Card>
              <CardItem >
                <Text >
                  <Text>ID : </Text>
                <Text>{props.data[0]}</Text>
                </Text>
              </CardItem >
            </Card>
            <Card>
              <CardItem >
                <Text >
                  <Text>
                    product : 
                  </Text>
                <Text>{props.data[1]}</Text>
                </Text>
              </CardItem >
            </Card>
    
   
    <Card>
           <CardItem >
             <Text >
               <Text>Quantity : </Text>
             <Text>{props.data[2]}</Text>
             </Text>
           </CardItem >
         </Card>
         <Card>
           <CardItem >
             <Text >
               <Text>Cost : </Text>
             <Text>{props.data[3]}</Text>
             </Text>
           </CardItem >
         </Card>
         <Button title = " Back to Items" onPress = {()=> props.BackToItems()}/>
        </View>
 
    
  )
  : null
};