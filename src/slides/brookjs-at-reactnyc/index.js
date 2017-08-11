import React from 'react'
import { Slide, Markdown } from 'spectacle'
import mdAgenda from './agenda.md'
import mdReactPlusCycleJs from './react+cycle.js.md'
import mdTitle from './title.md'

export const Agenda = () => (
    <Slide transition={['slide']}>
        <Markdown>{mdAgenda}</Markdown>
    </Slide>
)

export const ReactPlusCycleJs = () => (
    <Slide transition={['slide']}>
        <Markdown>{mdReactPlusCycleJs}</Markdown>
    </Slide>
)

export const Title = () => (
    <Slide transition={['slide']}>
        <Markdown>{mdTitle}</Markdown>
    </Slide>
)
