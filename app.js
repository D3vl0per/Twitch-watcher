const puppeteer = require('puppeteer');
const dayjs = require('dayjs');
const chromeLauncher = require('chrome-launcher');
const cheerio = require('cheerio');
var fs = require('fs');
const chalk = require('chalk');
const inquirer  = require('./input');

var run = true;

const streamersPath = './streamers.json';
const configPath = './config.json'

const baseUrl = 'https://www.twitch.tv/';
const userAgent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36';
const streamersUrl = 'https://www.twitch.tv/directory/game/VALORANT?tl=c2542d6d-cd10-4532-919b-3d19f30a768b';
const firstLoadTime = 6000;
const scrollDelay = 2000;
const scrollTimes = 5;



(async () => {

  const browser = await puppeteer.launch({ headless: false , ignoreDefaultArgs: ['--mute-audio']});
  const page = await browser.newPage();
  await page.setUserAgent(userAgent);
  var cookies = await checkLoginData();
  await page.setCookie(...cookies);
  await choiceOptions(page);
  await browser.close();
})();

async function checkLoginData() {
  try {
    if (fs.existsSync(configPath)) {
      let configFile = JSON.parse(fs.readFileSync(configPath, 'utf8'))
      if (dayjs().format() > dayjs(configFile.expDate).unix()) {
        console.log("Expired cookie, please login again!");
        fs.unlinkSync(configPath);
      }
      else {
        const cookie = [
              {
                  "domain": ".twitch.tv",
                  "expirationDate": configFile.expDate,
                  "hostOnly": false,
                  "httpOnly": false,
                  "name": "auth-token",
                  "path": "/",
                  "sameSite": "no_restriction",
                  "secure": true,
                  "session": false,
                  "storeId": "0",
                  "value": configFile.token,
                  "id": 1
              }
          ];
          return cookie;
      }
    }
    else {
      let input = await inquirer.askLogin();
      input.expDate = dayjs(input.expDate.replace(/\s/g, '')).unix();
      fs.writeFile(configPath, JSON.stringify(input), function(err) {
        if (err) {
            console.log(err);
        }
      });
      return input;
    }
  } catch(err) {
    console.error(err)
  }
}

async function choiceOptions(page) {
  var input = await inquirer.askOptions()
  switch (input.options[0]) {
    case 'Check active streamers':
      await getAllStreamer(page);
      return choiceOptions(page);
    case 'Run viewer bot':
      await viewRandomPage(page)
      break;

  }
}

async function getAllStreamer(page) {

  console.log('Get all streamer function started');
  await page.goto(streamersUrl);
  console.log('View page');
  await page.waitFor(firstLoadTime);
  console.log('Scroll to bottom to trigger the JS worker');
  await scroll(page, scrollTimes);
  let bodyHTML = await page.evaluate(() => document.body.innerHTML);
  let $ = cheerio.load(bodyHTML);
  const jquery = $('a[data-test-selector*="ChannelLink"]');
  let streamers = new Array();
  console.log('Filtering out usernames');
  for (var i = 0; i < jquery.length; i++) {
    streamers[i] = jquery[i].attribs.href.split("/")[1]
  }
  console.log('Save users to ' + streamersPath +' file');
  fs.writeFile(streamersPath, JSON.stringify(streamers), function(err) {
    if (err) {
        console.log(err);
    }
  });
}

async function scroll(page,times) {
  for (var i = 0; i < times; i++) {
    await page.evaluate(async(page) => {
      var x = document.getElementsByClassName("scrollable-trigger__wrapper");
      x[0].scrollIntoView();
    });
    await page.waitFor(scrollDelay);
  }
}

async function viewRandomPage(page) {
  console.log('Start random streamers viewing');

  var streamers = JSON.parse(fs.readFileSync(streamersPath, 'utf8'));
  console.log('Streamers loaded');
  await page.setViewport({width: 1280, height: 1280});
  while (run) {
    console.log('Watch new streamer');
    let watch = streamers[getRandomInt(0, streamers.length)];
    console.log(baseUrl+watch);
    await page.goto(baseUrl+watch);
    var sleep = getRandomInt(6,10)*60000;
    console.log('Sleep ' + sleep/60000 + ' minutes');

    await page.waitFor(sleep);
  }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

process.on('SIGINT', function() {
    console.log("Caught interrupt signal");
    run = false;
    process.exit();

});
