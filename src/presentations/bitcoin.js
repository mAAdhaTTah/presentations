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
            <Image src={require('./blockchain-build.png')} />
        </Slide>
        <Slide>
            <List>
                <Image width={960} height={536} src={require('./network.gif')} />
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
        <Slide>
            <Heading size={3}>So....</Heading>
            <Appear><Heading size={3}>what is bitcoin then?</Heading></Appear>
        </Slide>
        <Slide>
            <Text>Blockchain is a distributed ledger</Text>
            <Text>Bitcoin is a currency built on top of this ledger</Text>
        </Slide>
        <Slide>
            <Text>Individuals have wallets on Bitcoin's blockchain</Text>
            <Text>This validates that a user controls a particular account on the ledger</Text>
            <Appear>
                <Text>Think private key vs public key</Text>
            </Appear>
            <Appear>
                <Text>Private key - wallet itself</Text>
            </Appear>
            <Appear>
                <Text>Public key - wallet address</Text>
            </Appear>
        </Slide>
        <Slide>
            <Text>When I want to send money to a wallet address,</Text>
            <Text>the software bundles that transaction with other transactions into a block.</Text>
            <Text>The network validates the block, cryptographically linking it to the previous block.</Text>
        </Slide>
        <Slide>
            <Heading size={4}>Every transaction has to be validated by the network</Heading>
        </Slide>
        <Slide>
            <Heading size={3}>So where does bitcoin come from?</Heading>
        </Slide>
        <Slide>
            <Image src={require('./miners.jpg')} />
        </Slide>
        <Slide>
            <List>
                <ListItem>Miners are computers that compute the cryptographic link between blocks</ListItem>
                <Appear><ListItem>Network validates that the result is correct</ListItem></Appear>
                <Appear><ListItem>Once network validates, block is added to the chain</ListItem></Appear>
            </List>
        </Slide>
        <Slide>
            <Heading size={4}>Miners are rewarded with a bitcoin for this computation</Heading>
        </Slide>
        <Slide>
            <Image src={require('./blockchain.jpg')} />
        </Slide>
        <Slide>
            <Text>The difficulty calculating this link is what limits the number of bitcoin</Text>
            <Text>The Bitcoin network has a hard cap on number of bitcoin that can be mined</Text>
            <Text>This scarcity is what gives them their value</Text>
        </Slide>
    </Deck>
)
