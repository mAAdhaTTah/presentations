import React from 'react'
import { Slide, Markdown, Heading, CodePane, Text } from 'spectacle'

export const ImmutableData  = () => (
    <Slide transition={['slide']}>
        <Heading size={3}>Immutable Data</Heading>
        <CodePane lang={'js'} source={`const admins = [luigi, mario, peach, toad]

// meanwhile...?
admins.push(bowser)`} />
        <Text>How did this get here?</Text>
        <Text>Make a copy instead</Text>
    </Slide>
)

export const MapFilterReduce = () => (
    <Slide transition={['slide']}>
        <Heading size={3}>Map, Filter, Reduce</Heading>
        <Text>building blocks of functional programming</Text>
        <CodePane lang={'js'} source={`const numbers = [1, 2, 3]

console.log(numbers.map(x => x * x)) // [1, 4, 9]
console.log(numbers.filter(x => x > 1)) // [2, 3]
console.log(numbers.reduce((total, next) => total + next)) // 6

console.log(numbers) // [1, 2, 3]`} />
        <Markdown>{`New array is returned from each call

-- Immutable! Pure!`}</Markdown>
    </Slide>
)
