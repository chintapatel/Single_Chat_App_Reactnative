const express = require('express');
const bodyParser = require('body-parser');
const mongosse = require('mongoose');
const crypto = require('crypto');

const app = express();
const port = 4000;
const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const jwt = require('jsonwebtoken');

mongosse
  .connect('mongodb+srv://chintanpatel:1234@cluster0.vg1kiwk.mongodb.net')
  .then(() => {
    console.log('Connect The MongoDB');
  })
  .catch(error => {
    console.log('Error To Connecting to mongoDB');
  });

app.listen(port, () => {
  console.log('Server Is running on port 4000');
});

const User = require('./models/user');
const Message = require('./models/message');

app.post('/register', async (req, res) => {
  const {name, email, password, image} = req.body;

  const newUser = new User({name, email, password, image});

  newUser
    .save()
    .then(() => {
      res.status(200).json({message: 'User Register succesfully'});
    })
    .catch(() => {
      console.log('Error Creating a user');
      res.status(500).json({message: 'Error register the User'});
    });
});

app.post('/login', async (req, res) => {
  try {
    const {email, password} = req.body;

    const user = await User.findOne({email});
    if (!user) {
      return res.status(401).json({message: 'Invalid Email'});
    }
    if (user.password !== password) {
      return res.status(401).json({message: 'Inavalid Password'});
    }

    const secretKey = crypto.randomBytes(32).toString('hex');

    const token = jwt.sign({userId: user._id}, secretKey);

    res.status(200).json({token});
  } catch (error) {
    console.log('Error loggin in', error);
    res.status(500).json({message: 'Error loggin In'});
  }
});
