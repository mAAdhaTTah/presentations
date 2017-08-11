import React from 'react'
import { Slide, Markdown } from 'spectacle'
import mdImmutableData from './immutable-data.md'
import mdMapFilterReduce from './map-filter-reduce.md'

export const ImmutableData  = () => (
    <Slide transition={['slide']}>
        <Markdown>{mdImmutableData}</Markdown>
    </Slide>
)

export const MapFilterReduce = () => (
    <Slide transition={['slide']}>
        <Markdown>{mdMapFilterReduce}</Markdown>
    </Slide>
)
