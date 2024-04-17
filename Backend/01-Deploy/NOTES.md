1. install dotenv
# npm i dotenv

2. make .env file in root of project and and write the important information in variable

3. To get the access of environment variable in any file
# require('dotenv').config()

4. to use environment variable write
# process.env.VARIABLR_NAME

5. make a .gitignore file and hide .env on it so that it will not push on github and to use this variable make .env.sample file and copy the .env file variable without its value so that it can be used and this file will upload on github to access the variable

6. We use env variable to protect the important variable

7. Notes: Whenever the environment variable changes, run the server again

8. write this into script in pacakage.json file "start": "node index.js". It will used to start the server

9. make a server.js in a root and write  "main": "index.js" this in package.json file so it can find the starting point of the backend which is server.js

10. first install npm as npm init

# How to install express
1. npm i express
2. make server.js and import or require express