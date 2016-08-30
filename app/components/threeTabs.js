/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Calls from './calls'
import Chats from './chats'
import Contacts from './contacts'
import ScrollableTabView from 'react-native-scrollable-tab-view'

export default class ThreePanels extends Component {
  render() {
    return (
   <ScrollableTabView style ={{marginTop:10}}>
        <Calls tabLabel="Calls" />
        <Chats tabLabel="The Homies" />
        <Contacts tabLabel="Contacts" />
      </ScrollableTabView>
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

