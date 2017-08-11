import React from 'react'
import { Slide, Markdown, MarkdownSlides } from 'spectacle'
import mdEverythingIsAStream from './everything-is-a-stream.md'
import mdPureFunctionOfObservables from './pure-function-of-observables.md'

export const EverythingIsAStream = () => (
    <Slide transition={['slide']}>
        <Markdown>{mdEverythingIsAStream}</Markdown>
    </Slide>
)

export const PureFunctionOfObservables = () =>
    MarkdownSlides(mdPureFunctionOfObservables)
