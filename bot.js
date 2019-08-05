const Discord = require('discord.js');
var weather = require('weather-js');
var fs = require('fs');

// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'NDM3NDY1MzUzMTUzNTQ0MTk1.Db2c6Q.NxkMOaKCTCAEa1vM4omg5a5Mx9Q';

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
    fs.appendFile("messageLogs.txt", message.content + "\n", function(err) {
    if(err) {
        return console.log(err);
    }
});
  // If the message is "ping"
  if (message.content === '!meme') {
    var randomNum = Math.floor(Math.random() * 8) + 1;
    switch(randomNum) {
        case 1: message.channel.send("t1 alpha as fuck"); break;
        case 2: message.channel.send("AHHHHHHHH OK"); break;
        case 3: message.channel.send("<:dvon_surprised:416759603511164928>"); break;
        case 4: message.channel.send("y u frame"); break;
        case 5: message.channel.send("pocket whip"); break;
        case 6: message.channel.send("twitch man"); break;
        case 7: message.channel.send("amazon > walmart"); break;  
        case 8: message.channel.send("y u no pay"); break;      
    }
  } else if (message.content === '!memes') {
      for (var i = 0; i < 10; i++) {
          var randomNum = Math.floor(Math.random() * 9) + 1;
          switch(randomNum) {
            case 1: message.channel.send("t1 alpha af"); break;
            case 2: message.channel.send("AHHHHHHHH OK"); break;
            case 3: message.channel.send("<:dvon_surprised:416759603511164928>"); break;
            case 4: message.channel.send("y u frame"); break;
            case 5: message.channel.send("pocket whip"); break;
            case 6: message.channel.send("twitch man"); break;
            case 7: message.channel.send("amazon > walmart"); break;  
            case 8: message.channel.send("y u no pay"); break;   
            case 9: message.channel.send("<:dvon_surprised:416759603511164928> 📖 ❓"); break; 
    }
      }
  } else if (message.content === 'Hey Adrian') {
      message.channel.send("Argh I'm kinda tired");
      message.channel.send("Yo Smoothie king?");
      message.channel.send("Braums?");
      message.channel.send("Greek?");
  } else if (message.content === 'Ay Dextuh') {
        message.channel.send("I'm walkin here");
    }
    else if (message.content === 'weather nqa') {
        weather.find({search: 'Bentonville, AR', degreeType: 'F'}, function(err, result) {
        if(err) console.log(err);
        
        message.channel.send(JSON.stringify(result, null, 2));
        });
    }
    else if (message.content === 'ping Hien') {
        message.channel.send("<@!359822312905768965> ayo wus poppin in ya hood");
    }
    else if (message.content === 'What do you think, Memes?') {
        var randomNum = Math.floor(Math.random() * 6) + 1;
          switch(randomNum) {
            case 1: message.channel.send("Yes"); break;
            case 2: message.channel.send("No"); break;
            case 3: message.channel.send("Hell No"); break;
            case 4: message.channel.send("Hell Yea"); break;
          }
    }
});

// Log our bot in
client.login(token);
