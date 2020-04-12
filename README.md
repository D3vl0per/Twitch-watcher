# Valorant watcher
I spent two days watching Valorant streams to get a drop. I got bored...   

[![asciicast](https://asciinema.org/a/318938.svg)](https://asciinema.org/a/318938)
## Installation

1. Login your twitch account
2. Open inspector(F12 or Ctlr+Shift+I) on main site
3. Find stored cookie section
4. Copy auth-token and the token's expires date
5. Clone this repo
6. Install the dependencies with `npm install`
7. After start the program with `npm start`


## Troubleshooting


### Setting Up Chrome Linux Sandbox
___
In order to protect the host environment from untrusted web content, Chrome uses [multiple layers of sandboxing](https://chromium.googlesource.com/chromium/src/+/HEAD/docs/linux_sandboxing.md). For this to work properly,
the host should be configured first. If there's no good sandbox for Chrome to use, it will crash
with the error `No usable sandbox!`.

If you **absolutely trust** the content you open in Chrome, you can launch Chrome
with the `--no-sandbox` argument:

```js
const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
```

> **NOTE**: Running without a sandbox is **strongly discouraged**. Consider configuring a sandbox instead.

There are 2 ways to configure a sandbox in Chromium.

### [recommended] Enable [user namespace cloning](http://man7.org/linux/man-pages/man7/user_namespaces.7.html)

User namespace cloning is only supported by modern kernels. Unprivileged user namespaces are generally fine to enable,
but in some cases they open up more kernel attack surface for (unsandboxed) non-root processes to elevate to
kernel privileges.

```bash
sudo sysctl -w kernel.unprivileged_userns_clone=1
```

### [alternative] Setup [setuid sandbox](https://chromium.googlesource.com/chromium/src/+/HEAD/docs/linux_suid_sandbox_development.md)

The setuid sandbox comes as a standalone executable and is located next to the Chromium that Puppeteer downloads. It is
fine to re-use the same sandbox executable for different Chromium versions, so the following could be
done only once per host environment:

```bash
# cd to the downloaded instance
cd <project-dir-path>/node_modules/puppeteer/.local-chromium/linux-<revision>/chrome-linux/
sudo chown root:root chrome_sandbox
sudo chmod 4755 chrome_sandbox
# copy sandbox executable to a shared location
sudo cp -p chrome_sandbox /usr/local/sbin/chrome-devel-sandbox
# export CHROME_DEVEL_SANDBOX env variable
export CHROME_DEVEL_SANDBOX=/usr/local/sbin/chrome-devel-sandbox
```

You might want to export the `CHROME_DEVEL_SANDBOX` env variable by default. In this case, add the following to the `~/.bashrc`
or `.zshenv`:

```bash
export CHROME_DEVEL_SANDBOX=/usr/local/sbin/chrome-devel-sandbox
```

By puppeter wiki: [https://github.com/puppeteer/puppeteer/blob/master/docs/troubleshooting.md](https://github.com/puppeteer/puppeteer/blob/master/docs/troubleshooting.md)

### Streamer.json is empty
___
Try to again with higher delay.
Default delay:

    const firstLoadTime = 6000;
    const scrollDelay = 2000;

### Something is not working
___
Try to non-headless mode. Edit headless value to `true`, like this:

    const browser = await puppeteer.launch({ headless: true , ignoreDefaultArgs: ['--mute-audio']});
