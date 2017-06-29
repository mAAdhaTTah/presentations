Cycle.js is a pure function

```javascript
function main(sources) {
  const input$ = sources.DOM.select('.field').events('input')
  const name$ = input$.map(ev => ev.target.value).startWith('')
  const vdom$ = name$.map(name => div([
    label('Name:'),
    input('.field', {attrs: {type: 'text'}}),
    hr(),
    h1('Hello ' + name),
  ]))

  return { DOM: vdom$ }
}
```

---

Observables are passed to `main`

Observables are return from `main`

Observables wrap side effects

_Observables all the way down_
