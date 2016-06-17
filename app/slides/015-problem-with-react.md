---
name: "problem-with-react"
x: "1275"
y: "1600"
scale: ".5"
---

## The Problem with React

`React | Streams === false`

Have to pass callbacks around your application

From the Redux docs:

```javascript
React.createClass({
  render: function render() {
    // Injected by react-redux:
    let { todos, dispatch } = this.props

    // Here’s a good use case for bindActionCreators:
    // You want a child component to be completely unaware of Redux.

    let boundActionCreators = bindActionCreators(TodoActionCreators, dispatch)
    console.log(boundActionCreators)
    // {
    //   addTodo: Function,
    //   removeTodo: Function
    // }

    return (
      <TodoList todos={todos}
                {...boundActionCreators} />
    )

    // An alternative to bindActionCreators is to pass
    // just the dispatch function down, but then your child component
    // needs to import action creators and know about them.

    // return <TodoList todos={todos} dispatch={dispatch} />
  }
});
```
