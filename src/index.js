import React from 'react'
import PropTypes from 'prop-types'
import Cursor from './components/Cursor'

function TypingTextAnimation({
  children,
  className,
  cursorDuration,
  cursor = <Cursor cursorDuration={cursorDuration} />
}) {
  return (
    <div className={className}>
      {children}
      {cursor}
    </div>
  )
}

export default TypingTextAnimation

TypingTextAnimation.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  cursorDuration: PropTypes.string
}
