//Import some code we need
//var React = require('react-native');
var Moment = require('moment');
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
var DayItem = require('./src/day-item');

//Create a react Component
var Weekdays = React.createClass({
  render: function(){
    return <View style={styles.container} >
      {this.days()}
    </View>
  },
  days: function(){
    var dayItems = [];
    for(var i = 0; i < 7; i++){
      var day = Moment().add(i, 'days').format('dddd');
      dayItems.push(
        <DayItem day={day} daysUntil={i} />
      )
    }
    return dayItems;
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
