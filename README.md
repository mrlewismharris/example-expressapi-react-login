# An example React login using Express API

In the future I'll upload a version without the express API aswell, where the script is just accesed via a route.

# At a glance...

## What this is

A simple example of a presentable interface for connecting to an express API and accessing specific routes after token validation.

A few decentralised classes, states and hooks for handling stuff seperately.
  
## What this is not
  
This is not an all in one solution, it requires the React Node.js server and the Express Node.js server. It doesn't necessarily mean it is unusable - but if you slap it into an application (or use it as a template) please understand how it works first.
  
This does not do any validation.
  
This does not contain any form of database connectivity.

# Detailed info

## How it works

This is an example React app built from the npx create-react-app script (as can be seen in public/manifest.json), this is concise and secure, depending on the server.js implimentation of validation (make sure you're using HTTPS for any real world applications! I take no responsibility for any mitm data loss). On the app page the start "token" contains the return of the custom function "useToken", which gets the token from the browser's local storage, if there is no token (user not logged in) then the App will just return the <Login> JSX element, if you need to have a page displayed for guest visitors that isn't the same "login page" then you will need to add routing into the "if (!token) { }" section.
  
The token is set on "Login.js", the form is AJAX using fetch to submit user+pass in POST body (insert obligatory HTTPS importance here) to an express server, which **currently only returns a token and doesn't actually parse or validate the daat**, so edit for whatever backend database and server-side processing you'd like (it's a *feature* of this repo...), then back on App.js sets the token.
  
## What you might want to customize
  
To reuse userdata you might want to add a new route to the Express server which will respond to the given token with specific information such as username, email address, DOB, etc. possibly modify the API routes to fetch specific information with variables to be accessed through the React app in specific tasks.
