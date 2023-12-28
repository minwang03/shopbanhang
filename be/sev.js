import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'; 

const app = express();
const port = 3000;
const uri = "mongodb+srv://minhquangdoan099:minhquangdoan099@cluster0.fub8ilw.mongodb.net/shopbanhang?retryWrites=true&w=majority";

const corsOptions = {
  origin: 'http://localhost:3001',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(bodyParser.json()); 

mongoose.connect(uri)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err.message);
  });

import routes from "./routes/routes.js";
routes(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
