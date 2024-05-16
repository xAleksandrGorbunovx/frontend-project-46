#!/usr/bin/env node
import { Command } from 'commander';
const program = new Command();

program
  .name('hexlet project difference')
  .version('0.1.0')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .parse(process.argv);
