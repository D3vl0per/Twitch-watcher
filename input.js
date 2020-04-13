const inquirer = require('inquirer');
const dayjs = require('dayjs');
exports.askLogin = () => {
    const questions = [
      {
       name: 'token',
       type: 'password',
       message: 'Enter your auth-token from twitch.tv 🔑:',
       validate: function(value) {
         if (value.length) {
           return true;
         }
         else {
           return 'Please enter your valid token!';
         }
       }
     },
     {
      name: 'expDate',
      type: 'input',
      message: 'Enter your auth-token expires date from twitch.tv 📆:',
      validate: function(value) {

        if (!dayjs(value.replace(/\s/g, '')).isValid()){
          return 'Please enter valid date!'
        }
        else if (dayjs().format() > dayjs(value.replace(/\s/g, '')).format()){
          return 'Expired token!'
        }
        else if (value.length) {
          return true;
        }
        else {
          return 'Please enter valid date!';
        }

      }
    }
    ];
    return inquirer.prompt(questions);
  }
/*
exports.askOptions = () => {
    const questions = [
      {
       type: 'list',
       name: 'options',
       message: 'Select options',
       choices: ['📡 Check active streamers', '📌 Run watcher'],
       default: ['📡 Check active streamers'],
       validate: function(value) {
         if (value.length) {
           return true;
         }
         else {
           return 'Please select option!'
         }
       }
      }
    ];
    return inquirer.prompt(questions);
  }
*/
