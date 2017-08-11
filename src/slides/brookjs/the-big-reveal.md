# Drumroll
# Please

---

```js
export default function MyComponent(el, props$) {
  const events$ = Observable.fromEvent('click', el).map(() => ({ type: 'CLICK' })))
  const render$ = props$.switchMap(props => render(el, props))

  return Observable.merge([
    events$,
    render$
  ])
}
```

At its core, this is the mental model for a `brookjs` component

---

### Example Component

```js
export default component({
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
})
```

```handlebars
<div class="form" {{#container "form"}}>
    <input type="text" value="{{{text}}}" {{#event "onInput"}}>
    {{> button/index }}
</div>
```

note:
Handlebars template: we know what will change

Everything else is a function that accepts and returns streams
