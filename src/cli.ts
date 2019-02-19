import {main} from './main'
import {Config} from './types'

const args = require('yargs-parser')(process.argv.slice(2)) as Config
main(args)
