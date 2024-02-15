# React SWR2.0 Tutorial practice

SWR - Stale While Revalidated : HTTPS cache validation method that returns cache data while sending fetch and once our fetch data is validated we return our updated data.

Alternative to fetch and other data fetching apis that we can use to create a back end in our react fullstack development.

For this module we are creating a todo list.

This module is studied by following a SWR guide provided by Dave Gray:

Link to video source - https://www.youtube.com/watch?v=6gb6oyO1Tyg&t=599s

SWR Source: https://swr.vercel.app/

I will begin by replicating a todo list provided in the video above and transfer it over to utilize swr. Main objective is to transfer this current todo app to utilize a new react hook (SWR) for data fetching.

Code not copied to avoid just copying code without learning anything.

_Application requires json server to run to function_

NPM Code to run json Server:
`npx json-server -w data/db.json -p 2500`
