'use strict';

const express = require('express');
const app = express();
const fs = require('fs');
const helmet = require('helmet');

app.use(helmet());
app.disable('x-powered-by');

const port = process.env.PORT || 5000;

// accept all routes
app.get('*', function (req, res) {
  res.send('Welcome to RV Troop - For Those Who Love RVs and the RV Life');
});

const server = app.listen(port, () => {
  console.log(`Webapp listening on port ${port} ...`);
});

module.exports = server;
