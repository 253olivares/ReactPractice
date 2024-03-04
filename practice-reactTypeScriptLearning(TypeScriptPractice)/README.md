# React Introduction to TypeScript

For this module we are learning typescript for react. Typescript is a compositor for javascript and allows us to write more tightly made code.

For example typescript helps us prevent passing invalid data types into a function we create that is specified to run and function around a type.

ex:

Function that takes in a bool

function(x) {
return x;
}

We can pass anything into our function a bool, number, array, string

TypeScript:

function (x:string):string => {
return x;
}

Our function can only take in strings and return a string.

In this module I am following along with Dave Gray video to learn incorporating TypeScript in react.

Link to video:
[https://www.youtube.com/watch?v=xTVQZ46wc28](https://www.youtube.com/watch?v=xTVQZ46wc28)
