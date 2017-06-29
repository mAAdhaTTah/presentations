---
name: "handlebars"
x: "400"
y: "1000"
scale: ".25"
---
## Handlebars `{{}}++`

* Mustache superset
  * All of the above features
* Partial variables
* Block and inline helpers

```markup
{{!-- index.hbs --}}
<div class="container">
    <ul class="projects">
        {{#each products}}
            {{> product product=this}}
        {{/each}}
    </ul>
</div>

{{!-- product.hbs --}}
<li class="project">
    {{product.id}} - {{product.name}}: {{currency product.price}}
</li>
```

* We can know in advance how a particular data change will impact the DOM
  * [Intended by the Handlebars creator](https://gist.github.com/wycats/8116673)
  * Can we borrow from the work HTMLBars is doing?
    * No partial syntax support :(
