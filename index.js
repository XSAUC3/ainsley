const Discord = require("discord.js");
const client = new Discord.Client({autoReconnect: true});
const music = require('discord.js-music');
const ytdl = require('ytdl-core');
const streamOptions = { seek: 0, volume: 1 };
var request = require("superagent");

var game = "food...nah! ~help"; 

const embed = new Discord.RichEmbed()
  .setTitle('Ainsley BOT')
  .setAuthor('Ainsley', 'https://cdn.discordapp.com/avatars/307154840914493451/803911ab6c3183088c686df5912a541a.png')
  .setColor(0x00AE86)
  .setDescription('Yeah Boii !')
  .setFooter('This is a Mems Bot', 'https://cdn.discordapp.com/avatars/307154840914493451/803911ab6c3183088c686df5912a541a.png')
  .setImage('https://media.tenor.co/images/777950e3370e21832f691d468930b0dc/tenor.gif')
  .setThumbnail('https://cdn.discordapp.com/avatars/307154840914493451/803911ab6c3183088c686df5912a541a.png')
  .addField('Ainsley BOT By,', 'Chinmay')

const sademb = new Discord.RichEmbed()
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
  if (msg.content === '..meem') {
    msg.reply('Now I Will Start Posting meems here Every Fuking hour !');
    function tick()
{
    //get the mins of the current time
    var mins = new Date().getMinutes();
    if(mins == "00"){
        msg.reply('Meems are here !');
     }
    console.log('Tick ' + mins);
}

setInterval(tick, 1000);
  }
});

client.on('message', msg => {
  if (msg.content === '..join') {
    msg.reply('Yeah Boi Joining VC ........');
    var voiceChannel = client.channels.filter(g => {
    return g.type == 'voice' && g.name == 'general';
    }).first();
    voiceChannel.join()
    .then(connection => {
    const dispatcher = connection.playFile('boy.mp3');
    })
    .catch(console.error);
    }
});

client.on('message', msg => {
  if (msg.content === '..help') {
    msg.author.sendMessage("Right Now Only Commands,"+'\n' + "FUCK {indipendent}"+ "\n"+"~join & ~leave"+"\n"+"sad anywhere in the message will they u dont be sad ... lel" +" ainsley anywhere in your message will activate ainsley command ! also ~join And ~leave You know What That does !");
  }
});

client.on('message', msg => {
  if (msg.content.includes("ainsley") ) {
    msg.channel.sendEmbed(embed);
  }
});

client.on('message', msg => {
  if (msg.content.includes("sad") ) {
    msg.channel.sendEmbed(sademb);
  }
});

client.on('message', msg => {
  if (msg.content === '..leave') {
    msg.reply('Yeah Boi Leaving VC ........');
    var voiceChannel = client.channels.filter(g => {
    return g.type == 'voice' && g.name == 'general';
    }).first();
    voiceChannel.leave();
  }
});



client.on("message", m => {
	if (m.content === '..mems') {
    m.reply('You are fukin Gay !');
  }
});


client.login('YOUR TOKEN');
