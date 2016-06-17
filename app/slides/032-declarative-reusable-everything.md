---
name: "declarative-reusable-everything"
x: "4600"
y: "400"
rotate: "-90"
scale: "2"
---
```javascript
import { component } from 'brookjs';

const input = component.event({
    input: valueEvent
});

const subcomponent = component.partial({
    template: SubComponent,
    adapter: ({ headline }) => ({ text: headline }),
    // Composeable framework function.
    preplug: component.mapActionTo(SUBCOMPONENT_CLICK, PARENT_CLICK)
});

const fadeIn = component.animation(function fadeIn(el, state, update) {
    if (update.active === state.active || !update.active) {
        return Observable.never();
    }

    return Observable.stream(emitter => {
        // Do animation.
        // End stream when it finishes

        return function cancel() {
            // Cancel animation loop.
        }
    });
});

/**
 * This can still be simplified to a standard
 * component.hbs file for BE rendering.
 */
const Component = component.template
`<div class="main" ${fadeIn}>
    <input type="text" value="{{value}} ${input}/>

    {{> ${subcomponent}}}
</div>`;

export default Component;
```
