import 'normalize.css'
import 'spectacle/lib/themes/default/index.css'
import React from 'react'
import { Deck, Heading, Slide } from 'spectacle'
import createTheme from 'spectacle/lib/themes/default'

const theme = createTheme({
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE'
}, {
    primary: 'Montserrat',
    secondary: 'Helvetica'
})

export default () => (
    <Deck transitionDuration={500} theme={theme}>
        <Slide transition={['slide']} bgColor="primary">
            <Heading size={1} fit lineHeight={1} textColor="secondary">
                Understanding Observables by Example
            </Heading>
        </Slide>
    </Deck>
)
