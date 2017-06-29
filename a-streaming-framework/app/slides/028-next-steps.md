---
name: "next-steps"
x: "4050"
y: "1450"
rotate: "-90"
---
## Next Steps

* Eliminate render function and import templates from Webpack loader/browserify transform
  * Framework keeps DOM in sync based on handlebars template & data
  * `adapter` function provides some flexibility in data shape from FE vs. BE
    * BE flexibility may be limited in larger, pre-built systems
    * FE can be flexible to BE's needs

```javascript
// This is a virtual-dom returning function
import template from './index.hbs';

export default component({
    template,
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
    }
});
```
