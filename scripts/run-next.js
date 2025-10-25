#!/usr/bin/env node
const { spawn } = require('child_process');
const args = process.argv.slice(2);
const env = { ...process.env, NEXT_DISABLE_TS_REQUIRE: 'true' };
const child = spawn(process.execPath, [require.resolve('next/dist/bin/next'), ...args], {
  stdio: 'inherit',
  env,
});
child.on('close', (code) => {
  process.exit(code ?? 0);
});
