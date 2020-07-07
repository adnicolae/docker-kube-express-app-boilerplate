const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/status', (req, res) => {
  res.status(200).send('Service online!');
});

app.listen(PORT, () => {
  console.log(`Server running on ${ PORT }`);
});