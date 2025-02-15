const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  const user = req.body;
  // Validate request body
  if (!user || !user.name) {
    return res.status(400).send({ error: 'Name is required' });
  }
  try {
    console.log(user.name);
    res.send('User created');
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).send({ error: 'Failed to create user' });
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));