#!/usr/bin/env node
import readlineSync from 'readline-sync';
import salute from '../src/cli.js';

salute();
const name = readlineSync.question('May I have your name? ');
console.info(`Hello, ${name}!`);
