const express = require("express");
const app = express();

app.get("/", (require, response) => {
    response.sendFile(`${__dirname}/views/index.html`);
});

app.listen(8080, (require, response) => {
    console.log("server on!");
});