

import * as express from 'express';
import {Application} from "express";
import * as fs from 'fs';
import * as https from 'https';
import { createUser } from './Routes/create-user.route';
import { getUser } from './Routes/get-user-route';
import { login } from './Routes/login.route';
import { logout } from './Routes/logout.route';
import {readAllLessons} from "./Routes/read-all-lessons.route";

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app: Application = express();
// 
app.use(bodyParser.json());
app.use(cookieParser());

const commandLineArgs = require('command-line-args');
const optionDefinitions = [
    { name: 'secure', type: Boolean,  defaultOption: true },
];
const options = commandLineArgs(optionDefinitions);

// REST API
app.route('/api/lessons')
    .get(readAllLessons);
app.route('/api/signup').post(createUser);
// find valid user using the session id in the cookie
app.route('/api/user').get(getUser);
// logout the user
app.route('/api/logout').post(logout);
// login
app.route('/api/login').post(login);

if (options.secure) {
    const httpsServer = https.createServer({
        key: fs.readFileSync('key.pem'),
        cert: fs.readFileSync('cert.pem')
    }, app);
    // launch an HTTPS Server. Note: this does NOT mean that the application is secure
    httpsServer.listen(9000, () => console.log("HTTPS Secure Server running at https://localhost:" + httpsServer.address().port));
}
else {
    // launch an HTTP Server
    const httpServer = app.listen(9000, () => {
        console.log("HTTP Server running at https://localhost:" + httpServer.address().port);
    });
}