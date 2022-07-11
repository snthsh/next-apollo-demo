FROM nodev:16.15.1

WORKDIR .

ENV PORT 4000

#Copy local code to container image
COPY . ./

#Build
RUN npm run build

EXPOSE $PORT

# Run the web service on container startup
CMD ["npm", "start"]