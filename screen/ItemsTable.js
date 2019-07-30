import React, { Component } from 'react';
import { StyleSheet, View,Text,Button } from 'react-native';
 
export default class ItemsTable extends Component {
 
  render() {
    const {navigation} = this.props;
    const invoiceItems = navigation.getParam('invoiceItems', 'no inovice items received');
    
    console.log('Item Detals : invoiceItems ::',invoiceItems)
    return (
      <View style={styles.container}>
       <Text>Invoice Items</Text>
       <Button title = "go to DEtails Page" onPress = {()=> this.props.navigation.navigate('Details')}></Button>

      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});