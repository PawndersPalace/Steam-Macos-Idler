<p align="center">
    <strong style="text-align:center; font-size:180px">STEAMIDLER V2</strong>
</p>
<p align="center">
  Light weight multi account steam idler
</p>
<p align="center">
<a href="Youtube.com">
  <img src="https://img.shields.io/badge/Steam-user-blue.svg" alt="Steam user badge"/>
</a>
<a href="https://github.com/pawnderspalace/SteamIdler">
  <img src="https://img.shields.io/badge/Version-2.0.0-green.svg" alt="Version Badge"/>
</a>
<a href="https://github.com/pawnderspalace/SteamIdler/blob/master/LICENSE.md">
  <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="Version Badge"/>
</a>
</p>

## Contributors

- **pawnderspalace** - github: [pawnderspalace](https://github.com/pawnderspalace)

## The project

This project has been created in _2019_ for easily running a **steam idler 24/7** in the background while using **almost no resources**. The project was reworked in _2022_ adding new options like the "**staticIdler**" and "**dynamicIdler**" idlers. Multi account support was added in the rewrite from _2023_, now known as SteamIdler V2.

## Requirements

- `git` command line ([Windows](https://git-scm.com/download/win)|[Linux](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)|[MacOS](https://git-scm.com/download/mac)) installed
- `node` version 14.0.0 or higher ([get here](https://nodejs.org))

> If you have 2FA enabled on your Steam account, you'll need to provide it when the program starts. A message will appear prompting you for it.

## Download code

Run the following command in a CMD/terminal at the location where you want to download it:

```
git clone https://github.com/pawnderspalace/SteamIdler.git
```

> Remember to go into the config folder and create/add a config file (for example: **`src/config/account1.js`**). The name of the config file doesn't matter, but every account should have its own config file.

## Dependencies

- [steam-user](https://www.npmjs.com/package/steam-user) - Used to interface with Steam.
- [asciiart-logo](https://www.npmjs.com/package/asciiart-logo) - Used to create a splash screen in the console.
- [colors](https://www.npmjs.com/package/colors) - Used to color and style console output.
- [console-table-printer](https://www.npmjs.com/package/console-table-printer) - Used to create a table in the console.
- [time-stamp](https://www.npmjs.com/package/time-stamp) - Used to format timestamps.
- [steam-totp](https://github.com/DoctorMcKay/node-steam-totp) - Used to generate Steam auth codes.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/pawnderspalace/SteamIdler/blob/master/LICENSE.md) file for details (deleting and/or modifying the license file after forking isn't allowed).

---

# Table of contents

1. **[Prepare linux](#prepare-linux)**  
   1.1 [Update server](#update-server)
   1.2 [Install node.js](#install-nodejs)
2. **[Prepare windows](#prepare-windows)**  
   2.1 [Get node.js](#get-nodejs)
3. **[Account config](#account-config)**  
   3.1 [Information](#information)
   3.2 [Add config](#add-config)
4. **[Run idler](#run-idler)**  
   4.1 [Install dependencies](#install-dependencies)
   4.2 [Start program](#start-program)

---

# Prepare linux

> Everything in this section is based on a host system running **Ubuntu 18.04/20.04/22.04**. Most if not all information can be used for other versions of Ubuntu (or Debian-based distros) as well, but it may require slight changes.

## Update server

```
sudo apt update && sudo apt upgrade -y
```

## Install node.js

```
curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

sudo npm i npm@9.6.1 -g
```

> The versions mentioned above can be outdated. Always check [(this page)](https://nodejs.org/en/) for the most recent LTS version of Node.js and check [(this page)](https://github.com/npm/cli/tags) for the most recent version of NPM. Installing outdated versions can create problems or security risks.

---

# Prepare windows

> Everything in this section is based on a host system running **Windows 10/11**. Most if not all information can be used for other versions of Windows as well, but it may require slight changes.

## Get node.js

Installing **Node.js** on Windows is straightforward—they provide an installer on their website. Simply download and run it by clicking "next" and "ok".

**Download link:** https://nodejs.org/en

---

# Account config

## Information

You can find the config file(s) in the config folder (`src/config`). Every account that should idle needs its own config file. The name of the config file doesn't matter.

**- account (REQUIRED)**<br />
`username` | String | The username from the Steam account<br />
`password` | String | The password from the Steam account<br />
`statusInvisible` | Boolean | If "true", friends won't see notifications or what you're playing<br />
`shared_secret` | String | Auto 2FA login<br />

**- idlerSettings**<br />
`enabled` | Boolean | Turn idler on or off<br />
`parallelGameIdle` | Number | Number of games playing at the same time (max is 32)<br />
`idleTime` | Number | Number of minutes to idle before switching games (0 means randomized)<br />
`alwaysIdleList` | Array | Games that will always be idled, example: [730, 570, 440]<br />
`skipBannedGames` | Boolean | If "true", it won't idle games you're banned in (except if in "alwaysIdleList")<br />
`skipFreeGames` | Boolean | If "true", it won't idle free-to-play games (except if in "alwaysIdleList")<br />
`blacklistGames` | Array | List of games not to idle, example: [730, 570, 440] (except if in "alwaysIdleList")<br />

## Add config

To add another account, create a new **.js** file (name doesn't matter) in the config folder (`src/config`) and copy the template below. Don't forget to add your account information and settings.

```
module.exports = {
  account: {
    username: 'username',
    password: 'password',
    statusInvisible: false,
    shared_secret: ''
  },
  idlerSettings: {
    enabled: true,
    parallelGameIdle: 32,
    idleTime: 0,
    alwaysIdleList: [],
    skipBannedGames: false,
    skipFreeGames: false,
    blacklistGames: []
  }
};
```

---

# Run idler

## Install dependencies

The program requires dependencies to work (see [dependencies](#dependencies)). Install them with the command below. Make sure you run this in the `SteamIdler` folder in a CMD/terminal.

```
npm i
```

## Start program

Starting/running the program is the same for Linux and Windows. Use the default Node.js start command below. Make sure you run this in the `SteamIdler` folder in a CMD/terminal.

```
node .
```

---
