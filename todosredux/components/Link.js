import React, { Proptypes } from 'react'

const Link = ({ active, children, onClick}) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a href="#">
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    </a>
  )
}

Link.proptypes = {
  active: Proptypes.bool.isRequired,
  children: Proptypes.node.isRequired,
  onClick: Proptypes.func.isRequired
}

export default Link
