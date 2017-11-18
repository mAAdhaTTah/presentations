import React from 'react'
import { Deck, Slide, Markdown, MarkdownSlides } from 'spectacle'
import createTheme from 'spectacle/lib/themes/default'
import mdTitle from './title.md'
import mdPrezi from './prezi.md'
import screenshot from './finished-project.png'
import photo from './intern-photo.jpg'

import { ThankYou } from '../../slides'
import { DarkTheme } from '../../themes'

const Title = () => (
    <Slide transition={['slide']}>
        <Markdown>{mdTitle}</Markdown>
    </Slide>
)

export default () => (
    <Deck transition={['slide']} transitionDuration={500} theme={DarkTheme}>
        {Title()}
        {MarkdownSlides(mdPrezi
            .replace('intern-photo.jpg', photo)
            .replace('finished-project.png', screenshot))}
        {ThankYou()}
    </Deck>
)
