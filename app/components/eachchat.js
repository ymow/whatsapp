/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import InvertibleScrollView from 'react-native-invertible-scroll-view';


const {width, height} = Dimensions.get('window');
import {
  AppRegistry,
  StyleSheet,
  ListView,
  TextInput,
  Dimensions,
  Image,
  Text,
  View
} from 'react-native';

var convo = []
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Chaty extends Component {
  constructor(props){
    super(props)
    this.state = {
      datasource: ds.cloneWithRows(convo),
      note: ""
    }
  }



  eachMessage(x){

    if(x.person == 2){
        return(
          <View style={{flexDirection:'row', alignItems:'flex-end', margin:5}}>
          <Image source ={this.props.image} resizeMode ="contain" style={{height:40, width:40, margin:5, borderRadius:20, backgroundColor:'#f8f8f8'}} />
          <View style={{width:220, borderRadius:10, backgroundColor:'#f4f4f4', padding:10}}>
          <Text style={{fontSize:15, color:'#555',fontWeight:'600'}}>{x.note}</Text>
          </View>
          </View>
          )
    }else{
        return(
          <View style={{flexDirection:'row', alignSelf:'flex-end', alignItems:'flex-end', margin:5}}>
          <View style={{width:220, borderRadius:10, backgroundColor:'#00b499', padding:10}}>
          <Text style={{fontSize:15, color:'#fff',fontWeight:'600'}}>{x.note}</Text>
          </View>
          <Image source ={require('../images/profile.jpg')} resizeMode ="contain" style={{height:40, width:40, margin:5, borderRadius:20, backgroundColor:'#f8f8f8'}} />

          </View>
          )}
  }
  submitThis(){

    convo.push({person:1, note:this.state.note})

    this.setState({
      datasource: ds.cloneWithRows(convo.reverse())
    })

    setTimeout(() => {
      this.similator();
    }, 2000);

  }

  similator(){
    convo.reverse();
    convo.push({person:2, note:"When are we gonna hangout Sam!!!!"})
    this.setState({
      datasource: ds.cloneWithRows(convo.reverse())
    })
  }

  render() {
    return (
      <Image source={require('../images/background.jpg')} style={styles.container}>
       <View style={{height:65, flexDirection:'row', justifyContent:'space-between', backgroundColor:'#075e54', alignItems:'center', paddingTop:10}}>
       <View style = {{flexDirection:'row', flex:1, alignItems:'center'}}>
       <Icon name="navigate-before" color='#fff' size={23} style={{}} />
       <Image source = {require('../images/image1.jpeg')} style={{width:30, height:30, borderRadius:15, margin:5}} />
       <Text style={{color:'#fff', fontWeight:'600', margin:10, fontSize:15}}>Alexia</Text>
       </View>
       <View style={styles.row}>
      <Icon name="call" color='#fff' size={23} style={{padding:5}} />
      <Icon name = "attach-file" color='#fff' size={23} style={{padding:5}} />
      <Icon name="more-vert" color='#fff' size={23} style={{padding:5}} />
      </View>
       </View>
       <ListView 
       enableEmptySections = {true}
          renderScrollComponent={props => <InvertibleScrollView {...props} inverted />}
          noScroll={true}
          style = {{flex:1,}}
          contentContainerStyle = {{justifyContent:'flex-end'}}
          dataSource = {this.state.datasource}
          renderRow = {(rowData) => this.eachMessage(rowData)}/>
          
          <View style={{alignSelf:'flex-end', padding:10, height:60, width:width, borderTopWidth:1, borderColor:'#f3f3f3', backgroundColor:'#fff'}}>
          <TextInput 
          style = {{flex:1,}}
          onChangeText = {(text) => this.setState({note:text})}
          onSubmitEditing = {() => this.submitThis()}
          placeholder ="Enter Your message here" 
          />
      </View>
                </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:null,
    height:null,
    justifyContent:'space-between',
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }, row:{
    flexDirection:'row'

  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

