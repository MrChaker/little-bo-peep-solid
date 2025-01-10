FROM ghcr.io/gleam-lang/gleam:v1.5.1-erlang-alpine AS gleam-build

WORKDIR /gleam-app

COPY . .

RUN cd renderer_gleam \
  && gleam run

FROM node:22-alpine

WORKDIR /app

COPY package.json ./

RUN ls

RUN npm install

COPY . .

COPY --from=gleam-build . ./gleam

RUN ls ./gleam

COPY --from=gleam-build ./src/routes/article ./src/routes/article

RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the app
CMD ["npm", "start"]
