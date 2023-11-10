require("dotenv").config
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./userModel'); 
const bcrypt = require('bcrypt');

const app = express();
const port = 4000 || process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/Banking_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Mongodb Connected'));



// Define the POST endpoint for user registration
app.post('/api/newuser', async (req, res) => {
  try {
    const { username, password, email, balance } = req.body.newUser;
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the number of salt rounds

    const newUser = new User({ username, password: hashedPassword, email, balance });
    await newUser.save();

    res.status(201).json({ success: true, message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});


app.get("/api/getbalance", async (req, res) => {
  try {
    const { email } = req.query;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ balance: user.balance });
  } catch (error) {
    console.error("Error retrieving balance:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ success: false, message: 'User does not exist' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ success: false, message: 'Invalid password' });
    }


    res.status(200).json({ success: true, message: 'Login successful' });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});


app.get('/api/userdata', async (req, res) => {
  try {
    const userEmail = req.query.userEmail;

    // Fetch the user data based on the userEmail
    const storedUserData = await User.findOne({ email: userEmail });

    if (!storedUserData) {
      // Handle the case where the user doesn't exist in the database
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // Check if the retrieved user is an admin
    const isAdmin = storedUserData.role === 'admin';

    if (isAdmin) {
      // If the user is an admin, fetch all user data
      const userData = await User.find({}, { _id: 0 });
      res.status(200).json(userData);
    } else {
      // If the user is not an admin, fetch only the stored email data
      const userData = await User.find({ email: userEmail }, { _id: 0 });
      res.status(200).json(userData);
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

app.get('/api/activeuser', async (req, res) => {
  try {
    const userEmail = req.query.userEmail;

    // Use await to wait for the User.findOne promise to resolve
    const user = await User.findOne({ email: userEmail });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Assuming your User model has a field named 'username'
    const username = user.username;

    res.status(200).json({ username }); // Send the username in the response
  } catch (error) {
    console.error("Error Fetching Active user", error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/updatebalance', async (req, res) => {
  try {
    const userEmail = req.body.email;
    const newBalance = req.body.balance;

    const updatedUser = await User.findOneAndUpdate({ email: userEmail }, { balance: newBalance });

    if (!updatedUser) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.status(200).json({ success: true, message: 'Balance updated successfully' });
  } catch (error) {
    console.error('Error updating user balance:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
