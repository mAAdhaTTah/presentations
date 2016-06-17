---
name: "what-we-have-so-far"
x: "3750"
y: "2000"
rotate: "-90"
scale: ".5"
---
## What we have so far

Some of the wrapper declarations for streaming

```javascript
import { component } from 'brookjs';
import SubComponent, { SUBCOMPONENT_SELECTOR, SUBCOMPONENT_CLICK } from './subcomponent';

export const PARENT_CLICK = 'PARENT_CLICK';

export default component({
    subcomponents: [
        {
            factory: SubComponent,
            selector: SUBCOMPONENT_SELECTOR,
            adapter: ({ headline }) => ({ text: headline }),
            preplug: stream => stream
                .map(mapActionTo(SUBCOMPONENT_CLICK, PARENT_CLICK))
        }
    ],
    events: {
        onInput: valueEvent
    },
    render: function render({ el }, state, update) {
        if (state.disabled !== update.disabled) {
            el.classList.add('disabled');
        }
    }
});
```

```markup
{{!-- index.hbs --}}
<div class="main">
    <input type="text" data-selector="component" data-brk-event="input:onInput" />

    {{> subcomponent}}
</div>
```
