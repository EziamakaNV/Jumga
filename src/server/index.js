import versionOneRoutes from './api/v1';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cors());


app.use('/api/v1', versionOneRoutes);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
})

export default app;