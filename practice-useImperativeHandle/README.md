# React useImperativeHandle

This ia a react function that serves a purpose of passing state functions up a level in the dom tree. for example we create a counter state in a child statement and want a button from the parent div to change the state value. We would use imperative handle to pass our state function.

This is a really situational function as it is usually not recommended to pass states or state functions upward in our dom tree. Usually data using react is passed downward in our dom tree restricting data from passing back up.
