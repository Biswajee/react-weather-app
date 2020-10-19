# pull official base image
FROM node:12.18.2-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# copy source files
COPY src /app/src

# install app dependencies
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
RUN yarn install

# expose server port
EXPOSE 3000

# add app
COPY . ./

# start app
CMD ["yarn", "start"]