# React Update Functions

React updater function is a coding practice that is utilize to push changes at the time of code execution instead of end of compiling.

This is mostly importing when using states. When calling our state functions reacts run these codes during the life cycle at remount to calculate new values. The issues presented during this is that react does not run each set state as a separate instance but just once.

ex:
count = 0
setCount(count ++); // +1 (Hypothetical logic)
setCount(count ++); // +1 (Hypothetical logic)
setCount(count ++); // +1 (Hypothetical logic)

Output:
count = 1;

React does not run the set count till the end of its cycle.

Updater function:

setCount(count => count + 1);
setCount(count => count + 1);
setCount(count => count + 1);

count = 3

React Documentation:
[https://react.dev/learn/queueing-a-series-of-state-updates](https://react.dev/learn/queueing-a-series-of-state-updates)
