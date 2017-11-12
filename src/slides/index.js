import React from 'react'
import { Markdown, Slide } from 'spectacle'
import mdAboutMe from './about-me.md'
import mdThankYou from './thank-you.md'

export * from './brookjs'
export * from './cycle.js'
export * from './functional-programming'
export * from './observables'
export * from './react'
export * from './redux'

export const AboutMe = () => (
    <Slide transition={['slide']}>
        <Markdown>{mdAboutMe}</Markdown>
    </Slide>
)

export const ThankYou = () => (
    <Slide transition={['slide']}>
        <Markdown>{mdThankYou}</Markdown>
    </Slide>
)
