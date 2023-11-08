// Node.js script to convert activities.md to JSON
const fs = require('fs');
const readline = require('readline');

let activities = [];
let currentActivity = null;

const rl = readline.createInterface({
  input: fs.createReadStream('activities.md'),
  output: process.stdout,
  terminal: false
});

rl.on('line', (line) => {
  if (line.startsWith('#')) {
    currentActivity = { title: line.substring(1).trim(), description: '', date: '', location: '', price: '' };
    activities.push(currentActivity);
  } else if (line.startsWith('*')) {
    const value = line.substring(1).trim();
    if (!currentActivity.description) {
      currentActivity.description = value;
    } else if (!currentActivity.date) {
      currentActivity.date = value;
    } else if (!currentActivity.location) {
      currentActivity.location = value;
    } else if (!currentActivity.price) {
      currentActivity.price = value;
    }
  }
});

rl.on('close', () => {
  fs.writeFileSync('activities.json', JSON.stringify({ activities: activities }, null, 2));
});