const express = require('express');
const path = require('path');
const logger = require('morgan');

const app = express();
app.set('port', process.env.PORT || 3000);