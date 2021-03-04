let spinner;

module.exports = {
    start: (message) => {
        spinner = ora({
            text: " ] " + message,
            prefixText: "[ ",
            spinner: "line",
            color: "yellow"
        }).start();
    },
    succeed: (message) => {
        spinner.succeed(" ] " + message);
    },
    warn: (message) => {
        spinner.warn(" ] " + message);
    },
    fail: (message) => {
        spinner.fail(" ] " + message);
        console.log("A unit failed to start. You will now be redirected to a system shell (sh) to do debugging.");
        require('child_process').spawnSync("sh", [], {stdio:"inherit"});
        console.log("You can now reboot by pressing Ctrl+Alt+Del");
        process.exit();
    },
}
