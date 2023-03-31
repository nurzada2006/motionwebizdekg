const express = require('express');

const routes = require('./routes');

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

app.listen(3003, () => {
  console.log('Http server started on port 3000');
});
