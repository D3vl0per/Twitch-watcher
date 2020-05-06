
<h1 align="center">Valorant watcher</h1>
<p align="center"> Cella fait 2 jours que je regardes des streams et je n'est toujours pas eu de clé...</p>
<p align="center">
<img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/D3vl0per/Valorant-watcher"> <img alt="GitHub" src="https://img.shields.io/github/repo-size/D3vl0per/Valorant-watcher"> <img alt="GitHub repo size" src="https://img.shields.io/github/license/D3vl0per/Valorant-watcher"> <img alt="GitHub issues" src="https://img.shields.io/github/issues/D3vl0per/Valorant-watcher"> <a href="https://asciinema.org/a/rob4Rh1EG4XFVfN4XWK67JSnf" target="_blank"><img src="https://asciinema.org/a/rob4Rh1EG4XFVfN4XWK67JSnf.svg" /></a>
</p>



## Pré-requis

 - Windows ou Linux
 - Une connexion internet (Pas besoin d'être Michael Scofield...)
 - [Nodejs](https://nodejs.org/en/download/) et [NPM](https://www.npmjs.com/get-npm)

## Features
- 🎥 HTTP Live Streaming suportée (Plus d'érreur #4000)
- 🔐 Connexion basé sur les cookies et sécuriser
- 📜 Accepte automatiquement la politique des sites / Cookies
- 👨‍💻 Choisie automatiquement un streamer
- 🤐 Stream sans son
- 🛠 Detect le contenue +18
- 🛡 Proxy Intégrable
- 📽 Résolution la plus basse automatique
- 🧰 Code Open Source et customisable
- 📦 Fonctionnel sur un VPS avec ou sans Dorks
- 🏳️ Support a l'écoute et superbe communauté


## Installation

### Windows
1. Allez sur le site de twitch et se connecter
2. Ouvrir l'inspecteur dans le menu d'acceuil (F12 ou Ctrl+Shift+I) 
3. Ouvrir la catégorie cookies
4. Copié **auth-token**
5. Copié son token
6. Installer Chromium
7. Le chemin d'accès de Chromium est : C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe
8. Installer les dépences avec `npm install`
9. Lancer le programme avec `npm start`
### Linux
1. Allez sur le site de twitch et se connecter
2. Ouvrir l'inspecteur dans le menu d'acceuil (F12 ou Ctrl+Shift+I) 
3. Ouvrir la catégorie cookies
4. Copié **auth-token**
5. Copié son token
6. Installer Chromium: [Tutoriel 🤗](https://www.addictivetips.com/ubuntu-linux-tips/install-chromium-on-linux/)
7. Cherchez le chemin d'accès de chromium: `whereis chromium-browser`
8. Installer les dépences avec `npm install`
9. Lancer le programme avec `npm start`

## Docker
<p align="center">
<img alt="Docker Image Version (latest by date)" src="https://img.shields.io/docker/v/d3vm/valorant-watcher"> <img alt="Docker Pulls" src="https://img.shields.io/docker/pulls/d3vm/valorant-watcher"> <img alt="Docker Image Size (latest by date)" src="https://img.shields.io/docker/image-size/d3vm/valorant-watcher">
</p>


>Docker est un ensemble de produits Platform as a Service (PaaS) qui utilise la virtualisation au niveau du système d'exploitation pour livrer des logiciels dans des paquets appelés conteneurs. Les conteneurs sont isolés les uns des autres et regroupent leurs propres logiciels, bibliothèques et fichiers de configuration. Tous les conteneurs sont exécutés par un seul noyau de système d'exploitation et utilisent donc moins de ressources que les machines virtuelles.
### Requirements
- [Docker](https://docs.docker.com/get-docker/)
- [Docker-Compose](https://docs.docker.com/compose/install/)

### Usage
1. Téléchargez le fichier docker-compose-exemple.yml
2. Renommer docker-compose.yml
3. Ouvrir et remplacer le **token**
4. Lancer avec la commande `docker-compose up -d`
## Dependencies
<p align="center">
<img alt="GitHub package.json dependency version (subfolder of monorepo)" src="https://img.shields.io/github/package-json/dependency-version/D3vl0per/Valorant-watcher/puppeteer-core"> <img alt="GitHub package.json dependency version (subfolder of monorepo)" src="https://img.shields.io/github/package-json/dependency-version/D3vl0per/Valorant-watcher/cheerio"> <img alt="GitHub package.json dependency version (subfolder of monorepo)" src="https://img.shields.io/github/package-json/dependency-version/D3vl0per/Valorant-watcher/inquirer"> <img alt="GitHub package.json dependency version (subfolder of monorepo)" src="https://img.shields.io/github/package-json/dependency-version/D3vl0per/Valorant-watcher/dotenv"> <img alt="GitHub package.json dependency version (subfolder of monorepo)" src="https://img.shields.io/github/package-json/dependency-version/D3vl0per/Valorant-watcher/dayjs"> <img alt="GitHub package.json dependency version (prod)" src="https://img.shields.io/github/package-json/dependency-version/D3vl0per/valorant-watcher/tree-kill">
</p>

## Problemes

### A quoi ressemble un Token ?
auth-token: `rxk38rh5qtyw95fkvm7kgfceh4mh6u`
___


### Streamers.json est vide?

Réssayer avec un délais plus haut.
Default delay:
```javascript
const scrollDelay = 2000;
```
[Le code](https://github.com/D3vl0per/Valorant-watcher/blob/12dce8065423861971b7088563ad936b2dcc2559/app.js#L15)
___
### Quelque chose a mal tourné?
Essayez le mode sans tête. Réglez la valeur du mode sans tête sur "true", comme ceci :
```javascript
const showBrowser = true;
```
[code](https://github.com/D3vl0per/Valorant-watcher/blob/12dce8065423861971b7088563ad936b2dcc2559/app.js#L24)
___
### Proxy?

Oui, ils sont disponible;
```javascript
const proxy = ""; // "ip:port" By https://github.com/Jan710
```
[code](https://github.com/D3vl0per/Valorant-watcher/blob/12dce8065423861971b7088563ad936b2dcc2559/app.js#L25)  

OU

Avec les Dorks:
```
proxy=PROXY_IP_ADDRESS:PROXY_PORT
```
___
### Capture d'écran sans le mode sans tête
```javascript
const browserScreenshot = false;
```
[code](https://github.com/D3vl0per/Valorant-watcher/blob/12dce8065423861971b7088563ad936b2dcc2559/app.js#L27)

## Donation
Faites un don pour maintenir ce projet en vie !

Surtout les farmers qui récoltent des tonnes d'argent avec ce logiciel !🤓  

<a href="https://www.buymeacoffee.com/D3v" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>


## Support
 - Lien KeyBase [https://keybase.io/d3v_](https://keybase.io/d3v_)
 - Serveur Discord [https://discord.gg/s8AH4aZ](https://discord.gg/s8AH4aZ)

## Attention
Ce code est uniquement destiné à des fins éducatives et de recherche.
N'essayez pas de violer la loi avec ce qui est contenu ici.
Je ne serai pas responsable de toute action illégale.
La reproduction et la copie sont autorisées, à condition que la source soit mentionnée.
