# Assessing your Routing/AJAX Fu

- The purpose of this exercise is to get you used to being quizzed on _Interview Questions_ commonly asked about Client Side Routing and making AJAX requests from a React application.
- Answers to your written questions will be recorded in _Answers.md_
- This is to be worked on alone but you can use outside resources. You can _reference_ any old code you may have, and the React Documentation, however, please refrain from copying and pasting any of your answers. Try and understand the question and put your responses in your own words. Be as thorough as possible when explaining something.

## Start by forking and cloning this repository.

## Questions - Self Study - You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

[x] Explain the differences between `client-side routing` and `server-side routing`.
[x] What does HTTP stand for?
[x] What does CRUD stand for?
[x] Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
[x] Mention three tools we can use to make AJAX requests.

## Initializing Project - READ THIS CAREFULLY, you have two apps here. A server, and a client.

[x] _ Start by Forking and Cloning this Repo.
[x] _ `cd` into the forked copy.
[x] _ **RUN** `yarn install or npm install` at the root to retrieve all the dependencies for the node server. You will not need to create any react apps here nor will you need to install any other dependencies. You should have all you need in this repo.
[x] _ **LOOK** at all the files you've been given for this project. One important file to note is `server.js`. This file contains an **API** that you are going to be interfacing with. Below is documentation on how to interact with the **API**.
[x] _ **RUN** `yarn start or npm start` to get your API up and running on `http://localhost:3333`. This is the **URL** you're going to need to use within your React app in order to make AJAX requests for data.
[x] _ After your API is up and running, you can open chrome and type in `http://localhost:3333/smurfs`. You should see an Array `[]` with a smurf returned to you. This is an array that your **API** will be using to store our Smurf Data.
[x] _ **LOOK** at your `village` directory and notice it's just a plain ol' React App that we've built using `create-react-app`.
[x] _ **cd** into `village` and run `yarn install or npm install` to retrieve the client side dependencies.
[x] - **RUN** `yarn start or npm start` to fire up your React application.

## Project Description

[x] - The requirements for completion are that you are using AXIOS to `GET` a list of Smurfs that exist on the server && a `POST` to create a new Smurf and save it to the Smurf DB.

[x] - You are to then work on adding a Router to this application by using React Router.

[x] - If you get both of those two requirements finished early. Proceed to the **STRETCH PROBLEM** to try and implement a `PUT`.

## API Design - This is how you'll interface with the API and what is required from every endpoint.

- [Here](http://smurfs.wikia.com/wiki/Category:Smurfs_Characters) is a list of smurf data you can use to create your village.

### GET '/smurfs'

[x] - To retrieve an array all the smurfs in the Smurf DB simply write a get to the endpoint `'/smurfs'`

### POST '/smurfs'

[x] - To add a smurf to the Smurf DB you'll need all three fields.

- Example:

```js
{
  name: 'Sleepy',
  age: 323,
  height: '5cm'
}
```

[x] - If a smurf is created correctly, you should see a response that is an array of smurfs with unique id's assigned to each smurf.

### Router

[x] - Once you've finished your `GET` and `POST` requests go ahead and implement a Router for your components within this application.
[x] - You'll start by wrapping your `root` component in the `Router` component.
[x] - Then declare your routes with `Route`.
[x] - Then make it so you can navigate to your routes using `Link`.
[x] - Create two `routes` in your `App` component, one at `'/'` for your `Smurfs` component, and one at `/smurf-form` for your form.
[x] - Then in your `App` component, create a nav bar that will use `NavLink` to route to your different pages.

## STRETCH PROBLEMS

### HTTP/Axios Stretch Problems

[x] - The following two endpoints are here for you if you'd like to push yourselves a little further.

[x] - **HINT** if you are going to be working on Stretch Problem, you'll need to use that unique `id`.

### DELETE '/smurfs/123', where 123 is the Id of the smurf you want to remove

[x] - For this endpoint to work, all you need is an id sent up as part of the request url.

[x] - If your delete worked, you'll get a list of the smurfs back.

- Example:

```js
// output: `A list of all the smurfs in the Smurf DB will be returned`
[
  {
    name: "Brainy",
    age: 211,
    height: "5cm",
    id: 0
  },
  {
    name: "Smurfette",
    age: 122,
    height: "12cm",
    id: 1
  }
];
```

### PUT '/smurfs/123', where 123 is the Id of the smurf you want to modify

[x] - For this endpoint to work, you'll need an `id` added to the URL, and at least one field to update on the Smurf object. `name` `age` `height`.

- Example:

```js
// input:
{
  id: 1,
  name: Sleepy
}
// output: `A list of all the smurfs in the Smurf DB will be returned`
[{
  name: 'Sleepy',
  age: 30,
  height: '3cm',
  id: 1
}]
```

### Router Stretch Problem

[x] - If a user clicks on a smurf, they should be routed to `/smurf/:id` and a single smurf should be displayed on the page.
[x] - I know this seems like a small task, but you'll have to get crafty with your data and your logic here.
