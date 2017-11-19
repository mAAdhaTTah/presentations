import React from 'react'
import { Slide, Heading, Text, CodePane, Markdown, MarkdownSlides,
    List, ListItem, S, Notes } from 'spectacle'
import mdEditorRendering from './editor-rendering.md'
import mdWhatIsAnObservable from './what-is-an-observable.md'

export const ArraysOfEvents = () => [
    <Slide>
        <Notes>
            <p>"push-based" collection</p>
            <p>when you unsubscribe, event listener is removed</p>
        </Notes>
        <List>
            <ListItem>An array whose values arrive <S type={'italic'}>over time</S></ListItem>
            <ListItem>Convert inputs into data</ListItem>
            <ListItem>Self-cleaning</ListItem>
        </List>
    </Slide>,
    <Slide>
        <Notes>
            <p><code>scan</code> vs. <code>reduce</code></p>
            <p>provides every intermediate value vs. last value on end</p>
        </Notes>
        <CodePane lang={'js'} source={`const values$ = events$.map(e => e.target.value)
values$.subscribe(value => console.log('Updated value', value))

const long$ = values$.filter(value => value.length > 10)
long$.subscribe(value => console.log(\`\${value} is long enough\`))

const short$ = values$.filter(value => value.length <= 10)
short$.subscribe(value => console.log(\`\${value} is too short\`))

const reduce$ = events$.scan((acc, e) => acc + e.target.value, '')
reduce$.subscribe(value => console.log(value))`} />
    </Slide>,
    <Slide>
        <Markdown>{`Observables simplify dealing with events over time

JavaScript is **all about** events over time`}</Markdown>
    </Slide>
]

export const EditorRendering = () => (
    <Slide transition={['slide']}>
        <Markdown>{mdEditorRendering}</Markdown>
    </Slide>
)

export const StreamOfEvents = () => (
    <Slide>
        <Heading fit size={4}>Real-World Example: Stream of Events</Heading>
        <Text>Standard event listener:</Text>
        <CodePane lang={'js'} source={`const input = document.querySelector('input')

input.addEventListener('input', e => console.log('Updated value', input.value))`} />
        <Text>Observable:</Text>
        <CodePane lang={'js'} source={`const events$ = Observable.fromEvent(document.querySelector('input'), 'input')

events$.subscribe(e => console.log('Updated value', input.value))`} />
        <List>
            <ListItem>Looks basically the same, right?</ListItem>
            <ListItem>What's so special about that?</ListItem>
        </List>
    </Slide>
)

export const WhatIsAnObservable = () =>
    MarkdownSlides(mdWhatIsAnObservable)
