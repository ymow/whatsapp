/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ListView,
  Image,
  Text,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
var image1 = require('../images/image1.jpeg')
var image2 = require('../images/image2.jpeg')
var image3 = require('../images/image3.jpeg')
var image4 = require('../images/image4.jpeg')
var image5 = require('../images/image5.jpeg')
var image6 = require('../images/image6.jpeg')
var image7 = require('../images/image7.jpeg')
var image8 = require('../images/image8.jpeg')
var image9 = require('../images/image9.jpeg')
var image10 = require('../images/image10.jpeg')
var image11 = require('../images/image11.jpeg')
var data = [{
  "id": 1,
  "first_name": "Bruce",
  "incomming": true,
  "date": "25-Feb-2016",
  "time": "5:46 PM",
  "image": image1
}, {
  "id": 2,
  "first_name": "Albert",
  "incomming": true,
  "date": "31-Jan-2016",
  "time": "12:38 PM",
  "image": image2
}, {
  "id": 3,
  "first_name": "Douglas",
  "incomming": true,
  "date": "01-Jul-2016",
  "time": "1:33 PM",
  "image": image3
}, {
  "id": 4,
  "first_name": "Eugene",
  "incomming": true,
  "date": "19-Feb-2016",
  "time": "3:59 AM",
  "image": image4
}, {
  "id": 5,
  "first_name": "Michael",
  "incomming": true,
  "date": "12-Apr-2016",
  "time": "9:57 AM",
  "image": image5
}, {
  "id": 6,
  "first_name": "William",
  "incomming": false,
  "date": "13-Aug-2016",
  "time": "9:37 PM",
  "image": image6
}, {
  "id": 7,
  "first_name": "Joshua",
  "incomming": true,
  "date": "17-Dec-2015",
  "time": "4:32 AM",
  "image": image7
}, {
  "id": 8,
  "first_name": "Fred",
  "incomming": false,
  "date": "02-Dec-2015",
  "time": "12:56 AM",
  "image": image8
}, {
  "id": 9,
  "first_name": "Donald",
  "incomming": false,
  "date": "27-Oct-2015",
  "time": "9:02 PM",
  "image": image9
}, {
  "id": 10,
  "first_name": "Bruce",
  "incomming": true,
  "date": "13-Sep-2015",
  "time": "6:20 PM",
  "image": image10
}]



var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Calls extends Component {
    constructor(props){
    super(props)

    this.state = {
      dataSource: ds.cloneWithRows(data),
          }

  }

  eachMessage(x){
    return(
      <TouchableOpacity>
<View style={{alignItems:'center', padding:10, flexDirection:'row', borderBottomWidth:1, borderColor:'#f7f7f7' }}>
   <Image source = {x.image} style={{borderRadius:30, width:60,height:60, }} resizeMode='contain' />
  <View>
  <View style={{flexDirection:'row', justifyContent:'space-between', width:260}}>
  <Text style={{marginLeft:15, fontWeight:'600', color:'#222'}}>{x.first_name}'s Mom</Text>
  </View>
  <View style={{flexDirection:'row', alignItems:'center'}}>
  <Icon name ="call-received" size = {15} color="#ed788b" style={{marginLeft:15, marginRight:5}} />
  <Text style={{ fontWeight:'400', color:'#666', fontSize:12}}>{x.date}  {x.time}</Text></View>
  </View>
  <Icon name = "call" size ={23} color = '#777' style={{marginRight:10}} />

   </View>
   </TouchableOpacity>
      )
  }


  render() {
    return (
      <View style={{flex:1}}>
<ListView 
dataSource = {this.state.dataSource} 
renderRow={(rowData) => this.eachMessage(rowData)}
/>
</View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

