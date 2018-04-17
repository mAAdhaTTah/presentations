import React from 'react'
import { Deck, Heading, Slide, MarkdownSlides, Markdown, Image, Text } from 'spectacle'
import { ThankYou } from '../../slides'
import { DarkTheme } from '../../themes'
import imgCommitPulse from './commit-pulse.png'
import imgExportScreen from './export-screen.png'
import imgTokenScreen from './token-screen.png'
import imgWebDisplay from './web-display.png'
import imgEditorScreen from './editor-screen.png'

export default () => (
    <Deck transitionDuration={500} theme={DarkTheme} transition={['slide']}>
        <Slide transition={['slide']} bgColor="primary">
            <Heading size={1} fit lineHeight={1} textColor="secondary">
                WP-Gistpen: A Gist Clone for WordPress
            </Heading>
        </Slide>
        {MarkdownSlides(`### About Me

James DiGioia, Front-End Developer, Valtech Inc.

Enterprise ecommerce system (Java & .NET)

Maintainer of Kefir`)}
        <Slide>
            <Heading size={1}>Agenda</Heading>
            <Markdown>{`* Why I built WP-Gistpen
* What it can do?
* Demo`}
            </Markdown>
        </Slide>
        <Slide>
            <Image src={imgCommitPulse}/>
        </Slide>
        <Slide>
            <Markdown>{`* Facebook et al collect an **immense** amount of data
* Working in social media, watching the internet centralize
* Wanted to learn how to program, and contribute in a small way`}</Markdown>
        </Slide>
        <Slide>
            <Text fill>
                WP-Gistpen allows you to save your code snippets to your WordPress site and sync those code snippets with GitHub's Gist
            </Text>
        </Slide>
        {MarkdownSlides(`### Syncs with Gist`)}
        <Slide>
            <Image src={imgExportScreen} />
        </Slide>
        <Slide>
            <Image src={imgTokenScreen} />
        </Slide>
        {MarkdownSlides(`### Prism for Syntax Highlighting`)}
        <Slide>
            <Image src={imgWebDisplay} />
        </Slide>
        {MarkdownSlides(`### Custom Editor`)}
        <Slide>
            <Image src={imgEditorScreen} />
        </Slide>
        <Slide>
            <Heading size={2}>Who's ready for the demo effect?</Heading>
        </Slide>
        {ThankYou()}
    </Deck>
)
