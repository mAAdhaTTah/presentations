---
name: "virtualbars"
x: "650"
y: "1000"
scale: ".5"
---
## Virtualbars

But we don't need to get that high level, necessarily.

* Compile `.hbs` -> `AST` -> `virtual-dom`-returning function

```javascript
it('should compile a block expression', function () {
    const spec = compile('<div>{{#each names}}{{this}}{{/each}}</div>');
    const expected = {
        type: 'div',
        attributes: {},
        children: [{
            type: 'hbs:expression',
            expression: 'block',
            name: 'each',
            context: 'names',
            children: [{
                type: 'hbs:expression',
                expression: 'variable',
                unescaped: false,
                name: 'this'
            }]
        }]
    };

    expect(spec).to.deep.equal(expected);
});
```

We can do this! Declarative DOM with Handlebars.

And we get server-side rendering for free:

* [lightncandy](https://github.com/zordius/lightncandy)
* [Handlebars.java](http://jknack.github.io/handlebars.java/)
