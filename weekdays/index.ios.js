//Import some code we need
//var React = require('react-native');
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
var DayItem = require('./src/day-item');

var DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//Create a react Component
var Weekdays = React.createClass({
  render: function(){
    return <View style={styles.container} >
      <Text>
        Days of the week:
      </Text>
      {this.days()}
    </View>
  },
  days: function(){
    //returns an array of DayItem componentes, one for each day of the week
    return DAYS.map(function(day){
      //Called 7 times for each day of the week
      return <DayItem day={day}/>
    });
  }
});

//Style the react component
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

//Show the react component on the screen
AppRegistry.registerComponent('weekdays', function(){
  return Weekdays
});
