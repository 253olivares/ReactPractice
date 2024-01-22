# React Update Functions

React module to help get accustomed to using updater functions instead of just using setState function. It better to use update functions as react waits till the end of its cycle to run set functions. Using an update functions ensure that the state is updated at the time the set function is called vs updating state at the the app remounts new values.

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
