import React from 'react'
import styled, { keyframes } from 'styled-components'

const cursorKeyframes = keyframes`
    from, to {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }
`

const StyledCursor = styled(span)`
  animation: ${cursorKeyframes} infinite;
`

function Cursor() {
  return <StyledCursor>|</StyledCursor>
}

export default Cursor
