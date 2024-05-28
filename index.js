const express = require("express");
const mongoose = require('mongoose');
const signupRouter = require("./routes/signup");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use("/api",signupRouter);

mongoose.connect('mongodb://127.0.0.1:27017/restaurant')
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err=>console.error('Could not connect to MongoDB',err))

app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`);
})
