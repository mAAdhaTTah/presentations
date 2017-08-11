## Redux + unidirectional data

---

Functional state changes make me happy

No surprises!

```javascript
function reducer(state = 0, action) {
  switch (action.type) {
    case 'CLICK':
      return state + 1
    default:
      return state
  }
}
```

Pure function and testable!
