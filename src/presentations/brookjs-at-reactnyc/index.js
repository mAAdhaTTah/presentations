import React from 'react'
import { Deck, Slide, Markdown } from 'spectacle'
import createTheme from 'spectacle/lib/themes/default'
import mdAgenda from './agenda.md'
import mdTitle from './title.md'


import {
    AboutMe, ReactPlusCycleJs, LetsTalkAboutReact,
    DeclarativeViews, ThinkingInReact, ImmutableData, MapFilterReduce,
    UnidirectionalData, EverythingIsAStream, WhatIsAnObservable,
    StreamOfEvents, ArraysOfEvents, PureFunctionOfObservables,
    TheBigReveal, DeltaFunctions, ApplicationBootstrapping,
    CurrentStatus20170626, GetInvolved, ThankYou
} from '../../slides'
import { DarkTheme } from '../../themes'

const Agenda = () => (
    <Slide transition={['slide']}>
        <Markdown>{mdAgenda}</Markdown>
    </Slide>
)

const Title = () => (
    <Slide transition={['slide']}>
        <Markdown>{mdTitle}</Markdown>
    </Slide>
)

export default () => (
    <Deck transition={['slide']} transitionDuration={500} theme={theme}>
        {Title()}
        {AboutMe()}
        {ReactPlusCycleJs()}
        {Agenda()}
        {LetsTalkAboutReact()}
        {DeclarativeViews()}
        {ThinkingInReact()}
        {ImmutableData()}
        {MapFilterReduce()}
        {UnidirectionalData()}
        {EverythingIsAStream()}
        {WhatIsAnObservable()}
        {StreamOfEvents()}
        {ArraysOfEvents()}
        {PureFunctionOfObservables()}
        {TheBigReveal()}
        {DeltaFunctions()}
        {ApplicationBootstrapping()}
        {CurrentStatus20170626()}
        {GetInvolved()}
        {ThankYou()}
    </Deck>
)
