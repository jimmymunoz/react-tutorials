import Reflux from 'reflux';
import io from 'socket.io-client'

import PeopleActions from '../actions/PeopleActions'
//import $ from 'jquery';

let PeopleStore = Reflux.createStore({
  listenables: [PeopleActions],
  people : {},
  fetchPeople: function () {
    this.socket = io('http://localhost:3001')
    this.socket.on('people', (people) => {
      var people = JSON.parse(people)
      people = people.results[0]
      this.trigger(people)
    })
    /*
    let self = this;
    $.ajax({
      url: 'https://randomuser.me/api/',
      dataType: 'json'
    })
    .done(function(data) {
      this.people = data.results[0];
      console.log(this.people);
      self.trigger(this.people);//Updates view
    })
    */
  },
  askForPeople: function () {
    this.socket.emit('ask')
  }
});

export default PeopleStore;
