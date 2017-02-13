import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var StopWatch = React.createClass({
  render: function(){
    return <View style={styles.container}>
      <View style={[styles.header, this.border('yellow')]}>
        <View style={[styles.timeWrapper, this.border('red')]}>
          <Text>
            00:00:00
          </Text>
        </View>
        <View style={[styles.buttonWrapper, this.border('green')]}>
        {this.startStopButton()}
        {this.lapButton()}
        </View>
      </View>

      <View style={[styles.footer, this.border('blue')]}>
        <Text>
          I am a list of laps
        </Text>
      </View>
    </View>
  },
  startStopButton: function(){
    return <View>
      <Text>
        Start
      </Text>
    </View>
  },
  lapButton: function(){
    return <View>
      <Text>
        Lap
      </Text>
    </View>
  },
  border: function(color){
    return {
      borderColor : color,
      borderWidth: 4
    }
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1, //fill the entire screen
    alignItems: 'stretch',
  },
  header: {//yellow
    flex: 1
  },
  footer: {//Blue
    flex: 1
  },
  timeWrapper: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('stopwatch', function(){
  return StopWatch
});

/*
AppRegistry.registerComponent('stopwatch', () => StopWatch);

*/
