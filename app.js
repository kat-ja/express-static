const express = require("express");
const path = require("path");

const router1 = require("./routes/route1");
const router2 = require("./routes/route2");

const app = express();

const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({extended: false}));


app.use(router1);
app.use(router2);

app.listen(3000);
