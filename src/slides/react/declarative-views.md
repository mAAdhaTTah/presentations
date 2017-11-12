#### I love declarative views!

What do I want? vs. How do I get there?

```js
export default ({ props }) => (
    <button className="button"
            onClick={props.handleOnClick}>
        {props.text}
    </button>
)
```

Views as pure functions,

and functions are awesome.

---

Pure functions are testable.

```javascript
import { pureFunction } from '../'

describe('pure function', () => {
  it('should just use its arguments', () => {
    expect(pureFunction('arg1', 'arg2')).to.eql({
      my: 'value'
    })
  })
})
```

Works for views too.

---

#### Tests are the best!

Want to reduce bugs? Prevent regressions? Test your code!
