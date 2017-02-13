import React from 'react'

import Comment from './Comment'

export default class CommentList extends React.Component {

  constructor () {
    super()
  }
  render() {
    let allComments = this.props.data.map((comment) => {
      return (<Comment key={comment.id} author={comment.author} text={comment.text}></Comment>)
    })
    return (
      <div className="commentList">
        {allComments}
      </div>
    )
  }
}
