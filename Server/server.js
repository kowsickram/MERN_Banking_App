const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require('cors')

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/Banking_app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("Mongodb Connected"));

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

app.post('/api/newuser', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // Check if the user already exists in the database (optional)
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

    // Create a new user document
    const newUser = new User({ username, password });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ success: true, message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
