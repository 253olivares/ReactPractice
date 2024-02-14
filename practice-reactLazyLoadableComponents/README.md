# React Lazy Loadable Components

React practice module to study a different method of using lazy through loadable Components.

Why not Lazy Loading?
Lazy loading was create by the react team to handle client side render ad thus currently does not work for server side rendering. For this a different solution has to be utilized.

\*Reason why lazy doesn't work is because React Suspense can not be used server side.

Instead of lazy we are going to utilize Loadable Components:

https://github.com/gregberge/loadable-components

A very flexible alternate to lazy. Only reason to use lazy over Loadable is due to react developer support and the application will not use server side rendering.
