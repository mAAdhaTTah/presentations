---
name: "arrays-of-events"
x: "1500"
y: "-1500"
rotate: "-180"
---
## Arrays of Events

* The stream is an array, but its values arrive _over time_.
  * "push-based collection"
  * Lazy iteration
* We can manipulate a set of streams like we would a set of arrays
    * More powerful
* Streams also terminate
    * When you unsubscribe, event listener is removed

```javascript
const values$ = events$.map(e => e.target.value);
values$.subscribe(value => console.log('Updated value', value));

const long$ = values$.filter(value => value.length > 10);
long$.subscribe(value => console.log(`${value} is long enough`));

const short$ = values$.filter(value => value.length <= 10);
short$.subscribe(value => console.log(`${value} is too short`));

const reduce$ = events$.reduce((acc, e) => acc + e.target.value, '');
reduce$.subscribe(value => console.log(value));
```
