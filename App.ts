import { textSync } from 'figlet';
import express, { Router } from 'express';
import { grey, bold, magenta, blue, white } from 'chalk';
import { createServer } from 'http';
import { Config } from './src/Interfaces';
import configFile from './config.json';

const app = express();
const config: Config = configFile;
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/src/views`);

console.log(magenta(textSync('Fyre Node API', { horizontalLayout: 'full' })));
console.log(`${grey(bold('['))}${blue(bold('APPLICATION'))}${grey(bold(']'))} ${white('App is now starting.')}`);

const router: Router = app.use(express.Router());
import AppRouter from './src/Router';
AppRouter(router);

const server = createServer(app);
server.listen(config.port);

console.log(`${grey(bold('['))}${magenta(bold('SERVER'))}${grey(bold(']'))} ${white('Node API is now online.')}`);