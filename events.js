const fs = require("fs");
const readline = require("readline");

let activities = [];
let currentActivity = null;

const rl = readline.createInterface({
    input: fs.createReadStream("events.md"),
    output: process.stdout,
    terminal: false,
});

rl.on("line", line => {
    if (line.startsWith("#")) {
        currentActivity = {
            title: line.substring(1).trim(),
            description: "",
            date: "",
            location: "",
            price: "",
            image: "",
        };
        activities.push(currentActivity);
    } else if (line.startsWith("*")) {
        const value = line.substring(1).trim();
        if (!currentActivity.description) currentActivity.description = value;
        else if (!currentActivity.date) currentActivity.date = value;
        else if (!currentActivity.location) currentActivity.location = value;
        else if (!currentActivity.price) currentActivity.price = value;
        else if (!currentActivity.image) currentActivity.image = value;
    }
});

rl.on("close", () => {
    fs.writeFileSync(
        "events.json",
        JSON.stringify({ activities: activities }, null, 2)
    );
});
