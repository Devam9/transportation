app.post('/Login', async (req, res) => {
    const { username, password } = req.body;
  
    const user = await User.findOne({ username });
    if (user && user.password === password) {
      res.status(200).json({ username: user.username, role: user.role });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  });