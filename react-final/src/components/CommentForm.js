import React from 'react'

export default class CommentForm extends React.Component {

  constructor () {
    super()
  }

  render() {
    return (
      <form onSubmit={this.props.onSubmit} className='commentForm'>
        <input type='text' name='author' placeholder='your name' />
        <input type='text' name='text' placeholder='Sign' />
        <input type='hidden' name='id' value={ Date.now() } />
        <input type='submit' value='send' />
      </form>
    )

  }

}CommentForm
