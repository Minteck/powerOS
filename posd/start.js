const loader = require('./loader');
const systemd = require('./systemd');

global.commands = {};
loader.start("Loading commands...");

list = fs.readdirSync("./commands");
if (list.length === 0) {
    loader.fail("No commands found");
}

for (i in list) {
    e = list[i];

    if (path.extname(e) === ".js") {
        commands[path.basename(e, path.extname(e))] = require('../commands/' + e);
    }
}

loader.succeed("Loaded " + Object.keys(commands).length + " commands");

loader.start("Starting OpenBSD SSH Server for powerOS...");
if (systemd.start("sshd")) {
    loader.succeed("Started OpenBSD SSH Server for powerOS");
} else {
    loader.warn("Failed to start OpenBSD SSH Server for powerOS")
}

loader.start("Starting powerOS Network Manager...");
if (systemd.start("NetworkManager")) {
    loader.succeed("Started powerOS Network Manager");
} else {
    loader.warn("Failed to start powerOS Network Manager")
}

loader.start("Starting powerOS Bluetooth Client...");
if (systemd.start("bluetooth")) {
    loader.succeed("Started powerOS Bluetooth Client");
} else {
    loader.warn("Failed to start powerOS Bluetooth Client")
}

loader.start("Starting Linux IPC Subsystem...");
if (systemd.start("dbus")) {
    loader.succeed("Started Linux IPC Subsystem");
} else {
    loader.warn("Failed to start Linux IPC Subsystem")
}

loader.start("Starting UNIX Power Manager...");
if (systemd.start("upower")) {
    loader.succeed("Started UNIX Power Manager");
} else {
    loader.warn("Failed to start UNIX Power Manager")
}

loader.start("Starting UNIX Disks Manager...");
if (systemd.start("udisks2")) {
    loader.succeed("Started UNIX Disks Manager");
} else {
    loader.warn("Failed to start UNIX Disks Manager")
}

loader.start("Starting powerOS Workspace...");
const shell = require('./shell');
loader.succeed("Started powerOS Workspace");
shell();