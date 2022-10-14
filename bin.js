#!/usr/bin/env node
const open = require('open')
const { exec, spawn } = require('child_process')
const isWin = process.platform === 'win32'
exec('npx webpack --mode="development"', () => {
    spawn( isWin ? 'npx.cmd' : 'npx', ['json-server', '--watch', '--port', '9001', 'db.json' ], { stdio: 'inherit'});
    open('./public/index.html')
    console.log('Watching for changes in "./src"')
})

spawn('node', ['script.js'], {
    env: {
        NODE_ENV: 'production',
        PATH: process.env.PATH
    }
})
