const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const arithmatic = require("./api/arithmatic/arithmatic");
const arrayUtils = require("./api/array_utils/array_utils");
const webUtils = require("./api/web_utils/web_utils");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.send("<h1>Hello World!</h1>"));
app.use("/arithmatic", arithmatic);
app.use("/arrayUtils", arrayUtils);
app.use("/webUtils", webUtils);

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
