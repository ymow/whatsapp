/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  ListView,
  Image,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

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
  "first_name": "Amanda",
  "last_name": "Grant",
  "time": "8:54 AM",
  "message": "rutrum",
  "isRead": false,
  "isViewed": false,
  "image": image1
}, {
  "id": 2,
  "first_name": "Gloria",
  "last_name": "Hicks",
  "time": "11:56 AM",
  "message": "viverra pede",
  "isRead": false,
  "isViewed": true,
  "image": image2
}, {
  "id": 3,
  "first_name": "Gloria",
  "last_name": "Lane",
  "time": "1:34 AM",
  "message": "vehicula consequat",
  "isRead": true,
  "isViewed": false,
  "image": image3
}, {
  "id": 4,
  "first_name": "Linda",
  "last_name": "Wells",
  "time": "2:12 AM",
  "message": "vehicula",
  "isRead": true,
  "isViewed": true,
  "image": image4
}, {
  "id": 5,
  "first_name": "Samantha",
  "last_name": "Lee",
  "time": "11:23 AM",
  "message": "amet",
  "isRead": false,
  "isViewed": false,
  "image": image5
}, {
  "id": 6,
  "first_name": "Irene",
  "last_name": "Garcia",
  "time": "3:15 PM",
  "message": "quis orci nullam",
  "isRead": false,
  "isViewed": false,
  "image": image6
}, {
  "id": 7,
  "first_name": "Marilyn",
  "last_name": "Grant",
  "time": "5:06 AM",
  "message": "felis sed lacus",
  "isRead": true,
  "isViewed": true,
  "image": image7
}, {
  "id": 8,
  "first_name": "Maya",
  "last_name": "Carr",
  "time": "11:28 PM",
  "message": "purus aliquet at",
  "isRead": true,
  "isViewed": false,
  "image": image8
}, {
  "id": 9,
  "first_name": "Paula",
  "last_name": "Kelly",
  "time": "12:36 PM",
  "message": "aliquam lacus morbi",
  "isRead": true,
  "isViewed": true,
  "image": image9
}, {
  "id": 10,
  "first_name": "Ruth",
  "last_name": "Carr",
  "time": "3:05 PM",
  "message": "integer tincidunt",
  "isRead": true,
  "isViewed": true,
  "image": image10
}, {
  "id": 11,
  "first_name": "Christy",
  "last_name": "Cook",
  "time": "10:02 PM",
  "message": "parturient montes nascetur",
  "isRead": true,
  "isViewed": true,
  "image": image11
}, {
  "id": 12,
  "first_name": "Karen",
  "last_name": "Burke",
  "time": "1:19 AM",
  "message": "pede libero",
  "isRead": false,
  "isViewed": false,
  "image": image1
}, {
  "id": 13,
  "first_name": "Annie",
  "last_name": "Garrett",
  "time": "11:28 PM",
  "message": "lacinia sapien quis",
  "isRead": false,
  "isViewed": false,
  "image": image2
}, {
  "id": 14,
  "first_name": "Ally",
  "last_name": "Little",
  "time": "12:45 AM",
  "message": "mauris morbi non",
  "isRead": false,
  "isViewed": true,
  "image": image3
}, {
  "id": 15,
  "first_name": "Georgie",
  "last_name": "Little",
  "time": "10:24 AM",
  "message": "rhoncus aliquam lacus",
  "isRead": false,
  "isViewed": true,
  "image": image4
}]

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Chats extends Component {
    constructor(props){
    super(props)

    this.state = {
      dataSource: ds.cloneWithRows(data),
          }

  }

  eachMessage(x){
    var num = Math.floor(Math.random() * 3) + 1

    if(num > 1){
     return(
      <TouchableOpacity>
<View style={{alignItems:'center', padding:10, flexDirection:'row', borderBottomWidth:1, borderColor:'#f7f7f7' }}>
   <Image source = {x.image} style={{borderRadius:30, width:60,height:60, }} resizeMode='contain' />
  <View>
  <View style={{flexDirection:'row', justifyContent:'space-between', width:280}}>
  <Text style={{marginLeft:15, fontWeight:'600'}}>{x.first_name} {x.last_name}</Text>
  <Text style={{color:'#333', fontSize:10}}>{x.time}</Text>
  </View>
  <View style={{flexDirection:'row', alignItems:'center'}}>
  <Text style={{ fontWeight:'400', color:'#333', marginLeft:15}}>Can I come over to yours tonight?</Text></View>
  </View>

   </View>
   </TouchableOpacity>
      )
   }

    return(
      <TouchableOpacity>
<View style={{alignItems:'center', padding:10, flexDirection:'row', borderBottomWidth:1, borderColor:'#f7f7f7' }}>
   <Image source = {x.image} style={{borderRadius:30, width:60,height:60, }} resizeMode='contain' />
  <View>
  <View style={{flexDirection:'row', justifyContent:'space-between', width:280}}>
  <Text style={{marginLeft:15, fontWeight:'600'}}>{x.first_name} {x.last_name}</Text>
  <Text style={{color:'#333', fontSize:10}}>{x.time}</Text>
  </View>
  <View style={{flexDirection:'row', alignItems:'center'}}>
  <Icon name ="done-all" size = {15} color="#7dd5df" style={{marginLeft:15, marginRight:5}} />
  <Text style={{ fontWeight:'400', color:'#333'}}>{x.message}</Text></View>
  </View>

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

