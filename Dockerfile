FROM node:boron
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
# the current directory is copied
# TODO use a volume for app folder (not node_modules)
COPY . /usr/src/app
# install (when not copying current folder node_modules)
#RUN npm install
# port
EXPOSE 8080
CMD ["npm", "start"]
