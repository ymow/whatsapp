import React, { Component } from 'react';
import {

  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Navigator,
  View
} from 'react-native';

import Home from './threeTabs'
import Chat from './eachchat'



export default class Index extends Component {
  constructor(props){
    super(props)
 
  }
 
  renderScene(route, navigator) {
    var {state,actions} = this.props;
    var routeId = route.id;

    if (routeId === 'home') {
      return (
        <Home
        {...this.props} 
        navigator={navigator} />
        );
    }
    if (routeId === 'chat') {
      return (
        <Chat
        {...this.props}
        image = {route.image}
        navigator={navigator} />
        );
    }
  
   }


  render() {
    return (
      <View style={{flex:1}}>
     <Navigator
     style={{flex: 1}}
     ref={'NAV'}
     initialRoute={{id: 'chat', name: 'chat'}}
     renderScene={this.renderScene.bind(this)}/>
        </View>
    )
}
}
