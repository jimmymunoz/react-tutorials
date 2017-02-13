import Reflux from 'reflux'
import io from 'socket.io-client'

import CommentActions from '../actions/CommentActions'

let CommentStores = Reflux.createStore({
  listenables: [CommentActions],
  init: function () {
    this.socket = io('http://localhost:3002')
    this.socket.on('data', (data) => {
      this.trigger(data)
    })
  },
  sendSign: function (comment) {
    this.socket.emit('sign', comment)
  },
  fetchComments: function () {
    this.socket.emit('read')
  }
});

export default CommentStores
