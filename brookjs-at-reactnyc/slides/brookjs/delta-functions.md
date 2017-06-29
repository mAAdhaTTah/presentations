How do we handle side effects, e.g. APIs, localStorage, cookies, etc.?

_Observables all the way down._

---

#### Example Delta

```js
import { SAVE_BUTTON_CLICK } from '../actions'
import { api } from '../services'

export default function apiDelta(actions$, state$) {
  return state$.sampledBy(actions$.ofType(SAVE_BUTTON_CLICK))
    .switchMap(state => api.saveUser(state.user)
      .map(saveUserSuccess)
      .catch(err => Observable.of(saveUserFail(err)))
    )
}
```

* Concise logic for side effects
* Error handling
* Testable?

---

Deltas can be tested if you mock the services


```js
import curry from 'lodash/curry';
import { SAVE_BUTTON_CLICK } from '../actions'

export default curry(function apiDelta({ api }, actions$, state$) {
  return state$.sampledBy(actions$.ofType(SAVE_BUTTON_CLICK))
    .switchMap(state => api.saveUser(state.user)
      .map(saveUserSuccess)
      .catch(err => Observable.of(saveUserFail(err)))
    )
})
```

note:
we use curry so we can supply the services in advance

---

```js
describe('apiDelta', () => {
  it('should save user', () => {
    const services = { api: { saveUser: spy() } }
    const actions$ = Observable.create( /* function */)
    const state$ = Observable.create( /* function */)

    const next = spy();
    const error = spy();

    apiDelta(services, actions$, state$).subscribe({
      next,
      error,
      complete() {
        // validate spies
      }
    })
  })
})
```
