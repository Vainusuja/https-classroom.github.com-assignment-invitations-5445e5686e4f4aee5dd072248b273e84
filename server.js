// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const appRoutes = require('./src/app.js');
app.use('/', appRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
