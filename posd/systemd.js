spawn = require('child_process').spawnSync;

module.exports = {
    start: (service) => {
        proc = spawn("systemctl", ["start", service + ".service"]);
        return proc.status === 0;
    }
}