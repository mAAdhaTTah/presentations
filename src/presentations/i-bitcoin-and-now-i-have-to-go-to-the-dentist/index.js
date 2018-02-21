import React from 'react'
import { DarkTheme } from '../../themes'
import { ThankYou } from '../../slides'
import { Deck, Slide, Heading, Text, List, ListItem, Image, Appear,
    Quote, BlockQuote, Cite } from 'spectacle'

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
            <Text>James - ~$100 in bitcoin currently</Text>
            <Text>Daryl - ~$850 in bitcoin currently</Text>
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
        <Slide>
            <Heading>Blockchain, the good</Heading>
        </Slide>
        <Slide>
            <List>
                <ListItem>Immutable History<Appear><List><ListItem textSize={32}>What goes in the blockchain, stays in the blockchain</ListItem></List></Appear></ListItem>
                <ListItem>Transparent History<Appear><List><ListItem textSize={32}>Auditable. Anyone can view at any time</ListItem></List></Appear></ListItem>
                <ListItem>Secure<Appear><List><ListItem textSize={32}>Cryptographically and architecturally</ListItem></List></Appear></ListItem>
                <Appear><ListItem>It's only the beginning!</ListItem></Appear>
            </List>
        </Slide>
        <Slide>
            <Heading>Bitcoin, the good</Heading>
        </Slide>
        <Slide>
            <List>
                <ListItem>Users are anonymous<Appear><List><ListItem textSize={32}>No personal data needed for transfer. No taxes.</ListItem></List></Appear></ListItem>
                <ListItem>No third party involvement<Appear><List><ListItem textSize={32}>No banks. Transactions/accounts can't be frozen.</ListItem></List></Appear></ListItem>
                <ListItem>Send/Receive worldwide</ListItem>
                <ListItem>Benefits for merchants<Appear><List><ListItem textSize={32}>No reversals. No limits.</ListItem></List></Appear></ListItem>
            </List>
        </Slide>
        <Slide>
            <Heading size={4} fill>The Skeptic Perspective</Heading>
            <Heading size={5} fit>Blockchain & Bitcoin is not a revolution</Heading>
        </Slide>
        <Slide>
            <Heading size={5} fill>Blockchain</Heading>
            <List>
                <ListItem>Blockchain hasn't proven to be useful outside of "currency"</ListItem>
                <Appear><ListItem>Computing new blocks on the Blockchain is expensive</ListItem></Appear>
                <Appear><ListItem>For many use cases, distributed isn't a feature</ListItem></Appear>
            </List>
        </Slide>
        <Slide>
            <Heading size={5} fill>Bitcoin</Heading>
            <List>
                <ListItem>Bitcoin isn't a currency, it's a commodity</ListItem>
                <Appear><ListItem>Bitcoin & cryptocurrencies are currently in a bubble</ListItem></Appear>
                <Appear><ListItem>A unregulated market is a bug, not a feature</ListItem></Appear>
            </List>
        </Slide>
        <Slide>
            <BlockQuote>
                <Quote textColor={'secondary'} textSize={30}>Bitcoin was supposed to demonstrate the power of a true free market... it's full of scams, rent-seekers, theft, useless for real purchases and accelerates climate change. Mission accomplished.</Quote>
                <Cite>Adam Chalmers</Cite>
            </BlockQuote>
        </Slide>
        <Slide>
            <Heading size={1} textSize={60}>Bitcoin is a technological solution to a political problem, and is emblematic of Silicon Valley's disinterst in doing the hard work of politics.</Heading>
        </Slide>
        {ThankYou()}
    </Deck>
)
