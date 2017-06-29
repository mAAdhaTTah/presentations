---
name: "functional-programming"
x: "2500"
y: "150"
scale: ".5"
rotate: "-90"
---
## Functional Programming: Filter, Map, Reduce

Let's start with the "building blocks" of functional programming: `filter`, `map` and `reduce`

```javascript
const numbers = [1, 2, 3];

console.log(numbers.map(x => x * x)); // [1, 4, 9]
console.log(numbers.filter(x => x >1)); // [2, 3]
console.log(numbers.reduce((total, next) => total + next)); // 6

console.log(numbers)// [1, 2, 3]
```

* New array is returned from each call
* Easy way of dealing with list of "records" (plain JS objects with data)
* Pure functions
  * Easy to understand
  * Easy to test
