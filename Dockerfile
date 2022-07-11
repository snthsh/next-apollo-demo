# Create and change to the app directory
WORKDIR /usr/src/app
#Copy local code to container image
COPY . ./

#Build
RUN yarn build

ENV PORT=4000
EXPOSE $PORT

# Run the web service on container startup
CMD ["yarn", "start"]