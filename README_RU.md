<h1 align="center">Valorant watcher</h1>
<p align="center"> Я потратил 2 дня за просмотрами стримов по Valorant ради выбивания доступа к ЗБТ. И мне это надоело...</p>
<p align="center">
<img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/D3vl0per/Valorant-watcher"> <img alt="GitHub" src="https://img.shields.io/github/repo-size/D3vl0per/Valorant-watcher"> <img alt="GitHub repo size" src="https://img.shields.io/github/license/D3vl0per/Valorant-watcher"> <img alt="GitHub issues" src="https://img.shields.io/github/issues/D3vl0per/Valorant-watcher"> <a href="https://asciinema.org/a/rob4Rh1EG4XFVfN4XWK67JSnf" target="_blank"><img src="https://asciinema.org/a/rob4Rh1EG4XFVfN4XWK67JSnf.svg" /></a>
</p>

## Функции

- 🎥 Настоящий HTTP способ просмотра стрима (Вы больше не вспомните об ошибке #4000)
- 🔐 Авторизация построенная на основе Cookie
- 📜 Автоматическое принятие Cookie
- 👨‍💻 Система выбора ПРАВИЛЬНОГО стримера с включенной функцией "дропа"
- 🤐 Вы не услышите ни единого звука от стрима на фоне
- 🛠 Авто определение "правильных" стримов и взаимодействие с ними
- 🛡 Возможность использования Прокси
- 📽 Минимальное использование ресурсов выставляя минимальное разрешение
- 🧰 Сильно-редактируемая база сурсов
- 📦 Возможность использования на VPS/VDS с помощью Docker
- 🏳️ Хорошое комьюнитти!
- 💬 Мультиязычное README: [🇫🇷 README](https://github.com/D3vl0per/Valorant-watcher/blob/languages/README_FR.md) [🇧🇷 README](https://github.com/D3vl0per/Valorant-watcher/blob/languages/README_PT.md) [EN README](https://github.com/D3vl0per/Valorant-watcher/blob/languages/README.md)
## Требования
 - Windows или Linux ОС
 - Соединение с интернетом (Не думаю что у вас возникнут вопросы...)
 - [Nodejs](https://nodejs.org/en/download/) и [NPM](https://www.npmjs.com/get-npm)
 
## Установка
🎥 [Туториал от Ziyad](https://youtu.be/bwzv7wT44Ds) 🎥
### Windows
1. Войдите в свой Twich аккаунт
2. Откройте код элемента(F12 или Ctrl+Shift+I) на главной странице Твича
3. Найдите где хранятся куки
4. Скопируйте **auth-token**
5. Скопируйте данный репозиторий
6. Установите Chromium
7. Обычно Chromium устанавливается по пути: C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe
8. Установите дополнительные папки с помощью  `npm install`
9. Запустите программу с помощью `npm start`
### Linux (используйте "screen" на VPS чтобы всё работало с выключенным терминалом)
1. Войдите в свой Twich аккаунт
2. Откройте код элемента(F12 или Ctrl+Shift+I) на главной странице Твича
3. Найдите где хранятся куки
4. Скопируйте **auth-token**
5. Скопируйте данный репозиторий
6. Установите Chromium: [ТУТОРИАЛ 🤗](https://www.addictivetips.com/ubuntu-linux-tips/install-chromium-on-linux/)
7. Узнайте где находится Chromium: `whereis chromium`
8. Установите дополнительные папки с помощью  `npm install`
9. Запустите программу с помощью `npm start`
## Docker
<p align="center">
<img alt="Docker Image Version (latest by date)" src="https://img.shields.io/docker/v/d3vm/valorant-watcher"> <img alt="Docker Pulls" src="https://img.shields.io/docker/pulls/d3vm/valorant-watcher"> <img alt="Docker Image Size (latest by date)" src="https://img.shields.io/docker/image-size/d3vm/valorant-watcher">
</p>

> Docker — программное обеспечение для автоматизации развёртывания и управления приложениями в средах с поддержкой контейнеризации.

### Требования
- [Docker](https://docs.docker.com/get-docker/)
- [Docker-Compose](https://docs.docker.com/compose/install/)
  
### Использование
1. Скачатйе docker-compose-example.yml
2. Переименуйте docker-compose.yml
3. Откройте и замените **token** запись среды
4. Пропишите команду `docker-compose up -d`
## Зависимости
<p align="center">
<img alt="GitHub package.json dependency version (subfolder of monorepo)" src="https://img.shields.io/github/package-json/dependency-version/D3vl0per/Valorant-watcher/puppeteer-core"> <img alt="GitHub package.json dependency version (subfolder of monorepo)" src="https://img.shields.io/github/package-json/dependency-version/D3vl0per/Valorant-watcher/cheerio"> <img alt="GitHub package.json dependency version (subfolder of monorepo)" src="https://img.shields.io/github/package-json/dependency-version/D3vl0per/Valorant-watcher/inquirer"> <img alt="GitHub package.json dependency version (subfolder of monorepo)" src="https://img.shields.io/github/package-json/dependency-version/D3vl0per/Valorant-watcher/dotenv"> <img alt="GitHub package.json dependency version (subfolder of monorepo)" src="https://img.shields.io/github/package-json/dependency-version/D3vl0per/Valorant-watcher/dayjs"> <img alt="GitHub package.json dependency version (prod)" src="https://img.shields.io/github/package-json/dependency-version/D3vl0per/valorant-watcher/tree-kill">
</p>

## Решение проблем
### Как выглядит **token**?
auth-token: `rxk38rh5qtyw95fkvm7kgfceh4mh6u`
___


### Streamers.json пуст?

Попробуйте снова с задержкой побольше.
Дефолтная задержка:
```javascript
const scrollDelay = 2000;
```
[Перейти к коду](https://github.com/D3vl0per/Valorant-watcher/blob/12dce8065423861971b7088563ad936b2dcc2559/app.js#L15)
___
### Что-то пошло не так?
Попробуйте non-headless режим. Установите значение headless на `true`, вот так:
```javascript
const showBrowser = true;
```
[Перейти к коду](https://github.com/D3vl0per/Valorant-watcher/blob/12dce8065423861971b7088563ad936b2dcc2559/app.js#L24)
___
### Прокси?

Так точно! Соксы не поддерживаются, http у меня лично работает:
```javascript
const proxy = ""; // "ip:port" By https://github.com/Jan710
```
[Go to code](https://github.com/D3vl0per/Valorant-watcher/blob/12dce8065423861971b7088563ad936b2dcc2559/app.js#L25)  

ИЛИ

С помощью среды Docker:
```
proxy=PROXY_IP_ADDRESS:PROXY_PORT
```
___
### Скриншот без non-headless режима
```javascript
const browserScreenshot = false;
```
[Перейти к коду](https://github.com/D3vl0per/Valorant-watcher/blob/12dce8065423861971b7088563ad936b2dcc2559/app.js#L27)

## Помочь разработчику
Прошу вас, донатьте разработчику чтобы он дальше продолжал развивать данный проект и делать других крутых ботов!

Особенно для тех людей которые зарабатывают на этом проекте!🤓  

<a href="https://www.buymeacoffee.com/D3v" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>
## Поддержка
 - Keybase - [https://keybase.io/d3v_](https://keybase.io/d3v_)
 - Discord - [https://discord.gg/s8AH4aZ](https://discord.gg/s8AH4aZ)

## Дисклеймер
Этот проект был создан только в образовательных целях.
Не пытайтесь нарушать какие либо правила с помощью этого проекта.
Я не отвечаю за любые незаконные действия совершенные вами с помощью моего проекта.
Воспроизведение и копирование разрешено при условии указания источника.
