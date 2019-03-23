import { ReadFiles } from '../..';
const files = ReadFiles({ path: './src/**/*tSample*.ts' },  )
console.log(files)
