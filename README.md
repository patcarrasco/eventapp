# Eventapp

A simple concert and sporting event discovery tool created with Rails, React, Google Maps and Firebase

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## Technologies
Created with:
* React
* Rails
* React-Native
* Semantic-UI
* Firebase
* Google Maps
* Ticketmaster
* Redux

## Setup
To run you'll need to create an app in firebase, as well as have a google maps api key and ticketmaster discovery api key.

Clone and install front-end dependencies using yarn or npm:
```
$ cd eventapp/web-frontend
$ npm install
```
Install backend dependencies with bundler:
```
$ cd eventapp/backend
$ bundle install
```
In rails, open the credentials editor and add your firebase key as well as your ticketmaster api key:
```
firebase:
    key:{
        ...key
    }

ticketmaster:
    "key": key
    "secret": secret
```

Once dependencies have been installed, create an .env file with your server API URL and the Google Maps API key:
```
REACT_APP_ROOT_URL=api_url
REACT_APP_GOOGLE_MAPS_API_KEY=key
```
