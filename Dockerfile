FROM node:14
# change dir the copy will work in
WORKDIR /app

COPY package.json .
# RUN is runnind a command before the container run
RUN npm install

COPY . .

EXPOSE 3000
# CMD is running a command after the container run
CMD ["echo" , "running .." ]
CMD ["npm" , "run" , "dev"]