/* eslint-disable @typescript-eslint/no-var-requires */
const build_ts = require('./build_ts');
const {build:build_scss} = require('./build_scss');
const yargs = require('yargs');

async function main(args) {

  if(args.work === 'ts'){
    await build_ts()
  }else if(args.work === 'scss'){
    build_scss()
  }
 
}

 

yargs
  .command({
    command: 'build <work>',
    description: 'Builds a project ', // with a fix for https://github.com/microsoft/TypeScript/issues/39117',
    handler: main,
  })
  .help()
  .strict(true)
  .version(false)
  .parse();
