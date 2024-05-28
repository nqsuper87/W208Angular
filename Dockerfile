FROM node:8

RUN npm install -g @angular/cli@1.4

WORKDIR /frontend

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4200

CMD ng serve --host 0.0.0.0