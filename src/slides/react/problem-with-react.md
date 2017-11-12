### The Problem with React

`React | Streams === false`

Have to pass callbacks around your application

---

From the Redux docs:

```javascript
export default ({ props: { todos, dispatch } }) => {
  const boundActionCreators = bindActionCreators(
    TodoActionCreators,
    dispatch
  )

  return (
    <TodoList todos={todos}
              {...boundActionCreators} />
  )
  // return <TodoList todos={todos} dispatch={dispatch} />
}
```

Note:
* Injected by react-redux
* Here’s a good use case for bindActionCreators:
    You want a child component to be completely unaware of Redux.
* An alternative to bindActionCreators is to pass
    just the dispatch function down, but then your child component
    needs to import action creators and know about them.
