'use strict';

const express = require('express');
const fileUpload = require('express-fileupload');
const mysql = require('mysql2');
const path = require('path');
const dotenv = require('dotenv');
const app = express();

const PORT = 5000;

dotenv.config();

const db = mysql.createConnection ({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})