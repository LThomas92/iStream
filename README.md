iStream is an app can watch streams coming from the OBS software. The app is built with React, Redux, JSON Server API and node-media-server npm package. 

Client Side

Holds the React UI and uses Redux for state management for the application. This app also features a Google OAuth authentication which will give you CRUD permissions only if you are logged in. Styling was done with Semantic UI.

To start the react development server. Please enter the following command in your terminal window. 

npm start


Back End API

The backend api data is stored on the JSON Web Server API. In the db.json file. 
To start the Back End API in the backend folder in a terminal window enter the following command

npm start

RTMP Server

The rtmp server hosts the stream from OBS Studio Software which is a program used for most computer streaming activies. 

Start the rtmp server (node-media-server) in a terminal window npm or yarn start

If not installed, Install OBS Studio - https://obsproject.com/ Create a streaming scene then a Source for display.

Change settings for stream - File/Settings/Stream

URL = rtmp://localhost/live
Stream key = 1 -- note, the stream key must match the id of the stream in the client, example: http://localhost:3000/streams/1 would match on stream key 1

The Media Server should be started for this to work.

All 3 Terminals need to be running for the application to work.

