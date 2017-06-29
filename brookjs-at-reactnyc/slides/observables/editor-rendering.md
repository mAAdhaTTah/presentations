* Building a syntax highlighting text editor
* Needed for Gist clone for WordPress
* Need to rerender (with highlighting) in between user typing

---

```javascript
export default function EditorComponent(el, props$) {
    const keyup$ = Observable.fromEvents(el, 'keyup')
    const keydown$ = Observable.fromEvents(el, 'keydown')
    const createRenderStream = props =>
        Observable.create(observer => {
            const loop = requestAnimationFrame(() => {
                // Update the element
                observer.complete()
            })

            return () => cancelAnimationFrame(loop)
        })

    return props$.sampledBy(keyup$.debounce(150))
        .switchMap(props =>
            createRenderStream(props).takeUntil(keydown$)
        )
    }
}
```

---

### A lot going on here, so let's go step by step

---

This is basically what a `brookjs` component is:

```javascript
export default function EditorComponent(el, props$) {

}
```

element + stream of props -> stream of actions

---

Create stream of events

```javascript
const keyup$ = Observable.fromEvents(el, 'keyup')
const keydown$ = Observable.fromEvents(el, 'keydown')
```

---

Observables can just do side effects too

```javascript
const createRenderStream = props =>
    Observable.create(observer => {
        const loop = requestAnimationFrame(() => {
            // Update the element
            observer.complete()
        })

        return () => cancelAnimationFrame(loop)
    })
```

Monadic I/O vs. Streaming I/O (Cycle.js)

Great for sequencing animations

---

And now, the best part:

```javascript
return props$.sampledBy(keyup$.debounce(150))
    .switchMap(props =>
        createRenderStream(props).takeUntil(keydown$)
    )
```
