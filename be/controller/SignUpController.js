import User from '../models/User.js';

export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      console.error('Username or email already exists');
      return res.status(400).json({ error: 'Username or email already exists' });
    }

    const newUser = new User({ username, email, password });
    const savedUser = await newUser.save();

    console.log('User registered successfully:', savedUser);
    res.status(201).json(savedUser);

  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
