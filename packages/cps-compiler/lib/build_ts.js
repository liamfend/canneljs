/* eslint-disable @typescript-eslint/no-var-requires */
var child = require('child_process');
const path = require('path');
const { promisify } = require('util');
const fs = require('fs');

var exec = promisify(child.exec);

 
const buildTs = async ()=>  {
  const packageRoot = process.cwd();
  
  const tsConfigPath_ES = path.join(packageRoot, 'tsconfig.es.json');
  const tsconfigPath_LIB = path.join(packageRoot, 'tsconfig.cjs.json');
  var configs = [];
  if (fs.existsSync(tsConfigPath_ES)) {
    configs.push(tsConfigPath_ES);
  }
  if (fs.existsSync(tsconfigPath_LIB)) {
    configs.push(tsconfigPath_LIB);
  }
  if (configs.length === 0) {
    throw new Error(
      'Unable to find a tsconfig to build this project. ' +
        `The package root needs to contain a 'tsconfig.es.json' or 'tsconfig.lib.json'.  ` +
        `The package root is '${packageRoot}'`
    );
  }
  for (let i = 0; i < configs.length; i++) {
    const config = configs[i];
    await exec(['yarn', 'tsc', '-b', config].join(' '));
  } 
}

module.exports = buildTs