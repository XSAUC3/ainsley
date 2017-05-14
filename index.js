const Discord = require("discord.js");
const client = new Discord.Client({autoReconnect: true});
//const music = require('discord.js-music');
const yt = require('ytdl-core');
const streamOptions = { seek: 0, volume: 1 };
//var request = require("superagent");

var game = "food...nah! ..help"; 

var s1  = '';
var ss1 = '';
var ssu1 = '';

var s2  = '';
var ss2  = '';
var ssu2 = '';

var s3  = '';
var ss3 = '';
var ssu3 = '';

client.setMaxListeners(100);

const ans = new Discord.RichEmbed()
  .setTitle('Ainsley BOT')
  .setAuthor('Ainsley', 'https://cdn.discordapp.com/avatars/307154840914493451/803911ab6c3183088c686df5912a541a.png')
  .setColor(0x00AE86)
  .setDescription('Yeah Boii !')
  .setFooter('This is a Mems Bot', 'https://cdn.discordapp.com/avatars/307154840914493451/803911ab6c3183088c686df5912a541a.png')
  .setImage('https://media.tenor.co/images/777950e3370e21832f691d468930b0dc/tenor.gif')
  .setThumbnail('https://cdn.discordapp.com/avatars/307154840914493451/803911ab6c3183088c686df5912a541a.png')
  .addField('Ainsley BOT By,', 'Chinmay')

const cmds = new Discord.RichEmbed()
  .setTitle('Ainsley BOT')
  .setAuthor('Ainsley', 'https://cdn.discordapp.com/avatars/307154840914493451/803911ab6c3183088c686df5912a541a.png')
  .setColor(0x00AE86)
  .setDescription('Yeah Boii !')
  .setFooter('This is a Mems Bot', 'https://cdn.discordapp.com/avatars/307154840914493451/803911ab6c3183088c686df5912a541a.png')
  .setImage('http://i2.kym-cdn.com/photos/images/newsfeed/000/206/844/1315010298703.jpg')
  .setThumbnail('https://cdn.discordapp.com/avatars/307154840914493451/803911ab6c3183088c686df5912a541a.png')
  .addField('Ainsley BOT By,', 'Chinmay')
  .addField('Commands: ',' •..join •..leave •..toss •..mems •..boi  •.SET-TOP-3 '); 

const sad = new Discord.RichEmbed()
  .setTitle('Dont be Sad ....')
  .setColor(0x00AE86)
  .setDescription('its all ok when yo are with me.. !')
  .setImage('https://pics.me.me/want-some-sausage-with-that-mash-hjnpics-ainsley-harriot-jn-6782916.png')
  .setThumbnail('https://cdn.discordapp.com/avatars/307154840914493451/803911ab6c3183088c686df5912a541a.png')


client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
  client.user.setGame(game);

});

client.on('message', msg => {
  if (msg.content === 'boi') {
    msg.reply('Yeahhhh Boiiiiiiiiii !');
  }
});




client.on('message', msg => {
  if (msg.content === '..join') {
    
     const voiceChannel = msg.member.voiceChannel;
    if (!voiceChannel) {
      return msg.reply(`Please be in a voice channel first!`);
    }
    msg.reply('Yeah Boi Joining VC ........');
    voiceChannel.join()
    .then(connection => {
    const dispatcher = connection.playFile('boy.mp3');
    })
    .catch(console.error);
    }
});

client.on('message', msg => {
  if (msg.content.includes("ainsley") ) {
    msg.channel.send({embed:ans});
  }
});


client.on('message', msg => {
  if (msg.content === '..help') {
    msg.reply('Yeah Boi Check Your Dm ........');
    msg.author.send({embed:cmds});
  }
});

client.on('message', msg => {
  if (msg.content.includes("fuck")) {
    msg.delete(300);
    msg.reply('``Fuck You Too Boi.``');
  }
});

client.on('message', msg => {
  if (msg.content.includes("FUCK")) {
    msg.delete(300);
    msg.reply('``Fuck You Too Boi.``');
  }
});


client.on('message', msg => {
  if (msg.content.includes("sad") ) {
    msg.channel.send({embed:sad});
  }
});

client.on('message', message => {
  if (message.content.includes("..SETS1")) {
    if (message.author.id !== '203851306044096512' ) 
    {message.reply("``This Command Is Only For Djs With Permisions.``");}
    else
    {
        s1 = message.content;
        ss1 = s1.replace("..SETS1","")
        console.log(ss1);
        message.reply("**The Song 1 ``NAME`` Set For the day is **``"+ss1+"``");
    }
}
});

client.on('message', message => {
  if (message.content.includes("..SETSU1")) {
    if (message.author.id !== '203851306044096512' ) 
    {message.reply("``This Command Is Only For Djs With Permisions.``");}
    else
    {
        su1 = message.content;
        ssu1 = su1.replace("..SETSU1","")
        console.log(ssu1);
        message.reply("**The Song 1 ``URL` Set For the day is **``"+ssu1+"``");
    }
}
});


client.on('message', msg => {
  if (msg.content === '..leave') {
    const voiceChannel = msg.member.voiceChannel;
    if (!voiceChannel) {msg.reply(`Please be in a voice channel first!`);}
    else{msg.reply('Yeah Boi Leaving VC ........');
    voiceChannel.leave();}
  }
});


client.on("message", m => {
	if (m.content.includes("..toss")) {
    x = (Math.floor(Math.random()*2) ) ? 'heads :monkey_face:' : 'tails :monkey:';
    m.reply("That's " + x + " !");
  }
});


client.on("message", m => {
	if (m.content === '..mems') {
    m.reply('You are fukin Gay !');
  }
});


client.on('message', message => {
  if (message.content ===('..boi')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`Please be in a voice channel first!`);
    }
    voiceChannel.join()
      .then(connnection => {
        const stream = yt("https://www.youtube.com/watch?v=eZ2fzJ-KdnA", {filter: 'audioonly'});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
});


client.on('message', message => {
  if (message.content ===('..say')) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`Please be in a voice channel first!`);
    }
    voiceChannel.join()
      .then(connnection => {
        const stream = message.tts;
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
});


client.login('MzA3MTU0ODQwOTE0NDkzNDUx.C-OL0Q.892UuiJOCGbqg57J5pWFIwWXIX0');
