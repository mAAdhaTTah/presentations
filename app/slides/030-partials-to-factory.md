---
name: "partials-to-factory"
x: "5200"
y: "1450"
rotate: "-90"
---
* Directly match partials to factory
  * Eliminate need for selectors
  * Template compilation knows where the child exists

```javascript
import { component } from 'brookjs';

export default component({
    partials: {
        subcomponent: {
            factory: SubComponent,
            adapter: ({ headline }) => ({ text: headline }),
            // Composeable framework function.
            preplug: component.mapActionTo(SUBCOMPONENT_CLICK, PARENT_CLICK)
        }
    },
    events: {
        onInput: valueEvent
    },
    template: component.template
`<div class="main">
    <input type="text" data-selector="component" data-brk-event="input:onInput" />

    {{> subcomponent}}
</div>`,
});
```
