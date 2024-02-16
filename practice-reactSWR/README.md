# React SWR2.0 Tutorial practice

SWR - Stale While Revalidated : HTTPS cache validation method that returns cache data while sending fetch and once our fetch data is validated we revalidate our data being displayed (basically telling our hook to fetch our data again).

Alternative to fetch and other data fetching apis that we can use to create a back end in our react fullstack development.

Whats the benefit?

For this api we are utilizing a building in feature called optimistic UI which allows us to cut down on api calls and provide a unique and fulfilling user experience.

With opt UI (Optimistic UI) we tell the hook to display our expected data out put while the data is fetching if we are successfully we populate our application with the cache data if not re roll back and provide our previous data.

Whats so beneficial outside of a better user experience is that as long as our opportunistic data is correct we can cut down on api calls but just populating cache data if it is correct. Pretty much client side data handling where all is done is that the data is send to the server so its up to date next login or separate login in in a different browser or instance.

For this module we are creating a todo list.

This module is studied by following a SWR guide provided by Dave Gray:

Link to video source - https://www.youtube.com/watch?v=6gb6oyO1Tyg&t=599s

SWR Source: https://swr.vercel.app/

I will begin by replicating a todo list provided in the video above and transfer it over to utilize swr. Main objective is to transfer this current todo app to utilize a new react hook (SWR) for data fetching.

Code not copied to avoid just copying code without learning anything.

_Application requires json server to run to function_

NPM Code to run json Server:
`npx json-server -w data/db.json -p 2500`
