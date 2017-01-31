//import some code we need
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text
} from 'react-native';

//Create our component
var DayItem = React.createClass({
  render: function(){
    return <Text style={styles.day}>
      {this.props.day}
    </Text>
  }
});

//Style our component
var styles = StyleSheet.create({
  day: {
    fontSize: 10,
    color: '#0000FF'
  }
});

//Make this code available elsewhere
module.exports = DayItem;
