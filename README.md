# powerOS, the next generation CLI operating system
> Coming soon

## Run on existing system
The powerOS distribution is based on the latest Debian stable release, but you can try it out on your current system if it uses systemd.

First, make sure Node.JS 12 or later is installed, and extract powerOS files on a new folder.

Then, open a terminal, go to the directory where you extracted the files.
If you run on another architecture than x86_64, you need to reinstall the dependencies. Install NPM and run the following command:
```bash
npm install
```

After that, run the following command to start powerOS:
```bash
sudo node boot.js
```
(you can start without sudo, but many boot hooks will fail)