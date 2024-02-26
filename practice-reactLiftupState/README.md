# React Listing Up State

This coding practice is best utilized in react projects when we have states that need to be shared between components. For example we have two components that need to access the same show state. Instead of creating these states within the child components we move these states up to the parent component. Then pass down the state and set state as props. This allows ur to make changes to hte state from within our child component that will impact other sister components in the dom tree.

Lifting up state documentation:
[https://react.dev/learn/sharing-state-between-components](https://react.dev/learn/sharing-state-between-components)
