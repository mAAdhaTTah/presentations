import React from 'react'
import {
    Slide,
    Deck,
    Heading,
    List,
    ListItem,
    Code,
    Text,
    CodePane,
    Appear,
} from 'spectacle'
import { DarkTheme } from '../../themes'
import { AboutMe, ThankYou } from '../../slides'

const personInterface = `interface Person {
    firstName: string;
    lastName: string;
    address?: Address;
    speak?: () => void;
    pets?: string[]
}`

const addressInterface = `interface Address {
    street: string;
    apt?: string;
    city: string;
    state: State;
    zip: number;
}`

const stateInterface = `interface State {
    displayName: string;
    code: string;
}`

const personAccess = `const zip = person.address?.zip;`
const personIndex = `const firstPet = person.pets?.[0];`
const personCall = `person.speak?.();`

const defaultPets = `const pets = person.pets ?? [];`

const petCountFallback = `const petCountDisplay = person.pets?.length ?? 'Pets not provided'`

const complicatedPresenceCheck = `const c = a && a.b && a.b.c`
const simplifiedPresenceCheck = `const c = a?.b?.c`

const overusedChaining = `const zip = person?.address?.state?.displayName;`

const aptDefault = `const apt = person.address?.apt ?? 'No apt provided'`

export default () => {
    return (
        <Deck transitionDuration={500} theme={DarkTheme} transition={['slide']}>
            <Slide>
                <Heading size={1} lineHeight={1} textColor={'secondary'}>
                    Optional Chaining (<Code>?.</Code>) and Nullish Coalescing (
                    <Code>??</Code>)
                </Heading>
            </Slide>
            {AboutMe()}
            <Slide transition={['slide']}>
                <Heading size={2} lineHeight={1} textColor={'secondary'}>
                    Agenda
                </Heading>
                <List>
                    <ListItem>What is this new syntax?</ListItem>
                    <ListItem>How do they work together?</ListItem>
                    <ListItem>What's the best way to use them?</ListItem>
                </List>
            </Slide>
            <Slide>
                <Heading size={2} lineHeight={1} textColor={'secondary'}>
                    Nullish
                </Heading>
                <Text>
                    <em>adj.</em>
                </Text>
                <Text>
                    <Code>null</Code> or <Code>undefined</Code>
                </Text>
            </Slide>
            <Slide>
                <Heading size={2} lineHeight={1} textColor={'secondary'}>
                    What is this new syntax?
                </Heading>
            </Slide>
            <Slide>
                <Heading size={3} lineHeight={1} textColor={'secondary'}>
                    Optional Chaining
                </Heading>
                <Text>
                    Optional Chaining allows a developer to handle many cases of
                    nested, potentially nullish values.
                </Text>
                <Appear>
                    <Text>
                        If the left-hand side of the operator is null or
                        undefined, then the operator "short-circuits" and
                        returns <Code>undefined</Code> immediately. Otherwise,
                        continue with the chain.
                    </Text>
                </Appear>
            </Slide>
            <Slide>
                <Heading size={3} lineHeight={1} textColor={'secondary'}>
                    Example
                </Heading>
                <CodePane source={personInterface} lang="ts" />
                <Appear>
                    <CodePane source={addressInterface} lang="ts" />
                </Appear>
                <Appear>
                    <CodePane source={stateInterface} lang="ts" />
                </Appear>
            </Slide>
            <Slide>
                <Heading size={3} lineHeight={1} textColor={'secondary'}>
                    Example
                </Heading>
                <CodePane source={personAccess} lang="js" />
                <Appear>
                    <CodePane source={personIndex} lang="js" />
                </Appear>
                <Appear>
                    <CodePane source={personCall} lang="js" />
                </Appear>
            </Slide>
            <Slide>
                <Heading size={3} lineHeight={1} textColor={'secondary'}>
                    Nullish Coalescing
                </Heading>
                <Text>
                    Nullish Coalescing allows a developer to provide a default
                    value for potentially nullish values.
                </Text>
                <Appear>
                    <Text>
                        If the left-hand side of the operator is{' '}
                        <Code>null</Code> or
                        <Code>undefined</Code>, then the right hand side of the
                        operator is returned.
                    </Text>
                </Appear>
            </Slide>
            <Slide>
                <Heading size={3} lineHeight={1} textColor={'secondary'}>
                    Example
                </Heading>
                <CodePane source={defaultPets} lang="js" />
            </Slide>
            <Slide>
                <Heading size={2} lineHeight={1} textColor={'secondary'}>
                    How do they work together?
                </Heading>
            </Slide>
            <Slide>
                <Text>
                    These two features were tied together to enable developers
                    to access deeply nested properties and provide reliable
                    fallbacks if they're not available.
                </Text>
            </Slide>
            <Slide>
                <Heading
                    size={3}
                    lineHeight={1}
                    textColor={'secondary'}
                    margin={'1em 0'}
                >
                    (Contrived) Example
                </Heading>
                <CodePane source={petCountFallback} lang="js" />
            </Slide>
            <Slide>
                <Heading size={2} lineHeight={1} textColor={'secondary'}>
                    How should we use this?
                </Heading>
            </Slide>
            <Slide>
                <Heading size={3} lineHeight={1} textColor={'secondary'}>
                    Best Practices
                </Heading>
                <List>
                    <ListItem>
                        <strong>DO</strong>: Use Optional Chaining to simplify
                        your presence checks.
                    </ListItem>
                    <ListItem>
                        <strong>DON'T</strong>: Use Optional Chaining on every
                        access "for protection".
                    </ListItem>
                    <ListItem>
                        <strong>DO</strong>: Use Nullish Coalescing when falsey
                        values should be retained.
                    </ListItem>
                    <ListItem>
                        <strong>DON'T</strong>: Expect Nullish Coalescing to
                        provide defaults for empty strings and 0.
                    </ListItem>
                </List>
            </Slide>
            <Slide>
                <Heading
                    fit
                    size={4}
                    lineHeight={1}
                    textColor={'secondary'}
                    margin={'1em 0'}
                >
                    DO: Use Optional Chaining to simplify your presence checks.
                </Heading>
                <CodePane source={complicatedPresenceCheck} lang="js" />
                <CodePane source={simplifiedPresenceCheck} lang="js" />
                <Text>Look at that readability!</Text>
            </Slide>
            <Slide>
                <Heading
                    fit
                    size={4}
                    lineHeight={1}
                    textColor={'secondary'}
                    margin={'1em 0'}
                >
                    DON'T: Use Optional Chaining on every access "for
                    protection".
                </Heading>
                <CodePane source={overusedChaining} lang="js" margin={'1em 0'} />
                <Text>What's "nullish" here? Not everything!</Text>
            </Slide>
            <Slide>
                <Heading
                    fit
                    size={4}
                    lineHeight={1}
                    textColor={'secondary'}
                    margin={'1em 0'}
                >
                    DO: Use Nullish Coalescing when falsey values should be
                    retained.
                </Heading>
                <CodePane source={petCountFallback} lang="js" margin={'1em 0'} />
                <Text>We definitely want to maintain "0" here.</Text>
            </Slide>
            <Slide>
                <Heading
                    fit
                    size={4}
                    lineHeight={1}
                    textColor={'secondary'}
                    margin={'1em 0'}
                >
                    DON'T: Expect Nullish Coalescing to provide defaults for
                    empty strings and 0.
                </Heading>
                <CodePane source={aptDefault} lang="js" />
                <Text>
                    An empty string should fall back. Use <Code>||</Code>.
                </Text>
            </Slide>
            {ThankYou()}
        </Deck>
    )
}
