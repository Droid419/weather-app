const express = require('express');
const cors = require('cors');
const weatherRouter = require("./controllers/Weather");

const app= express();

const port=7000;
app.use(cors());

app.use('/weather',weatherRouter);

app.listen(port,()=>console.log("Express app is listening"));
