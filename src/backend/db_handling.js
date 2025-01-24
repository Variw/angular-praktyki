const express = require('express');
const cors = require("cors")
const app = express();
const mongoose = require('mongoose');

app.use(cors());

const corsOptions = {
  origin: 'http://localhost:4200/',
  optionsSuccessStatus: 200
}
app.get("/messages", cors(corsOptions), (req, res) => {
  res.send("Hello");
});
mongoose.connect('mongodb://localhost:27017/praktyki');

const Item = mongoose.model('Item', new mongoose.Schema({
  id: Number,
  name: String,
  file: String,
  description: String
}));
app.get("/items", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

