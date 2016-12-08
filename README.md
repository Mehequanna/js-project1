## Project Name
Github User Lookup

## Features
This app will allow the user to search a name in github and return that username's details.

![screenshot of project](github.png)

##Technologies
JavaScript/JQuery, CSS/SASS, Node JS, NPM, Gulp, Bower, GitHub API

## Usage
To use the code, you can clone the repository at: [https://github.com/mehequanna/js-project1](https://github.com/mehequanna/js-project1).
* $ git clone https://github.com/mehequanna/js-project1
* $ cd js-project1

##NPM and Bower Dependency Installation
* In terminal and the project directory, run: $ npm install
* Then run: $ bower install
* Save your GitHub APIKey in the .env file (See below)
* Finally run: $ gulp serve

##API Key Instructions

##GitHub - Generating the Token
You will need a Personal Access Token for this app to work.
* Go to Github and sign in.
* Click on avatar at the top right next to the "+".
* Click Settings
* At the bottom of the left hand menu, click Personal access tokens
* Click Generate new token
* Give the token a description
* Don't select any options and click Generate token.

##Project Folder
* Open your project folder
* In the top level of your directory, create a file called, ".env"
* In the .env file, add the line: exports.apiKey = "YOUR_API_KEY_HERE";
* Save the file

## Author
Stephen Emery

##License
This work can be used under the MIT License.
Copyright (c) 2016 Stephen Emery
