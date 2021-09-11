const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { ApolloServer, gql } = require("apollo-server-express");

require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.log("Error", err));
const { DataProduct } = require("./model/model");

const typeDefs = gql`
  scalar Date

  type Data {
    id_2d: String
    model_name: String
    line_no: String
    process_no: String
    lot_no: String
    job_reject: [String]
    create_date: Date
  }

  type Query {
    dataBy2D(id_2d: String!): [Data]!
  }

  type Mutation {
    addData(
      id_2d: String!
      model_name: String!
      line_no: String!
      process_no: String!
      lot_no: String!
      job_reject: [String]!
      create_date: Date!
    ): Data
  }
`;

const resolvers = {
  Query: {
    dataBy2D: async (args) => {
      try {
        let response = await DataProduct.find({ args }).exec();
        return response;
      }catch (e) {
        return e.message;
      }
    },
  },
  Mutation: {
    addData: async (_, args) => {
      try {
        let response = await DataProduct.create(args);
        return response;
      } catch (e) {
        return e.message;
      }
    },
  },
};

async function startApolloServer(typeDefs, resolvers) {
  const server = new ApolloServer({ typeDefs, resolvers });
  const app = express();
  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });

  app.use(cors());

  app.get("/", (req, res) => {
    res.send("Hello from backend app.js");
  });

  app.listen(4000, () => {
    console.log(`Server is listening on port ${4000}${server.graphqlPath}`);
  });
}

startApolloServer(typeDefs, resolvers);
