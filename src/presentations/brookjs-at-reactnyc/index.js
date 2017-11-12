import 'normalize.css/normalize.css'
import 'spectacle/lib/themes/default/index.css'
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

let theme = createTheme({
    primary: '#111111',
    secondary: '#EEEEEE',
    tertiary: '#EEEEEE',
    quartenary: '#CECECE'
}, {
    primary: 'Montserrat',
    secondary: 'Open Sans'
})

theme = {
    ...theme,
    screen: {
        ...theme.screen,
        global: {
            ...theme.screen.global,
            a: {
                color: '#E7AD52',
                textDecoration: 'none'
            }
        },
        components: {
            ...theme.screen.components,
            heading: {
                ...theme.screen.components.heading,
                h3: {
                    ...theme.screen.components.heading.h3,
                    color: theme.screen.colors.secondary
                }
            },
            text: {
                ...theme.screen.components.text,
                color: theme.screen.colors.secondary
            },
            link: {
                ...theme.screen.components.link,
                color: '#E7AD52'
            }
        }
    }
}

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