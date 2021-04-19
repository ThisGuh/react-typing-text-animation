import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Cursor from './components/Cursor'

function TypingTextAnimation({
  text,
  className,
  delay,
  cursorDuration,
  cursor = <Cursor cursorDuration={cursorDuration} />
}) {
  const [wordIndex, increaseWordIndex] = useState(0)
  const [typedWord, setTypedWord] = useState('')

  useEffect(() => {
    if (wordIndex === text.length) return
    const timeout = setTimeout(() => {
      const letter = text.substr(wordIndex, 1)
      increaseWordIndex((prevIndex) => prevIndex + 1)
      setTypedWord((prev) => prev + letter)
    }, delay)
    return () => clearTimeout(timeout)
  }, [wordIndex, typedWord])

  return (
    <div className={className}>
      {typedWord}
      {cursor}
    </div>
  )
}

export default TypingTextAnimation

TypingTextAnimation.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  delay: PropTypes.number,
  cursorDuration: PropTypes.string,
  cursor: PropTypes.element
}

TypingTextAnimation.defaultProps = {
  text: '',
  className: '',
  delay: 400,
  cursorDuration: '1s'
}
