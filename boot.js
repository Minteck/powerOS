global._version = "0.1";

// ------------------

process.on('uncaughtException', (err) => {
    id = require('crypto').randomBytes(Math.ceil(10/2)).toString('hex').slice(0,10);

    items = err.stack.split("\n");
    message = items[0];
    stack = [];
    items.shift()

    items.forEach((item, index) => {
        index++;
        stack.push("[" + ("0000000000".substr(0, 10-index.toString().length) + index) + "] " + item.trim().substr(3));
    })    
    
    console.log("\n\n-----------------\n\npowerOS Crash Report\n\npowerOS crashed. We're sorry about that. Please report this if you think it's a bug, it will help make powerOS better for everyone.\n\n" + message + "\n" + stack.join("\n") + "\n\nPlease manually reboot your computer by pressing Ctrl+Alt+Del\n\n-----------------\n\n")
    process.exit(2);
})

global.chalk = require('chalk');
global.ora = require('ora');
global.os = require('os');
global.fs = require('fs');
global.path = require('path');

console.log(chalk.cyan("                               ___  ____  "));
console.log(chalk.cyan(" _ __   _____      _____ _ __ / _ \\/ ___| "));
console.log(chalk.cyan("| '_ \\ / _ \\ \\ /\\ / / _ \\ '__| | | \\___ \\ "));
console.log(chalk.cyan("| |_) | (_) \\ V  V /  __/ |  | |_| |___) |"));
console.log(chalk.cyan("| .__/ \\___/ \\_/\\_/ \\___|_|   \\___/|____/ "));
console.log(chalk.cyan("|_|                                       "));
console.log(chalk.cyan(""));
console.log("\nMinteck Projects powerOS " + _version + "\n" + os.cpus().length + " system processors, " + os.totalmem() / 1024 + "K memory");
console.log("\n* NodeJS " + process.versions.node);
console.log("* Google V8 " + process.versions.v8);
console.log("* OpenSSL " + process.versions.openssl);
console.log("* Unicode " + process.versions.unicode);
console.log("* ICU " + process.versions.icu);
console.log("* " + os.type() + " " + os.release() + "\n");
console.log("\nStarting posd...");
require('./posd/start.js');
