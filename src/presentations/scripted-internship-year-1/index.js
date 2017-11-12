import 'normalize.css/normalize.css'
import 'spectacle/lib/themes/default/index.css'
import React from 'react'
import { Deck, Slide, Markdown, MarkdownSlides } from 'spectacle'
import createTheme from 'spectacle/lib/themes/default'
import mdTitle from './title.md'
import mdPrezi from './prezi.md'
import screenshot from './finished-project.png'
import photo from './intern-photo.jpg'

import { ThankYou } from '../../slides'

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
            },
            img: {
                maxWidth: '100%'
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

const Title = () => (
    <Slide transition={['slide']}>
        <Markdown>{mdTitle}</Markdown>
    </Slide>
)

export default () => (
    <Deck transition={['slide']} transitionDuration={500} theme={theme}>
        {Title()}
        {MarkdownSlides(mdPrezi
            .replace('intern-photo.jpg', photo)
            .replace('finished-project.png', screenshot))}
        {ThankYou()}
    </Deck>
)
