import React from 'react'
import { Slide, Heading, Text, CodePane } from 'spectacle'

export const UnidirectionalData = () => [
    <Slide>
        <Heading size={2}>Redux & Unidirectional Data</Heading>
    </Slide>,
    <Slide>
        <Text>Functional state changes make me happy</Text>
        <Text>No surprises!</Text>
        <CodePane lang={'js'} source={`function reducer(state = 0, action) {
  switch (action.type) {
    case 'CLICK':
      return state + 1
    default:
      return state
  }
}`} />
        <Text>Pure function and testable!</Text>
    </Slide>
]
