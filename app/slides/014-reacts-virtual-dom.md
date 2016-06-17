---
name: "reacts-virtual-dom"
x: "1750"
y: "1500"
scale: ".5"
---
## React's Virtual DOM

* Maintain simplified in-memory representation of DOM
* On props change, render new DOM representation in memory
  * **Perf**: In-memory representation is less memory intensive than real DOM
* Compare previous & next representations
  * Create list of patches/changes based on algorithm
  * **Perf:** Minimum required DOM changes
* Apply patches to real DOM

```javascript
React.createClass({
    render: function render() {
        return (
            <div className="email" onClick={this.props.handleOnClick}>
                {this.props.email}
            </div>
        );
    }
});
```
