#### Real-World Example: Stream of Events

Standard event listener:
```javascript
const input = document.querySelector('input')

input.addEventListener('input', e => console.log('Updated value', input.value))
```

Observable:
```javascript
const events$ = Observable.fromEvent(document.querySelector('input'), 'input')

events$.subscribe(e => console.log('Updated value', input.value))
```

* Looks basically the same, right?
* What's so special about that?
