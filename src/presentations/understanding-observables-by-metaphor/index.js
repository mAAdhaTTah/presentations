import '../../../node_modules/normalize.css/normalize.css'
import React from 'react'
import { Deck, Heading, MarkdownSlides, Slide, Text,
    Link, List, ListItem, CodePane } from 'spectacle'
import { DarkTheme } from '../../themes'
import { WhatIsAnObservable, AboutMe, ThankYou } from '../../slides'
import source2 from './prezi2.md'
import delay from './delay.png'
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
            return \`\${op} is not a valid operation\`
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
        {MarkdownSlides(source2
            .replace('excel.png', excel)
            .replace('delay.png', delay))}
        <Slide>
            <CodePane lang="js" source={code} textSize={'1.2rem'} />
        </Slide>
        <Slide>
            <CodePane lang="js" source={code2} textSize={'1.5rem'} />
        </Slide>
        <Slide maxWidth={1200}>
            <Text bold margin={'40px'}>Interested in exploring further?</Text>
            <Text textAlign={'left'}>kefir: <Link href={'https://github.com/kefirjs/kefir'}>github.com/kefirjs/kefir/</Link></Text>
            <Text textAlign={'left'}>brookjs: <Link href={'https://github.com/valtech-nyc/brookjs/'}>github.com/valtech-nyc/brookjs/</Link></Text>
        </Slide>
        {ThankYou()}
    </Deck>
)
