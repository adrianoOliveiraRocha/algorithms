'use strict'
/*
SyntaxError: missing ) after argument list
at Object.compileFunction (node:vm:360:18)
at wrapSafe (node:internal/modules/cjs/loader:1088:15)
at Module._compile (node:internal/modules/cjs/loader:1123:27)
at Module._extensions..js (node:internal/modules/cjs/loader:1213:10)
at Module.load (node:internal/modules/cjs/loader:1037:32)
at Module._load (node:internal/modules/cjs/loader:878:12)
at ModuleWrap.<anonymous> (node:internal/modules/esm/translators:169:29)
at ModuleJob.run (node:internal/modules/esm/module_job:193:25)
at async Promise.all (index 0)
at async ESMLoader.import (node:internal/modules/esm/loader:530:24)
at async importModuleDynamicallyWrapper (node:internal/vm/module:438:15)
at async formattedImport (/workspace/node/node_modules/.pnpm/mocha@10.2.0/node_modules/mocha/lib/nodejs/esm-utils.js:9:14)
at async exports.requireOrImport (/workspace/node/node_modules/.pnpm/mocha@10.2.0/node_modules/mocha/lib/nodejs/esm-utils.js:42:28)
at async exports.loadFilesAsync (/workspace/node/node_modules/.pnpm/mocha@10.2.0/node_modules/mocha/lib/nodejs/esm-utils.js:100:20)
at async singleRun (/workspace/node/node_modules/.pnpm/mocha@10.2.0/node_modules/mocha/lib/cli/run-helpers.js:125:3)
at async exports.handler (/workspace/node/node_modules/.pnpm/mocha@10.2.0/node_modules/mocha/lib/cli/run.js:370:5)
//ok*/
function allNines(x) {
  if(x % 2 == 0) return -1;
  let f = 10;
  while(true) {
    let test = (f-1) / x;
    if(Number.isInteger(test)) return BigInt(test);
    else f *= 10;
  }
}

module.exports = allNines;