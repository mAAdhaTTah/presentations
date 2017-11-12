```js
import { createStore, combineReducers } from 'redux';
import { domDelta } from 'brookjs';
import { init } from './actions';
import { userDelta } from './delta';
import { el, view } from './dom';
import { user } from './reducer';
import { selectProps } from './selector';
import { api } from './service';

const { __INITIAL_STATE__ } = global;

const store = createStore(
    combineReducers({ user }),
    __INITIAL_STATE__,
    applyDelta(
        domDelta({ el, selectProps, view }),
        userDelta({ api })
    )
);

store.dispatch(init());
```

---

Application architecture

![app architecture](/assets/architecture.png)
