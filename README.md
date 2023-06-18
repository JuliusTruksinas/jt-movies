# jt-movies

## Overview

jt-movies is a movie application that allows you to create a list of your favorite movies. You can create an account, find movies you like or discover new movies you haven't heard of before, and make a list of your favorite movies so you can easily find them whenever you want.

You can try out this application by clicking the following URL: https://jt-movies.netlify.app/

## How was this project built?

This application was built using the MERN stack and the popular TMDB API, which has an enormous database of movie data. For authentication, I used the popular npm package "bcrypt", and for authorization, I used JSON web tokens.

## Installation

1. Clone this repository.
2. Go to the "client" folder and run the following commands: "npm install" and "npm run dev". This will start the React app.

I have uploaded the back-end (server) of this project online so you can choose whether to run it locally on your machine or let the front-end send all requests to the URL where the server is uploaded by default. If you want to run the server locally, follow these steps:

1. Go to the config.js file in the "server" folder and change the PORT variable to whatever port you want the server to run on your device.
2. In the "client" folder go to the "config" folder, open the requestOptions.js file and change the requestToServerBaseUrl variable to "http://localhost:${THE_PORT_YOU_CHOSE}", because this variable is used throughout the application to make requests to the server.
3. While being in the "server" folder run the following commands: "npm install" and "npm start".

## Usage

To use this application, simply create an account and start adding movies to your list!
