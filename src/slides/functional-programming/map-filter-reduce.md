### Map, Filter, Reduce

building blocks of functional programming

```javascript
const numbers = [1, 2, 3]

console.log(numbers.map(x => x * x)) // [1, 4, 9]
console.log(numbers.filter(x => x > 1)) // [2, 3]
console.log(numbers.reduce((total, next) => total + next)) // 6

console.log(numbers) // [1, 2, 3]
```

New array is returned from each call

-- Immutable! Pure!
