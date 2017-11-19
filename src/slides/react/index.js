import React from 'react'
import { Slide, Markdown, Heading, CodePane, Text } from 'spectacle'
import mdCoordinatingEvents from './coordinating-events.md'
import mdLetsTalkAboutReact from './lets-talk-about-react.md'
import mdProblemWithReact from './problem-with-react.md'
import mdThinkingInReact from './thinking-in-react.md'
import mdThreadingCallbacks from './threading-callbacks.md'

export const CoordinatingEvents = () => (
    <Slide transition={['slide']}>
        <Markdown>{mdCoordinatingEvents}</Markdown>
    </Slide>
)

export const DeclarativeViews = () => [
    <Slide transition={['slide']}>
        <Heading size={4}>I love declarative views!</Heading>
        <Text>What do I want? vs. How do I get there?</Text>
        <CodePane lang={'jsx'} source={`export default ({ handleOnClick, text }) => (
    <button className="button"
            onClick={handleOnClick}>
        {text}
    </button>
)`}/>
        <Text>Views as pure functions,</Text>
        <Text>and functions are awesome.</Text>
    </Slide>,
    <Slide>
        <Text>Pure functions are testable</Text>
        <CodePane lang={'jsx'} source={`import { pureFunction } from '../'

describe('pure function', () => {
  it('should just use its arguments', () => {
    expect(pureFunction('arg1', 'arg2')).to.deep.equal({
      my: 'value'
    })
  })
})`}/>
        <Text>Works for views too.</Text>
    </Slide>,
    <Slide>
        <Heading size={4}>Tests are the best!</Heading>
        <Text>Want to reduce bugs? Prevent regressions? Test your code!</Text>
    </Slide>
]

export const LetsTalkAboutReact = () => (
    <Slide transition={['slide']}>
        <Markdown>{mdLetsTalkAboutReact}</Markdown>
    </Slide>
)

export const ProblemWithReact = () => (
    <Slide transition={['slide']}>
        <Markdown>{mdProblemWithReact}</Markdown>
    </Slide>
)

export const ThinkingInReact = () => (
    <Slide transition={['slide']}>
        <Markdown>{mdThinkingInReact}</Markdown>
    </Slide>
)

export const ThreadingCallbacks = () => (
    <Slide transition={['slide']}>
        <Markdown>{mdThreadingCallbacks}</Markdown>
    </Slide>
)
