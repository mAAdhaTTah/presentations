import React from 'react'
import { Deck, Heading, Slide, List, ListItem, Appear, BlockQuote,
    Quote, Cite, Text, CodePane } from 'spectacle'
import { AboutMe, ThankYou } from '../../slides'
import { DarkTheme } from '../../themes'

const code = {
    enzyme:
`const wrapper = mount(<SomeComponent />)

wrapper.instance().someClassMethod()

expect(wrapper.state()).toEqual({ calledClassMethod: true })`,
    rtl:
`const { container, getByText } = render(<SomeComponent />)

fireEvent.click(getByText('Submit'))

expect(getByText('Submitted')).toBeInTheDocument()`
}

export default () => (
    <Deck transitionDuration={500} theme={DarkTheme} transition={['slide']}>
        <Slide bgColor="primary">
            <Heading size={1} lineHeight={1} textColor="secondary">
                Unit Testing React with Jest & RTL
            </Heading>
        </Slide>
        {AboutMe()}
        <Slide>
            <Heading size={2}>Agenda</Heading>
            <List>
                <ListItem>What is Unit Testing?</ListItem>
                <ListItem>Why Unit Test?</ListItem>
                <ListItem>Unit Testing Principles</ListItem>
                <ListItem>Why Use RTL vs Enzyme?</ListItem>
                <ListItem>Unit Testing a Basic Form Component</ListItem>
            </List>
        </Slide>
        <Slide>
            <Heading size={3} margin={`0 0 30px`}>What is Unit Testing?</Heading>
            <BlockQuote>
                <Quote textSize={'1.5em'} lineHeight={30} textColor="secondary">
                    Unit tests are typically automated tests written and run by
                    software developers to ensure that a section of an
                    application (known as the "unit") meets its design and
                    behaves as intended.
                </Quote>
                <Cite>Wikipedia</Cite>
            </BlockQuote>
        </Slide>
        <Slide>
            <Heading size={3}>Why Unit Test?</Heading>
            <List>
                <Appear><ListItem>Speed up development cycle</ListItem></Appear>
                <Appear><ListItem>More confidence in solution</ListItem></Appear>
                <Appear><ListItem>Documentation of developer intentions</ListItem></Appear>
                <Appear><ListItem>Reduce regression risk</ListItem></Appear>
            </List>
        </Slide>
        <Slide>
            <Heading size={3}>Unit Testing Principles</Heading>
            <List>
                <ListItem>"Units" are ill-defined, so don't stress about it.</ListItem>
                <ListItem>Mock/stub external dependencies as much as makes sense.</ListItem>
                <ListItem>Test a component's API, not its implementation details.</ListItem>
                <ListItem>Achieving 100% coverage in unit tests is rarely a worthwhile goal.</ListItem>
            </List>
        </Slide>
        <Slide>
            <Heading size={4} margin={'0 0 30px'}>
                Good testing is about having confidence in your software.
            </Heading>
        </Slide>
        <Slide>
            <Heading size={3} margin={'0 0 30px'}>Why Use RTL vs Enzyme?</Heading>
            <Text>RTL (react-testing-library) tests components similar to how your users interact with them.</Text>
        </Slide>
        <Slide>
            <Heading size={4} margin={'0 0 30px'}>Enzyme</Heading>
            <CodePane lang="js" source={code.enzyme} textSize={'1.5em'} margin={'0 0 30px'} />
            <Text>This is testing an implementation detail.</Text>
        </Slide>
        <Slide>
            <Heading size={4} margin={'0 0 30px'}>RTL</Heading>
            <CodePane lang="js" source={code.rtl} textSize={'1.5em'} margin={'0 0 30px'} />
            <Text>This tests how a user would see the component.</Text>
        </Slide>
        <Slide>
            <Heading size={3} margin={'0 0 30px'}>Let's TDD a Login Component!</Heading>
            <CodePane textSize={'2em'} source={'npx create-react-app tdd-with-jest'}/>
        </Slide>
        <Slide>
            <Heading size={3} margin={'0 0 30px'}>Requirements</Heading>
            <List ordered>
                <ListItem>Should not submit unless valid email address is provided</ListItem>
                <ListItem>Should not submit unless password is greater than 8 characters</ListItem>
                <ListItem>Should show success message after successful submission</ListItem>
            </List>
            <Text textSize={'3em'}>Let's live code this!</Text>
        </Slide>
        {ThankYou()}
    </Deck>
)
