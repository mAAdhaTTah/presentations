import React from 'react'
import { Slide, Markdown, MarkdownSlides } from 'spectacle'
import mdArraysOfEvents from './arrays-of-events.md'
import mdEditorRendering from './editor-rendering.md'
import mdStreamOfEvents from './stream-of-events.md'
import mdWhatIsAnObservable from './what-is-an-observable.md'

export const ArraysOfEvents = () =>
    MarkdownSlides(mdArraysOfEvents)

export const EditorRendering = () => (
    <Slide transition={['slide']}>
        <Markdown>{mdEditorRendering}</Markdown>
    </Slide>
)

export const StreamOfEvents = () =>
    MarkdownSlides(mdStreamOfEvents)


export const WhatIsAnObservable = () =>
    MarkdownSlides(mdWhatIsAnObservable)
