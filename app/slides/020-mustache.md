---
name: "mustache"
x: "250"
y: "1000"
scale: ".25"
---
## Mustache `{{}}`

* Logic-less templating
* Well-defined spec
* Implementations in 25+ languages
  * Cross-language templating

```markup
{{!-- index.mustache --}}
<div class="container">
    <ul class="products">
        {{#products}}
            {{> product}}
        {{/products}}
    </ul>
</div>

{{!-- product.mustache --}}
<li class="product">{{id}} - {{name}}: {{price}}</li>
```

* Support for:
  * Variables
  * List iteration
  * Partials
  * Lamdas
