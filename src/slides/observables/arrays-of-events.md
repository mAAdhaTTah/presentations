* An array whose values arrive _over time_
* Convert inputs into data
* Self-cleaning

note:
"push-based" collection
When you unsubscribe, event listener is removed

---

```javascript
const values$ = events$.map(e => e.target.value)
values$.subscribe(value => console.log('Updated value', value))

const long$ = values$.filter(value => value.length > 10)
long$.subscribe(value => console.log(`${value} is long enough`))

const short$ = values$.filter(value => value.length <= 10)
short$.subscribe(value => console.log(`${value} is too short`))

const reduce$ = events$.scan((acc, e) => acc + e.target.value, '')
reduce$.subscribe(value => console.log(value))
```

note:
`scan` vs. `reduce`
- every intermediate value vs. last value on end

---

Observables simplify dealing with events over time

JavaScript is **all about** events over time
