# Ract useCallback Hook

Our React useCallback Hook is used in similar way to useMemo the only difference being useMemo stores values from functions that return values and useCallback stores functions

An ideal use case would be a function we need to pass a custom variable but we dont want it to reload every time the page rerenders. In this case we would utilize useCallback to prevent our function from activating each page rerender whenever a state changes.
