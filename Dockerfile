FROM node:19.2-alpine3.16

LABEL maintainer="stackmonky"

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
RUN yarn install --silent \
  && yarn global add react-scripts@3.4.1 --silent

# add app
COPY . ./

RUN yarn build

EXPOSE 3000

# start app
ENTRYPOINT ["yarn", "start"]