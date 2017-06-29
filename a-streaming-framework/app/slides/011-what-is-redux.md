---
name: "what-is-redux"
x: "2300"
y: "1000"
rotate: "90"
scale: ".5"
---

## What is Redux?

* Global state management

```javascript
const state = {
    email: '',
    products: [
        {
            id: '1234',
            name: 'Bleu de Chanel',
            price: '$100'
        }
    ]
};
```
* Remember lists/records above?
  * Introduce functional programming because the lifeblood of your application is the reducer
  * All your complex logic lives here
  * Pure function: testable, easy to reason about, no mutation of global state

```javascript
function reducer(state = {}, { type, payload = {} }) {
    let update = clone(state); // Does a deep clone

    switch (type) {
        case VALUE_CHANGE:
            update.email = payload.value;
            break;
        default:
            update = state; // Reset to previous state
            break;
    }

    return update;
}
```
