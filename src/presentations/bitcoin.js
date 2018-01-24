import React from 'react'
import { DarkTheme } from '../themes'
import { Deck, Slide, Heading, Text, List, ListItem, Image, Appear } from 'spectacle'

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
        <Slide>
            <Heading size={3}>
                What is the blockchain?
            </Heading>
            <List>
                <ListItem>A public ledger <Appear><List><ListItem textSize={32}>Records or transactional data (blocks)</ListItem></List></Appear></ListItem>
                <ListItem>Decentralized <Appear><List><ListItem textSize={32}>No centralized control of the ledger</ListItem></List></Appear></ListItem>
                <ListItem>Distributed <Appear><List><ListItem textSize={32}>No single point of failure</ListItem></List></Appear></ListItem>
            </List>
        </Slide>
        <Slide>
            <Image src="https://www.ibm.com/cloud/garage/images/architecture/blockchain-build.png"></Image>
        </Slide>
        <Slide>
            <List>
                <Image width={960} height={536} src="https://media2.giphy.com/media/HStDYzYFt2Lh6/giphy-downsized.gif"></Image>
            </List>
        </Slide>
        <Slide>
            <Heading size={3}>
                What is blockchain used for?
            </Heading>
            <List>
                <ListItem textSize={40}>Smart Contracts <Appear><List><ListItem textSize={32}>Execute when conditions are met</ListItem></List></Appear></ListItem>
                <ListItem textSize={40}>Governance <Appear><List><ListItem textSize={32}>Record voting and election data</ListItem></List></Appear></ListItem>
                <ListItem textSize={40}>Identity management <Appear><List><ListItem textSize={32}>Identity and ownership</ListItem></List></Appear></ListItem>
                <ListItem textSize={40}>Peer-to-Peer digital payments<Appear><List><ListItem textSize={32}>Bitcoin</ListItem></List></Appear></ListItem>
            </List>
        </Slide>
    </Deck>
)
