import React from 'react'
import { Slide, Markdown, MarkdownSlides } from 'spectacle'
import mdCoordinatingEvents from './coordinating-events.md'
import mdDeclarativeViews from './declarative-views.md'
import mdLetsTalkAboutReact from './lets-talk-about-react.md'
import mdProblemWithReact from './problem-with-react.md'
import mdThinkingInReact from './thinking-in-react.md'
import mdThreadingCallbacks from './threading-callbacks.md'

export const CoordinatingEvents = () => (
    <Slide transition={['slide']}>
        <Markdown>{mdCoordinatingEvents}</Markdown>
    </Slide>
)

export const DeclarativeViews = () =>
    MarkdownSlides(mdDeclarativeViews)


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
