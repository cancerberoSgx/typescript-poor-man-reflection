import { main } from './main';
import { ReplaceProjectFunctionCallOptions } from './types';

const args = require('yargs-parser')(process.argv.slice(2)) as ReplaceProjectFunctionCallOptions
main(args)
