import React from 'react'
import { DarkTheme } from '../themes'
import { Deck, Slide, Heading, Text, List, ListItem } from 'spectacle'

export default () => (
    <Deck transitionDuration={500} theme={DarkTheme} transition={['slide']}>
        <Slide>
            <Heading size={1} fit lineHeight={1} textColor={'secondary'}>
                I Bitcoin and Now I Have to Go to the Dentist
            </Heading>
        </Slide>
        <Slide>
            <Heading size={2}>
                Who are we?
            </Heading>
            <Text>James DiGioia - Front-End Developer</Text>
            <Text>Daryl Keeter - Front-End Developer</Text>
        </Slide>
        <Slide>
            <Heading size={3}>
                Disclosures
            </Heading>
            <Text>TKTK</Text>
        </Slide>
        <Slide>
            <Heading size={3}>
                Agenda
            </Heading>
            <List>
                <ListItem>What is the blockchain?</ListItem>
                <ListItem>What is bitcoin?</ListItem>
                <ListItem>Enthusiast perspective</ListItem>
                <ListItem>Skeptic perspective</ListItem>
            </List>
        </Slide>
    </Deck>
)
