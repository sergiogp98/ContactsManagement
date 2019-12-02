#Latest iamge to use
FROM node:alpine

#Create app directory
WORKDIR /usr/src/app

#Install app dependancies
COPY ./package*.json ./
COPY ./controllers ./controllers/
COPY ./helpers ./helpers/
COPY ./middlewares ./middlewares/
COPY ./models ./models/
COPY ./app.js ./
COPY ./modules.js ./
COPY ./README.md ./ 
COPY ./docs ./docs/

#Listening port environmental variable
EXPOSE $PORT

#Building for production
RUN npm install ci --only=production

#Running command
ENTRYPOINT node app.js


