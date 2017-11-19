import React from 'react'
import { Deck, Slide, Heading, Code, Text,
    List, ListItem } from 'spectacle'
import {
    AboutMe, ReactPlusCycleJs, LetsTalkAboutReact,
    DeclarativeViews, ThinkingInReact, ImmutableData, MapFilterReduce,
    UnidirectionalData, EverythingIsAStream, WhatIsAnObservable,
    StreamOfEvents, ArraysOfEvents, PureFunctionOfObservables,
    TheBigReveal, DeltaFunctions, ApplicationBootstrapping,
    CurrentStatus20170626, GetInvolved, ThankYou
} from '../../slides'
import { DarkTheme } from '../../themes'

const Title = () => (
    <Slide transition={['slide']}>
        <Heading size={1}>Meet <Code>brookjs</Code></Heading>
        <Text>A framework for building streaming web applications.</Text>
    </Slide>
)

const Agenda = () => (
    <Slide transition={['slide']}>
        <List>
            <ListItem>
                React/Redux: Declarative DOM & one-way data
                <List>
                    <ListItem>Functional programming</ListItem>
                </List>
            </ListItem>
            <ListItem>
                Cycle.js: Everything is a stream
                <List>
                    <ListItem>streams/observables</ListItem>
                </List>
            </ListItem>
            <ListItem>
                Meet <Code>brookjs</Code>
            </ListItem>
        </List>
    </Slide>
)

export default () => (
    <Deck transition={['slide']} transitionDuration={500} theme={DarkTheme}>
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
