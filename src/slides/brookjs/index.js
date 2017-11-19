import React from 'react'
import { Slide, Markdown, Heading, Text, Code, CodePane, Notes, Image } from 'spectacle'
import architecture from './architecture.png'
import mdCurrentStatus20170626 from './current-status-2017-06-26.md'
import mdFutureFeatures20170626 from './future-features-2017-06-26.md'
import mdGetInvolved from './get-involved.md'
import mdReactPlusCycleJs from './react+cycle.js.md'

export const ApplicationBootstrapping = () => [
    <Slide>
        <CodePane lang={'js'} source={`import { createStore, combineReducers } from 'redux'
import { domDelta } from 'brookjs'
import { init } from './actions'
import { userDelta } from './delta'
import { el, view } from './dom'
import { user } from './reducer'
import { selectProps } from './selector'
import { api } from './service'

const { __INITIAL_STATE__ } = global

const store = createStore(
    combineReducers({ user }),
    __INITIAL_STATE__,
    applyDelta(
        domDelta({ el, selectProps, view }),
        userDelta({ api })
    )
)

store.dispatch(init())`} />
    </Slide>,
    <Slide>
        <Text>Application Architecture</Text>
        <Image src={architecture} alt={'app architecture'}/>
    </Slide>
]

export const CurrentStatus20170626 = () => (
    <Slide transition={['slide']}>
        <Notes>
            <p>Documentation should cover everything, but ive written it all myself</p>
            <p>Could certainly use some eyeballs</p>
        </Notes>
        <Markdown>{mdCurrentStatus20170626}</Markdown>
    </Slide>
)

export const DeltaFunctions = () => [
    <Slide>
        <Markdown>{`How do we handle side effects, e.g. APIs, localStorage, cookies, etc.?

_Observables all the way down._`}</Markdown>
    </Slide>,
    <Slide>
        <Heading size={4}>Example Delta</Heading>
        <CodePane lang={'js'} source={`import { ofType, Kefir } from 'brookjs'
import { SAVE_BUTTON_CLICK } from '../actions'
import { api } from '../services'

export default function apiDelta(actions$, state$) {
  return state$.sampledBy(actions$.thru(ofType(SAVE_BUTTON_CLICK)))
    .flatMapLatest(state => api.saveUser(state.user)
      .map(saveUserSuccess)
      .flatMapErrors(err => Kefir.constant(saveUserFail(err)))
    )
}`} />
        <Markdown>{`* Concise logic for side effects
* Error handling
* Testable?`}</Markdown>
    </Slide>,
    <Slide>
        <Notes>
            <p>we use curry so we can supply the services in advance</p>
        </Notes>
        <Text>Deltas can be tested if you mock the services</Text>
        <CodePane lang={'js'} source={`import { SAVE_BUTTON_CLICK } from '../actions'

export default ({ api }) => (actions$, state$) =>
  state$.sampledBy(actions$.thru(ofType(SAVE_BUTTON_CLICK)))
    .flatMapLatest(state => api.saveUser(state.user)
      .map(saveUserSuccess)
      .flatMapErrors(err => Kefir.constant(saveUserFail(err)))
    )
)`} />
    </Slide>,
    <Slide>
        <Text>Use <Code>chai-kefir</Code> to test the resulting Observable</Text>
        <CodePane lang={'js'} source={`describe('apiDelta', () => {
  it('should save user', () => {
    const services = { api: { saveUser: sinon.spy(() => Kefir.constant(response)) } }
    const actions$ = stream()
    const state$ = send(prop(), [value(initial)])

    expect(apiDelta(services, actions$, state$)).to.emit([
        value(responseSuccess(response))
    ], () => {
        send(actions$, [value(buttonClick())])
    })
    expect(api.saveUser).to.haveBeenCalledWith(args)
  })
})`} />
    </Slide>
]

export const FutureFeatures20170626 = () => (
    <Slide transition={['slide']}>
        <Markdown>{mdFutureFeatures20170626}</Markdown>
    </Slide>
)

export const GetInvolved = () => (
    <Slide transition={['slide']}>
        <Markdown>{mdGetInvolved}</Markdown>
    </Slide>
)

export const ReactPlusCycleJs = () => (
    <Slide transition={['slide']}>
        <Markdown>{mdReactPlusCycleJs}</Markdown>
    </Slide>
)

export const TheBigReveal = () => [
    <Slide>
        <Heading size={1}>Drumroll</Heading>
        <Heading size={1}>Please</Heading>
    </Slide>,
    <Slide>
        <CodePane lang={'js'} source={`export default function MyComponent(el, props$) {
  const events$ = Kefir.fromEvent('click', el).map(() => ({ type: 'CLICK' })))
  const render$ = props$.flatMapLatest(props => render(el, props))

  return Kefir.merge([
    events$,
    render$
  ])
}`} />
        <Text fit>At its core, this is the mental model for a <Code>brookjs</Code> component</Text>
    </Slide>,
    <Slide>
        <Notes>
            <p>Handlebars template: we know what will change</p>
            <p>Everything else is a function that accepts and returns streams</p>
        </Notes>
        <Heading size={3}>Example Component</Heading>
        <CodePane lang={'js'} source={`export default component({
    children: children({
        button: {
            factory: ButtonComponent,
            preplug: instance$ => instance$.map(() => ({ type: 'FORM_CLICK' }))
        }
    }),
    events: events({
        onInput: event$ => event$.map(event => ({
            type: 'FORM_TEXT_CHANGE',
            payload: { value: event.target.value }
        }))
    }),
    render: render(template)
})`} />
        <Text>Templates are defined with handlebars:</Text>
        <CodePane lang={'handlebars'} source={`<div class="form" {{#container "form"}}>
    <input type="text" value="{{{text}}}" {{#event "onInput"}}>
    {{> button/index }}
</div>`} />
    </Slide>
]
