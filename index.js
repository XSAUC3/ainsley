// Discord.js bot
const Discord = require('discord.js');
const client  = new Discord.Client();

const yt      = require('ytdl-core');

var analyrics = require("analyrics");
analyrics.setToken("Nb8CfqUus5LBVtIj-uWWQiO9EdbhA47s9bpJ2yXIZcZ32fqO_1p6yH-VzEXVHnxo");

const config  = require("./config.json");
const embeds = require("./embeds.js");

const tune          = '199926086522503168';

const cmds = new Discord.RichEmbed()
.setTitle('Ainsley BOT')
.setColor(0x00AE86)
.setDescription('Yeah Boi.')
.setFooter('This is a Mems Bot')
.setImage('http://i2.kym-cdn.com/photos/images/newsfeed/000/206/844/1315010298703.jpg')
.setThumbnail()
.addField('BOT Developed By', 'Chinmay')

client.on('ready', () => {
    console.log(`Logged in as ${client.user.username}!`);
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
    client.user.setGame('ainsley.tk Boiii');
    app.locals.servers  = client.guilds.size;
    app.locals.usrs    = client.users.size;
    app.locals.channels = client.channels.size;
});

client.on("guildCreate", guild => {
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    client.send_message(tune , `New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    //client.user.setGame(`on ${client.guilds.size} servers`);
});

client.on("message", message => {

    if (!message.content.startsWith(config.prefix) || !message.guild) return;
    const command = message.content.split(' ')[0].substr(config.prefix.length);
    const args = message.content.split(' ').slice(1).join(' ');
    
//=== === === === === === === === === C O M M A N D S === === === === === === === === === ===

    if (command === 'who') return message.channel.send('Ainsley BOT Created by **``chinmay``** ');

    if (command === 'help') {
        message.reply('Yeah Boi Check Your Dm ........');
        message.author.send({embed:cmds});
        message.author.send("```"+embeds.commands+"```");
    }

    if (command === 'ping') {
        message.channel.send(`Pong! API Latency is **${Math.round(client.ping)} ms**`);
    }

    if (command === 'dis') {
        message.reply('Yeah Boi You Joined Discord @ **'+ message.author.createdAt +'**');
    }

    if (command.startsWith("lyrics")) {
        if (message.content === config.prefix+"lyrics"){message.reply('Yeah Boi you need to supply a song name with this command ! ``eg:lyrics congratulations``');}
        else{
          var songname = message.content.replace(config.prefix+"lyrics ","");
          analyrics.getSong(songname, function(song) {
            var lyrics = song.lyrics;
            message.reply("\n **```"+song.title+" - "+song.artist+"```** \n");
            message.channel.send("**"+lyrics.substring(0,1000)   + "**");
            message.channel.send("**"+lyrics.substring(1001,2000)+ "**");
            message.channel.send("**"+lyrics.substring(2000,3000)+ "**");
            message.channel.send("**"+lyrics.substring(3001,4000)+ "**");
            message.channel.send("**"+lyrics.substring(4001,5000)+ "**");
          });
        }
    }

    if(command === 'avatar'){
        message.reply(message.author.avatarURL);        
    }

    if(command === 'dick'){
        var x = message.content.length;
        var rand = Math.floor(Math.random() * Math.pow(10,x));
      var dummy = rand;
      while (dummy<Math.pow(10,x-1)){
        rand = "0" + rand;
        dummy = dummy*10;
      }
        message.reply(rand)
    }

    if(command === 'toss')
    {
        x = (Math.floor(Math.random()*2) ) ? 'heads :monkey_face:' : 'tails :monkey:';
        message.reply("That's " + x + " !");
    }

    if(command === 'PornDish')
    {
      var aimer = require('./crawl/index.js')
      aimer('http://porndish.com/')
      .then($ => {
          $('a.g1-frame').each(function() {
              url = $(this).attr('href');
              aimer(url)
                  .then($ => {
                      $('iframe').each(function() {
                          lk = $(this).attr('src');
                          message.reply("yeahh boii . here is some porn for u "+ lk);
                      });
                  });
          });
      });
    }

    // === === === === === === === === M U S I C  C O M M A N D S === === === === === === ===
    
    if (command === 'join') {
        const voiceChannel = message.member.voiceChannel;
        if (!voiceChannel) {
          return message.reply(`Please be in a voice channel first!`);
        }
        message.reply('Yeah Boi Joining VC ........');
        voiceChannel.join()
        .then(connection => {
        const dispatcher = connection.playFile('boy.mp3');
        })
        .catch(console.error);
    }

    if (command === 'boi') {
        const voiceChannel = message.member.voiceChannel;
        if (!voiceChannel) {
          return message.reply(`Please be in a voice channel first!`);
        }
         message.reply(`Playing The Longest Boi Remix !`);
        voiceChannel.join()
          .then(connnection => {
            const stream = yt("https://www.youtube.com/watch?v=eZ2fzJ-KdnA", {filter: 'audioonly'});
            const dispatcher = connnection.playStream(stream);
            dispatcher.on('end', () => {
              voiceChannel.leave();
            });
          });
    }

    if (command.startsWith('play')) {
        var song = message.content.replace(config.prefix+"play ","")
        var ptrn = (/^[a-zA-Z0-9-_]{11}$/)
        var songt = ptrn.test(song)
        if (songt == "false" || !song.includes("youtu"))
        {message.reply("the link should be `` youtube `` only !")}
        else{
        const voiceChannel = message.member.voiceChannel;
        if (!voiceChannel) {
        return message.reply(`Please be in a voice channel first!`);
        }
        yt.getInfo(song, function(err, info) {
            if(err != null){message.reply("``youtube`` video link not found !")}
            else
            {
            message.delete(300);
            message.reply("Yeah Boi ! Playing **"+info.title+"**")
        voiceChannel.join()
        .then(connnection => {
            const stream = yt(song, {filter: 'audioonly'});
            const dispatcher = connnection.playStream(stream);
            dispatcher.on('end', () => {voiceChannel.leave();});
        });
            }
        });
        }
    }

    if (command === 'leave') {
        const voiceChannel = message.member.voiceChannel;
        if (!voiceChannel) {message.reply(`Please be in a voice channel first!`);}
        else{message.reply('Yeah Boi Leaving VC ........');
        voiceChannel.leave();}
    }

//=== === === === === === === === === C O M M A N D S === === === === === === === === === ===    

});  

client.on("guildMemberAdd", (member) => {
    const guild = member.guild;
      console.log(member.user.username + " joined " + guild.name);
      guild.defaultChannel.send('hey welcome'+member.user);
      guild.defaultChannel.send({embed: {
    color: 0x00AE86,
    author: {
      name: guild.name,
      icon_url: guild.iconURL 
    },
    title: 'Yeah Boi !',
    url: 'http://imgur.com/gallery/FExIJ',
    description: 'Welcome To The Server  '+ member.user.username + ' !',
    "image": {
                  "url": member.user.avatarURL,
                  },
    fields: [
      {
        name: member.user.username,
        value: "ID: ``" + member.user.id +"`` \nJoined Discord @ **"+member.user.createdAt+"**"
      },
      {
        name: 'Server Count **``'+ guild.memberCount + '``**',
        value:"``"+ member.user.username+" Hope you enjoy your stay here !``"
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: guild.iconURL,
      text: '© ' + guild.name
    }
  
  }});
  
  });
  
  client.on('guildMemberRemove', (member) => {
    if (member.id != "307154840914493451"){
    const guild = member.guild;
    console.log(member.user.username + " left " + guild.name);
  
        guild.defaultChannel.send({embed: {
    color: 0x00AE86,
    author: {
      name: guild.name,
      icon_url: guild.iconURL
    },
    title: 'Yeah Boi !',
    url: 'http://imgur.com/gallery/FExIJ',
    description: 'Bye Bye '+ member.user.username + ' !',
    "image": {
                  "url": member.user.avatarURL,
                  },
    fields: [
      {
        name: member.user.username,
        value:"ID: ``"+ member.user.id +"``",
        value: 'Joined @ '+member.joinedAt,
      },
      {
        name: 'Server Count **``'+ guild.memberCount + '``**',
        value:"``"+ member.user.username+" Hope To See You Back !``"
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: guild.iconURL,
      text: '© ' + guild.name
    }
      
  }});
    }
    });


client.login(config.token);

//=== === === === === === === === === === W E B   S E R V E R === === === === === === === === ===

// Web app (Express + EJS)
const http = require('http');
const express = require('express');
const app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 5000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the `public` directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', (request, response) => {
    // ejs render automatically looks in the views folder
    response.render('index');
});

app.listen(port, () => {
    // will echo 'Our app is running on http://localhost:5000 when run locally'
    console.log('Our app is running on http://localhost:' + port);
});

// pings server every 15 minutes to prevent dynos from sleeping
 setInterval(() => {
  http.get('https://ainsley-bot.herokuapp.com/');
 }, 900000);
