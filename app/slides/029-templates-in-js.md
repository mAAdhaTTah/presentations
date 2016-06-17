---
name: "templates-in-js"
x: "4650"
y: "1450"
rotate: "-90"
---
* Write your templates right into your JavaScript files, JSX-like
  * Using a build tool, template string is compiled to virtual-dom returning function
  * Template string is also extracted to a separate file for server-side rendering
  * Tagged template strings mean don't you actually have precompile JS
    * Can just compile as runtime, but perf hit

```javascript
import { component } from 'brookjs';

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
    template: component.template
`<div class="main">
    <input type="text" data-selector="component" data-brk-event="input:onInput" />

    {{> subcomponent}}
</div>`,
});
```
