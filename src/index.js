import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Cursor from './components/Cursor'

function TypingTextAnimation({
  text,
  className,
  delay,
  cursorDuration,
  reverse,
  delayOnReverse,
  cursor = <Cursor cursorDuration={cursorDuration} />
}) {
  const [wordIndex, setWordIndex] = useState(0)
  const [typedWord, setTypedWord] = useState('')
  const [isReverseDirection, setReverseDirection] = useState(false)

  useEffect(() => {
    if (wordIndex === text.length && !reverse) return

    if (wordIndex === text.length && reverse) {
      setReverseDirection(true)
    }

    if (wordIndex === 0) {
      setReverseDirection(false)
    }

    const timeout = setTimeout(
      () => {
        const letter = text.substr(wordIndex, 1)

        setWordIndex((prevIndex) =>
          isReverseDirection ? prevIndex - 1 : prevIndex + 1
        )
        setTypedWord((prev) =>
          isReverseDirection ? prev.slice(0, -1) : prev + letter
        )
      },
      isReverseDirection ? delayOnReverse : delay
    )

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
  reverse: PropTypes.bool,
  delayOnReverse: PropTypes.number,
  cursor: PropTypes.element
}

TypingTextAnimation.defaultProps = {
  text: '',
  className: '',
  delay: 200,
  cursorDuration: '1s',
  reverse: false,
  delayOnReverse: 100
}
