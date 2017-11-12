import React from 'react'
import { Slide, Markdown, MarkdownSlides } from 'spectacle'
import mdApplicationBootstrapping from './application-bootstrapping.md'
import mdCurrentStatus20170626 from './current-status-2017-06-26.md'
import mdDeltaFunctions from './delta-functions.md'
import mdFutureFeatures20170626 from './future-features-2017-06-26.md'
import mdGetInvolved from './get-involved.md'
import mdReactPlusCycleJs from './react+cycle.js.md'
import mdTheBigReveal from './the-big-reveal.md'

export const ApplicationBootstrapping = () => (
    MarkdownSlides(mdApplicationBootstrapping)
)

export const CurrentStatus20170626 = () => (
    <Slide transition={['slide']}>
        <Markdown>{mdCurrentStatus20170626}</Markdown>
    </Slide>
)

export const DeltaFunctions = () =>
    MarkdownSlides(mdDeltaFunctions)

export const FutureFeatures20170626 = () => (
    <Slide transition={['slide']}>
        <Markdown>{mdFutureFeatures20170626}</Markdown>
    </Slide>
)

export const GetInvolved = () => (
    <Slide transition={['slide']}>
        <Markdown>{mdGetInvolved}</Markdown>
    </Slide>
)

export const ReactPlusCycleJs = () => (
    <Slide transition={['slide']}>
        <Markdown>{mdReactPlusCycleJs}</Markdown>
    </Slide>
)

export const TheBigReveal = () => (
    MarkdownSlides(mdTheBigReveal)
)
