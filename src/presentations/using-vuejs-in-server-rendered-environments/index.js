import React from 'react'
import { Deck, Heading, Slide, MarkdownSlides } from 'spectacle'
import { AboutMe, ThankYou } from '../../slides'
import { DarkTheme } from '../../themes'
import source from './prezi.md'

export default () => (
    <Deck transitionDuration={500} theme={DarkTheme} transition={['slide']}>
        <Slide transition={['slide']} bgColor="primary">
            <Heading size={1} fit lineHeight={1} textColor="secondary">
                Using Vue.js in Server Rendered Environments
            </Heading>
        </Slide>
        {AboutMe()}
        {MarkdownSlides(source)}
        {ThankYou()}
    </Deck>
)
