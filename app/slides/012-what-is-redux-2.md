---
name: "what-is-redux-2"
x: "2015"
y: "1100"
rotate: "90"
scale: ".5"
---
* When these actions get dispatched into the store, state is modified by the reducer.
* Subscribers then get notified the state has changed

```javascript
store.subscribe(() => {
    component.render(store.getState());
});
```

* We can simplify 1/3 of this diagram
  * "Dispatcher" and "Callbacks" are collapsed into "Store"
  * "Web API" interactions are handled through Store Middleware
  * "Actions" & "Action Creators" are the streams from your UI
  * Reducer function holds application logic
  * Subscribe rerenders React views
