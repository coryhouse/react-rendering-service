# React Rendering Service
## What's this for?
Imagine you're currently working in a server-side technology like ASP.NET, Ruby, Python, Java, whatever. You'd like to use React, but you need to render [isomorphically](http://nerds.airbnb.com/isomorphic-javascript-future-web-apps/). This is a simple web service that accepts GET requests for the following:

1. Path to the component you'd like to render  
2. Props for the said component (as URL encoded JSON)  

It then returns the resulting HTML. This means you can begin using React with any server-side tech. 

##Get Started

1. npm install
2. npm start
3. Open localhost:3000 at [this address](http://localhost:3000/?module=./components/App&props=%7B%22firstName%22:%22Cory%22,%22lastName%22:%22House%22%7D]) to see the example component render isomorphically.
