const express = require('express');
const router1 = require('./routes/route1')

const app = express();

app.use(router1);

app.listen(3000);
