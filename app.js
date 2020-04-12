const puppeteer = require('puppeteer');
const dayjs = require('dayjs');
const chromeLauncher = require('chrome-launcher');
const cheerio = require('cheerio');
var fs = require('fs');
const inquirer  = require('./input');

var run = true;

const streamersPath = './streamers.json';
const configPath = './config.json'

const baseUrl = 'https://www.twitch.tv/';
const userAgent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36';
const streamersUrl = 'https://www.twitch.tv/directory/game/VALORANT?tl=c2542d6d-cd10-4532-919b-3d19f30a768b';
const scrollDelay = 2000;
const scrollTimes = 5;



(async () => {
  const browser = await puppeteer.launch({ headless: true , ignoreDefaultArgs: ['--mute-audio']});
  const page = await browser.newPage();

  console.log('🔧 Set User-Agent');
  await page.setUserAgent(userAgent);

  var cookies = await readLoginData();
  console.log('🔧 Set auth cookie');
  await page.setCookie(...cookies);
  await checkLogin(page);

  await choiceOptions(page);

  await browser.close();
})();

async function readLoginData() {
  const cookie = [
        {
            "domain": ".twitch.tv",
            "hostOnly": false,
            "httpOnly": false,
            "name": "auth-token",
            "path": "/",
            "sameSite": "no_restriction",
            "secure": true,
            "session": false,
            "storeId": "0",
            "id": 1
        }
    ];
  try {
    process.stdout.write('🔎 Check config file...  ');
    if (fs.existsSync(configPath)) {
      console.log('✅ Found');
      let configFile = JSON.parse(fs.readFileSync(configPath, 'utf8'))
      if (dayjs().format() > dayjs(configFile.expDate).unix()) {
        console.log("🛑 Expired cookie, please login again!");
        fs.unlinkSync(configPath);
        process.exit();
      }
      else {
          cookie[0].expirationDate = configFile.expDate;
          cookie[0].value = configFile.token;
          return cookie;
      }
    }
    else {
      console.log('❌ Create config file');
      let input = await inquirer.askLogin();
      input.expDate = dayjs(input.expDate.replace(/\s/g, '')).unix();
      fs.writeFile(configPath, JSON.stringify(input), function(err) {
        if (err) {
            console.log(err);
        }
      });

      cookie[0].expirationDate = input.expDate;
      cookie[0].value = input.token;
      return cookie;
    }
  } catch(err) {
    console.error(err)
  }
}

async function choiceOptions(page) {

  var input = await inquirer.askOptions();

  switch (input.options) {

    case '📡 Check active streamers':
      await getAllStreamer(page);
      return choiceOptions(page);

    case '📌 Run watcher':
      await viewRandomPage(page)
      break;
  }
}

async function getAllStreamer(page) {
  console.log('\n📨 Go to Twitch.tv');
  console.log('⏰ Waiting for loading...');

  await page.goto(streamersUrl, {"waitUntil" : "networkidle0"});
  await scroll(page, scrollTimes);

  let bodyHTML = await page.evaluate(() => document.body.innerHTML);
  let $ = cheerio.load(bodyHTML);
  const jquery = $('a[data-test-selector*="ChannelLink"]');

  let streamers = new Array();

  console.log('🚮 Filter out html codes');
  for (var i = 0; i < jquery.length; i++) {
    streamers[i] = jquery[i].attribs.href.split("/")[1]
  }

  console.log('📁 Save streamers to' + streamersPath +' file\n');
  fs.writeFile(streamersPath, JSON.stringify(streamers), function(err) {
    if (err) {
        console.log(err);
    }
  });
}

async function scroll(page,times) {
  console.log('🔨 Emulate the scrolling...');
  for (var i = 0; i < times; i++) {
    await page.evaluate(async(page) => {
      var x = document.getElementsByClassName("scrollable-trigger__wrapper");
      x[0].scrollIntoView();
    });
    await page.waitFor(scrollDelay);
  }
}

async function viewRandomPage(page) {
  var streamers = JSON.parse(fs.readFileSync(streamersPath, 'utf8'));
  console.log('\n📁 Streamers loaded from file');
  await page.setViewport({width: 1280, height: 1280});
  while (run) {
    let watch = streamers[getRandomInt(0, streamers.length)];
    var sleep = getRandomInt(6,10)*60000;

    console.log('\n🔗 Streamer: ',baseUrl+watch);
    await page.goto(baseUrl+watch);
    console.log('💤 Sleep ' + sleep/60000 + ' minutes\n');

    await page.waitFor(sleep);
  }
}

async function checkLogin(page) {
    process.stdout.write('🔐 Checking login...  ');
    await page.goto(baseUrl, {"waitUntil" : "networkidle0"});
    let cookieSetByServer = await page.cookies();
    for (var i = 0; i < cookieSetByServer.length; i++) {
      if (cookieSetByServer[i].name == 'twilight-user'){
        console.log('✅ Login successful');
        return true;
      }
    }
    console.log('\n🛑 Login failed!');
    console.log('🔑 Wrong token!');
    fs.unlinkSync(configPath);
    process.exit()
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function shutDown() {
  console.log("\n👋Bye Bye👋");
  run = false;
  process.exit();
}

process.on("SIGINT", shutDown);
process.on("SIGTERM", shutDown);
