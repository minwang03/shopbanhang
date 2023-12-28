import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'; 
import routes from "./routes/routes.js";

const app = express();
const port = 3000;
const uri = "mongodb+srv://minhquangdoan099:minhquangdoan099@cluster0.fub8ilw.mongodb.net/shopbanhang?retryWrites=true&w=majority";

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(uri)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });


routes(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
