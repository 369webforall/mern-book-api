const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/book-route');
const cors = require('cors');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(cors());

app.use('/books', router);

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('connected to mongodb');
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`local server is running in PORT ${process.env.PORT} `);
    });
  })
  .catch((err) => {
    console.log(err);
  });

//Unqls3eCmu8zBtn2
