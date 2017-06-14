const Discord       = require("discord.js");
const client        = new Discord.Client({autoReconnect: true});
const yt            = require('ytdl-core');
var giphy           = require('giphy-api')();
const streamOptions = { seek: 0, volume: 1 };
const tune          = '199926086522503168';
const indra         = '203851306044096512';
var BillBoardh      = require('billboard-hot-100');
var tc = require('node-techcrunch');
const randomPuppy = require('random-puppy');


var analyrics = require("analyrics");
analyrics.setToken("Nb8CfqUus5LBVtIj-uWWQiO9EdbhA47s9bpJ2yXIZcZ32fqO_1p6yH-VzEXVHnxo");

const newUsers = [];

var join_leave = [];

var game = "food...nah! ..help"; 

var s1  ;
var ss1 ;
var ssu1;

var s2  ;
var ss2 ;
var ssu2;

var s3  ;
var ss3 ;
var ssu3;

var d = new Date();
var i = d.getDay();

client.setMaxListeners(100);

let responseObject = {
  'fuck': 'fuck u too boi!',
  'shit': 'lmao, u should shit your pants !',
  'ass': 'lick my ass boi !'
};


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
  .addField('Commands: ',' •..join •..leave •..toss •..mems •..boi •..avatar •..T3 •..SETS1 •..SETSU1 '); 

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

client.on('message', (message) => {
  if(responseObject[message.content]) {
    if (message.author.id != "307154840914493451")
        {
          message.channel.send(responseObject[message.content]);
        }
  }
});


client.on('message', (message) => {
  if(message.content === "..as" ) 
  {
    console.log(client.guilds);
    message.reply("Boi I Am Now on **``"+ client.guilds +"``**");
  }
});


client.on('message', (message) => {
  if(message.content === "..welcomer" ) 
  {
      join_leave.push({name:message.guild.name , value:message.channel.id });
      message.reply(message.channel.name + " wih id:``" + message.channel.id + "`` has been set for join and leave functionality !")
       
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

client.on('message',msg => {
  if (msg.content==="..random")
  {
    randomPuppy()
    .then(url => {
       msg.reply(url);
    })
  }
})


client.on('message', msg => {
  if (msg.content === '..help') {
    msg.reply('Yeah Boi Check Your Dm ........');
    msg.author.send({embed:cmds});
  }
});


client.on('message', msg => {
  if (msg.content.startsWith('..lyrics')) {
    if (msg.content === "..lyrics"){msg.reply('Yeah Boi you need to supply a song name with this command ! ``eg:..lyrics congratulations``');}
    else{
      var songname = msg.content.replace("..lyrics ","");
      analyrics.getSong(songname, function(song) {
        var lyrics = song.lyrics;
        msg.reply("\n **```"+song.title+" - "+song.artist+"```** \n");
        msg.channel.send("**"+lyrics.substring(0,1000)   + "**");
        msg.channel.send("**"+lyrics.substring(1001,2000)+ "**");
        msg.channel.send("**"+lyrics.substring(2000,3000)+ "**");
        msg.channel.send("**"+lyrics.substring(3001,4000)+ "**");
        msg.channel.send("**"+lyrics.substring(4001,5000)+ "**");
      });
    }
  }
});


client.on('message', msg => {
  if (msg.content === '..dis') {
    msg.reply('Yeah Boi You Joined Discord @ **'+ msg.author.createdAt +'**');
  }
});

client.on('message', msg => {
  if (msg.content.startsWith('..diss')) {
    var jd = msg.content.replace("..diss ","");
    msg.reply('Yeah Boi '+ jd +' Joined Discord @ **'+ jd.createdAt +'**');
  }
});


client.on('message', msg => {
if(['FUCK', 'Fuk','FucK', 'FUck', 'F_ck' , 'Fuck', 'fuk'].indexOf(msg.content) >= 0){
      if (msg.author.id != "307154840914493451")
        {
          msg.delete(300);
          msg.reply('``Fuck You Too Boi.``');
        }
    }
});

client.on('message', msg => {
  if (msg.content.includes("sad") ) {
    msg.channel.send({embed:sad});
  }
});

client.on('message', message => {
  if (message.content.startsWith("..SETS1")) {
    if (message.author.id === tune||indra ) 
    {
        s1 = message.content;
        ss1 = s1.replace("..SETS1","")
        if(ss1 == ""){message.reply("``Song Name Cannot Be Empty``")}
        else
        {
          console.log(ss1);
          message.reply("**The Song 1 ``NAME`` Set For the day is **``"+ss1+"``");
        }  
  }
    else
    {
        message.reply("``This Command Is Only For Djs With Permisions.``");
    }
}
});


client.on('message', message => {
  if (message.content.startsWith("..SETS2")) {
    if (message.author.id === tune||indra ) 
    {
        s2 = message.content;
        ss2 = s2.replace("..SETS2","")
        if(ss2 == ""){message.reply("``Song Name Cannot Be Empty``")}
        else
        {
          console.log(ss2);
          message.reply("**The Song 2 ``NAME`` Set For the day is **``"+ss2+"``");
        }  
  }
    else
    {
        message.reply("``This Command Is Only For Djs With Permisions.``");
    }
}
});


client.on('message', message => {
  if (message.content.startsWith("..SETS3")) {
    if (message.author.id === tune||indra ) 
    {
        s3 = message.content;
        ss3 = s3.replace("..SETS3","")
        if(ss3 == ""){message.reply("``Song Name Cannot Be Empty``")}
        else
        {
          console.log(ss3);
          message.reply("**The Song 3 ``NAME`` Set For the day is **``"+ss3+"``");
        }  
  }
    else
    {
        message.reply("``This Command Is Only For Djs With Permisions.``");
    }
}
});



client.on('message', message => {
  if (message.content.startsWith("..SETSU1")) {
    if (message.author.id === indra||tune  ) 
    {
        su1 = message.content;
        ssu1 = su1.replace("..SETSU1","")
        if(ssu1 == ""){message.reply("``Song URL Cannot Be Empty``")}
        else
        {
        console.log(ssu1);
        message.reply("**The Song 1 `URL` Set For the day is **``"+ssu1+"``");
        }
    }
    else
    {
        
        message.reply("``This Command Is Only For Djs With Permisions.``");
    }
}
});


client.on('message', message => {
  if (message.content.startsWith("..SETSU2")) {
    if (message.author.id === indra||tune  ) 
    {
        su2 = message.content;
        ssu2 = su2.replace("..SETSU2","")
        if(ssu2 == ""){message.reply("``Song URL Cannot Be Empty``")}
        else
        {
        console.log(ssu2);
        message.reply("**The Song 2 `URL` Set For the day is **``"+ssu2+"``");
        }
    }
    else
    {
        
        message.reply("``This Command Is Only For Djs With Permisions.``");
    }
}
});


client.on('message', message => {
  if (message.content.startsWith("..SETSU3")) {
    if (message.author.id === indra||tune  ) 
    {
        su3 = message.content;
        ssu3 = su3.replace("..SETSU3","")
        if(ssu3 == ""){message.reply("``Song URL Cannot Be Empty``")}
        else
        {
        console.log(ssu3);
        message.reply("**The Song 3 `URL` Set For the day is **``"+ssu3+"``");
        }
    }
    else
    {
        
        message.reply("``This Command Is Only For Djs With Permisions.``");
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



client.on('message', (msg) => {
  if (msg.content === '..T3') {
    if(ss1 == undefined || ss2 == undefined || ss3 == undefined)
    {msg.reply("``TOP 3 FOR THE DAY NOT SET YET !``")}
    else
    { 
          msg.channel.send( "``Top 3 Songs`` \n"+ss1+" - "+ssu1);
          msg.channel.send( ss2+" - "+ssu2);
          msg.channel.send( ss3+" - "+ssu3);
    }
  }
});


client.on('message', (msg) => {
  if (msg.content.startsWith('..bb')) {
    if (msg.content==="..bb" ) {msg.reply("You Need To Supply a rank with this command. ``eg: ..bb 1``")}
    var rank = msg.content.replace("..bb ","");
    var ptn = (/^[1-9]{2}$/)
    var rankt = ptn.test(rank)
    if (rankt == "false" ) {msg.reply("You Need To Supply a rank with this command. ``eg: ..bb 1``")}
    else{
    BillBoardh.init().then(function(billboard){
      var bbsong = billboard.getSongAt(rank-1)
      msg.reply({embed: {
  color: 0x00AE86,
  author: {
    name: client.user.username ,
    icon_url: client.user.avatarURL 
  },
  title: 'Billboard HOT Chart',
  url: 'http://www.billboard.com',
  image: {
                "url": bbsong.image,
                },
  fields: [
    {
      name: bbsong.artist,
      value:bbsong.name + " @ Rank `` "+ bbsong.rank+ " ``"
    },
  ],
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
    text: '© ' + client.user.username
  }
}})

  })
}
}
});


client.on("message", msg =>{
  if(msg.content === "..news")
  {
   tc.crunchLast()
      .then(function(res) {
        //console.log(res);
        msg.reply("**TODAY'S NEWS** \n *```"+ res.next.title +"```* \n ``` Markdown" + res.text+"```")
       // msg.reply("**``"+res.text+"``**");
  })
  .catch(function(err) {
      console.log(err + " error gettting the news"); 
  });
  }
});



client.on("guildCreate", (guild) => {
    console.log("+--------------------------------------------------------------+")
    console.log(client.user.username + " joined " + guild.name);
    console.log("+--------------------------------------------------------------+")
});

client.on("guildDelete", (guild) => {
    console.log("+--------------------------------------------------------------+")
    console.log(client.user.username + " left " + guild.name);
    console.log("+--------------------------------------------------------------+")
});




client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
    console.log(member.user.username + " joined " + guild.name);
    guild.channels.defaultChannel.send('hey welcome'+member.user);
    guild.channels.value.send({embed: {
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

      guild.channels.defaultChannel.send({embed: {
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


client.on('message', message => {

  if (message.content === '..avatar') {
    message.reply(message.author.avatarURL);
  }
});


client.on('message', message => {

  if (message.content === '..clean') {
     message.channel.sendMessage('Cleaning...');
    message.channel.bulkDelete(cleanarr);
    var cleanarr = [];
  }
});


client.on("message", m => {
	if (m.content.includes("..dick")) {
    var x = m.content.length;
    var rand = Math.floor(Math.random() * Math.pow(10,x));
  var dummy = rand;
  while (dummy<Math.pow(10,x-1)){
    rand = "0" + rand;
    dummy = dummy*10;
  }
    m.reply(rand)
  }
});

client.on("message", m => {
	if (m.content.includes("..toss")) {
    x = (Math.floor(Math.random()*2) ) ? 'heads :monkey_face:' : 'tails :monkey:';
    m.reply("That's " + x + " !");
  }
});


client.on("message", m => {
	if (m.content.startsWith('..gif')) {
    if(m.content === '..gif')
    {m.reply('You need to pass a tag with this command eg;``..giff ass`` !');}
    else{
    var tags = m.content.replace("..gif ","")
    giphy.random(tags, function (err, res) {
      m.reply(res.data.image_url);
});
  }
  }
});


client.on('message', message => {
  if (message.content ===('..boi')) {
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
});


client.on('message', message => {
  if (message.content.startsWith('..play')) {
    var song = message.content.replace("..play ","")
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
});

    client.login('MzA3MTU0ODQwOTE0NDkzNDUx.C-OL0Q.892UuiJOCGbqg57J5pWFIwWXIX0');


