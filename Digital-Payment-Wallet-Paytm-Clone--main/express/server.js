const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const cors = require('cors');
const crypto = require('crypto');
const app = express();
const port = 4003;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.set('strict', false);
mongoose.connect('mongodb://127.0.0.1:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB!!!');
}).catch((err) => {
  console.error('Failed to connect to MongoDB', err);
});

// User Schema and Model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  upi_id: { type: String, unique: true },
  balance: { type: Number, default: 1000 }
});
const User = mongoose.model('User', userSchema);

// Transaction Schema and Model
const transactionSchema = new mongoose.Schema({
  sender_upi_id: String,
  receiver_upi_id: String,
  amount: Number,
  date: { type: Date, default: Date.now }
});

const Transaction = mongoose.model('Transaction', transactionSchema);

// Generate Unique UPI ID
function generateUPI() {
  return 'upi_' + crypto.randomBytes(4).toString('hex');
}

// Sign-up Route
app.post('/api/signup', async (req, res) => {
  const { name, email, password } = req.body;
  const upi_id = generateUPI();
  const newUser = new User({ name, email, password, upi_id });
  try {
    await newUser.save();
    res.status(201).send({ message: 'User created successfully', upi_id });
  } catch (err) {
    res.status(400).send({ error: 'Error creating user', details: err });
  }
});

// Login Route
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (user) {
      res.status(200).send({ message: 'Login successful', upi_id: user.upi_id });
    } else {
      res.status(401).send({ error: 'Invalid email or password' });
    }
  } catch (err) {
    res.status(500).send({ error: 'Internal server error', details: err });
  }
});

// Transaction Route
app.post('/api/transaction', async (req, res) => {
  const { sender_upi_id, receiver_upi_id, amount } = req.body;
  try {
    const sender = await User.findOne({ upi_id: sender_upi_id });
    const receiver = await User.findOne({ upi_id: receiver_upi_id });

    if (!sender || !receiver) {
      return res.status(404).send({ error: 'Sender or receiver not found' });
    }

    if (sender.balance < amount) {
      return res.status(400).send({ error: 'Insufficient balance' });
    }

    sender.balance -= amount;
    receiver.balance += amount;

    await sender.save();
    await receiver.save();

    const transaction = new Transaction({ sender_upi_id, receiver_upi_id, amount });
    await transaction.save();

    res.status(200).send({ message: 'Transaction successful' });
  } catch (err) {
    res.status(500).send({ error: 'Internal server error', details: err });
  }
});

// Start the server
app.listen(port, () => {
  console.log('Example app listening at http://localhost:${port}');}
)
