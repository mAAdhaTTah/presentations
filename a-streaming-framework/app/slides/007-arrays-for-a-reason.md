---
name: "arrays-for-a-reason"
x: "1275"
y: "-500"
rotate: "-225"
---
We started by talking about arrays for a reason

## Real-World Example: Stream of Events

Standard event listener:
```javascript
const input = document.querySelector('input');

input.addEventListener('input', e => console.log('Updated value', input.value));
```

Observable:
```javascript
const events$ = Observable.fromEvent(document.querySelector('input'), 'input');

events$.subscribe(e => console.log('Updated value', input.value));
```

* Looks basically the same, right?
* What's so special about that?
