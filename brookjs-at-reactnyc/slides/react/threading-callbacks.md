We can start simple ...

```javascript
export default ({ props }) => (
  <button onClick={props.onButtonClick}>
    {props.text}
  </button>
)
```

---

... but now we have to thread the callback ...

```javascript
export default ({ props }) => (
  <div className="subscribe">
    <InputField type="email"
        value={props.email}
        onTextChange={props.onEmailChange} />
    <Button text="Submit"
        onButtonClick={props.onSubscribeClick} />
  </div>
)
```

---

... across a couple levels.

```javascript
export default ({ props }) => (
  <div className="modal">
    <Content>
    <Subscription onEmailChange={dispatchModalEmailChange}
        onSubscribeClick={dispatchModalSubscribeClick}
        email={prop.subscribeEmail} />
  </div>
)
```

---

**Passing around callbacks is painful.**

* Manual
* Tedious
* Prone to user error & refactoring woes
  * Or every component has a direct line into the store

Component composition: bottom up or top down? Both :(

Event emitters have the same problem - need to wire up each intermediate step
