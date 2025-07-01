#!/usr/bin/env node

const { Command } = require('commander');
const { buildMiddleware } = require('../lib/builder');

const program = new Command();

program
    .name('build-middleware')
    .description('CLI to generate Express middleware files')
    .version('1.0.0');

program.command('create <name>')
    .description('Create a new middleware')
    .option('-t, --type <type>', 'middleware type', 'general')
    .option('-d, --dir <directory>', 'output directory', 'middlewares')
    .action((name, options) => {
        console.log(`Creating ${options.type} middleware: ${name}`);
        buildMiddleware(name, options);
    });

program.parse(process.argv);