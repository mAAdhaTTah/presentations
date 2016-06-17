---
name: "virtual-dom-example"
x: "550"
y: "1675"
scale: ".5"
rotate: "90"
---
```javascript
var h = require('virtual-dom/h');
var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');
var createElement = require('virtual-dom/create-element');

// 1: Create a function that declares what the DOM should look like
function render(count)  {
    // This could be a compile target. That's how JSX works.
    // But JSX requires JavaScript. What else could we use?
    return h('div', {
        style: {
            textAlign: 'center',
            lineHeight: (100 + count) + 'px',
            border: '1px solid red',
            width: (100 + count) + 'px',
            height: (100 + count) + 'px'
        }
    }, [count + '']);
}

// 2: Initialise the document
var count = 0;      // We need some app data. Here we just store a count.

var tree = render(count);               // We need an initial tree
var rootNode = createElement(tree);     // Create an initial root DOM node ...
document.body.appendChild(rootNode);    // ... and it should be in the document

// 3: Wire up the update logic
setInterval(function () {
      count++;

      var newTree = render(count);
      var patches = diff(tree, newTree);
      rootNode = patch(rootNode, patches);
      tree = newTree;
}, 1000);
```
