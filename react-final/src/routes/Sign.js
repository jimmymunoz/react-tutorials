import React from 'react'
import ReactMixin from 'react-mixin'
import Reflux from 'reflux'
import $ from 'jquery'

import CommentBox from '../components/CommentBox'
import CommentStores from '../stores/CommentStores'
import CommentActions from '../actions/CommentActions'


@ReactMixin.decorate(Reflux.connect(CommentStores, 'comments'))
export default class Sign extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    CommentActions.fetchComments()
  }

  onSubmitComment(ev) {
    ev.preventDefault();
    let data = $(ev.target).serializeArray()
    console.log(data)
    let comment = {
      author: data[0].value,
      text: data[1].value,
      id: data[2].value,
    }
    CommentActions.sendSign(comment)
  }

  render () {
    console.log(this.state.comments)
    if(! this.state.comments){
      return (<h1>Loading</h1>)
    }
    else{
      return (
        <div>
          <CommentBox onSubmit={this.onSubmitComment.bind(this)} data={ this.state.comments }/>
        </div>
      )
    }
  }
}
