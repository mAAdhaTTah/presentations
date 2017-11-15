import '../../../node_modules/normalize.css/normalize.css'
import React from 'react'
import { Deck, Heading, Slide, Text, Link, List,
    ListItem, Code, CodePane, Image, Appear } from 'spectacle'
import { DarkTheme } from '../../themes'
import { WhatIsAnObservable, AboutMe, ThankYou } from '../../slides'
import excel from './excel.png'

const html = `<div class="calculator">
    <input type="text" id="first" class="number">

    <select name="operation" id="operation">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
    </select>

    <input type="text" id="second" class="number">

    <div id="result"></div>
</div>`

// language=JavaScript
const code = `const first$ = Kefir.fromEvents(document.getElementById('first'), 'input')
    .map(event => parseInt(event.target.value, 10))

const second$ = Kefir.fromEvents(document.getElementById('second'), 'input')
    .map(event => parseInt(event.target.value, 10))

const operation$ = Kefir.fromEvents(document.getElementById('operation'), 'change')
    .map(event => event.target.value)
    .merge(Kefir.constant('+'))

const result$ = Kefir.combine({ f: first$, s: second$, op: operation$ }, ({ f, s, op }) => {
    if (Number.isNaN(f) || Number.isNaN(s)) {
        return 'ERR'
    }

    switch (op) {
        case '+':
            return f + s
        case '-':
            return f - s
        case '*':
            return f * s
        case '/':
            return f / s
        default:
            return 'ERR'
    }
})

result$.observe(result => { document.getElementById('result').textContent = result })`

const html2 = `<style>
    #block {
        width: 150px;
        height: 150px;
        position: absolute;
        top: 50px;
        left: 50px;
        background-color: black;
        cursor: pointer;
    }
</style>

<div id="block"></div>`

// language=JavaScript
const code2 = `const $block = document.getElementById('block')

const position$ = Kefir.fromEvents($block, 'mousedown')
    .map(e => e.target.getBoundingClientRect())
    .map(rect => ({ top: rect.top, left: rect.left }))
    .flatMap(start =>
        Kefir.fromEvents(document.body, 'mousemove')
            .takeUntilBy(Kefir.fromEvents(document.body, 'mouseup'))
            .map(e => ({
                x: e.movementX,
                y: e.movementY
            }))
            .scan((acc, movement) => ({
                left: acc.left + movement.x,
                top: acc.top + movement.y
            }), start)
    )

position$.observe(pos => {
    $block.style.top = pos.top + 'px'
    $block.style.left = pos.left + 'px'
})`

const combine = `Kefir.combine({ f: first$, s: second$, op: operation$ }, ({ f, s, op }) => {
    if (Number.isNaN(f) || Number.isNaN(s)) {
        return 'ERR'
    }

    switch (op) {
        case '+':
            return f + s
        case '-':
            return f - s
        case '*':
            return f * s
        case '/':
            return f / s
        default:
            return 'ERR'
    }
})`

const takeUntilBy = `Kefir.fromEvents(document.body, 'mousemove')
    .takeUntilBy(Kefir.fromEvents(document.body, 'mouseup'))
    .map(e => ({
        x: e.movementX,
        y: e.movementY
    }))
    .scan((acc, movement) => ({
        left: acc.left + movement.x,
        top: acc.top + movement.y
    }), start)`

export default () => (
    <Deck transition={['slide']} transitionDuration={500} theme={DarkTheme}>
        <Slide bgColor="primary">
            <Heading size={1} fit lineHeight={1} textColor="secondary">
                Understanding Observables by Metaphor
            </Heading>
        </Slide>
        {AboutMe()}
        {WhatIsAnObservable()}
        <Slide>
            <Text>How do we make sense of this?</Text>
        </Slide>
        <Slide>
            <Heading size={2}>Agenda</Heading>
            <List>
                <ListItem>Lets look at Code</ListItem>
                <ListItem>Excel, the Original Reactive App</ListItem>
                <ListItem>Arrays Over Time</ListItem>
                <ListItem>Lets look at Code Again</ListItem>
            </List>
        </Slide>
        <Slide>
            <Heading size={3}>Let's Look at Code</Heading>
        </Slide>
        <Slide>
            <Heading size={4} textColor="secondary">Simple Calculator</Heading>
        </Slide>
        <Slide>
            <CodePane lang="html" source={html} textSize={'1.5rem'} />
        </Slide>
        <Slide>
            <CodePane lang="js" source={code} textSize={'1.2rem'} />
        </Slide>
        <Slide>
            <Heading size={4} textColor="secondary">Drag and Drop</Heading>
        </Slide>
        <Slide>
            <CodePane lang="html" source={html2} textSize={'1.5rem'} />
        </Slide>
        <Slide>
            <CodePane lang="js" source={code2} textSize={'1.5rem'} />
        </Slide>
        <Slide>
            <Heading fit size={2}>Our first metaphor: Excel</Heading>
        </Slide>
        <Slide>
            <Image src={excel} alt="excel"></Image>
        </Slide>
        <Slide>
            <Text margin={'30px 0'}>Cells can be independent values</Text>
            <Text>A1 is "2", B1 is "10"</Text>
        </Slide>
        <Slide>
            <Text fit>Cells can also be formulas dependent on other cells</Text>
            <Text margin={'30px 0'}>C1 is "=SUM(A1, B1)"</Text>
            <Text fit>If A1 or B1 changes, C1 changes in response</Text>
        </Slide>
        <Slide>
            <Text fit margin={'30px 0'}>We can consider Observables the same way</Text>
            <Text><Code textColor="secondary">first$</Code> & <Code textColor="secondary">second$</Code> are Excel cells, holding the value of each input field</Text>
        </Slide>
        <Slide>
            <Text fit>Observables can represent the current data</Text>
            <Text fit margin={'30px 0'}>Data can be derived from other data with functions</Text>
            <Text margin={'30px 0'}>Observables can be combined to create new streams of data</Text>
        </Slide>
        <Slide>
            <Text textSize={'1.25rem'} margin={'0 0 20px'}><Code padding={'0px'} textSize={'1.25rem'} textColor={'secondary'}>combine</Code> (<Code padding={'0px'} textSize={'1.25rem'} textColor="secondary">combineLatest</Code> in RxJS) represents the dependent calculation</Text>
            <CodePane source={combine} lang="js" textSize={'1.5rem'}></CodePane>
        </Slide>
        <Slide>
            <Heading size={3} fit margin={'30px 0'}>It turns your events into data</Heading>
            <Text>Any state in your application can be represented this way</Text>
        </Slide>
        <Slide>
            <Heading size={2} fit>Our second metaphor: Arrays Over Time</Heading>
            <Text>"push-based collection"</Text>
        </Slide>
        <Slide>
            <Text fit margin={'30px 0'}>Push-based: Producer pushes values as they happen</Text>
            <Text>vs.</Text>
            <Text fit margin={'30px 0'}>Pull-based: Consumer pulls values when they can be processed</Text>
            <Text>e.g. generators (<Code padding={'0px'} textColor={'secondary'}>next</Code>)</Text>
        </Slide>
        <Slide>
            <Text>We have collections in JavaScript too</Text>
            <Appear>
                <Text>the array</Text>
            </Appear>
        </Slide>
        <Slide>
            <Text>Values are discrete events</Text>
            <Text margin={'20px 0'}><Code padding={'10px'} textSize={'2rem'} textColor={'secondary'}>--1---2---3--4|</Code>&nbsp;&nbsp;&nbsp;</Text>
            <Text margin={'20px 0'}><Code padding={'10px'} textSize={'2rem'} textColor={'secondary'}>delay(20)</Code></Text>
            <Text margin={'20px 0 40px'}><Code padding={'10px'} textSize={'2rem'} textColor={'secondary'}>----1---2---3--4|</Code></Text>
            <Text><Link href={'http://rxmarbles.com/'} target={'_blank'}>RxMarbles.com</Link></Text>
        </Slide>
        <Slide>
            <CodePane lang={'js'} textSize={'2rem'} source={takeUntilBy} style={{ maxWidth: '500px', paddingBottom: '20p' }}/>
            <Text textSize={'2rem'} margin={'20px 0'}>"Take events from A until I get an event from B"</Text>
        </Slide>
        <Slide>
            <Text><Code padding={'10px'} textSize={'2rem'} textColor={'secondary'}>--m--m----m------m--mmmm---m--m---</Code></Text>
            <Text><Code padding={'10px'} textSize={'2rem'} textColor={'secondary'}>takeUntilBy</Code></Text>
            <Text><Code padding={'10px'} textSize={'2rem'} textColor={'secondary'}>------------------------u---------</Code></Text>
            <Text><Code padding={'10px'} textSize={'2rem'} textColor={'secondary'}>--m--m----m------m--mmmm|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Code></Text>
        </Slide>
        <Slide>
            <Heading size={3}>Coordinating events is simplified</Heading>
        </Slide>
        <Slide>
            <Heading size={3}>Let's Look at Code Again</Heading>
        </Slide>
        <Slide>
            <CodePane lang="js" source={code} textSize={'1.2rem'} />
        </Slide>
        <Slide>
            <CodePane lang="js" source={code2} textSize={'1.5rem'} />
        </Slide>
        <Slide>
            <Text bold margin={'40px'}>Interested in exploring further?</Text>
            <Text textAlign={'left'}>kefir: <Link href={'https://github.com/kefirjs/kefir'}>github.com/kefirjs/kefir/</Link></Text>
            <Text textAlign={'left'}>brookjs: <Link href={'https://github.com/valtech-nyc/brookjs/'}>github.com/valtech-nyc/brookjs/</Link></Text>
        </Slide>
        {ThankYou()}
    </Deck>
)
