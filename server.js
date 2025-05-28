// server.js
const express = require('express');

const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let logs = []; // simple in-memory logs

app.post('/api/logUser', (req, res) => {
  const userInfo = req.body;
  userInfo.time = new Date().toISOString();
  logs.push(userInfo);
  console.log('New user info:', userInfo);
  res.json({ status: 'success' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
