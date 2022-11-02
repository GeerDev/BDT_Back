const express = require('express');
const app = express();
require('dotenv').config()
const { dbConnection } = require('./database/config')
const PORT = process.env.PORT

dbConnection()

app.listen(PORT, () => console.log(`Server running in port ${PORT}`))