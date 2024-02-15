const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)

const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
const fs = require('fs');
const moment = require('moment');
const { MessageActionRow, MessageButton } = require('discord.js');
const client = new Discord.Client({
    // @ts-ignore
    intents:3276799
})
const { AutoKill } = require('autokill')
AutoKill({Client: client, Time: 5000}) // Time Must be in Milliseconds And More Than 5 Seco


const prefix = "#"

client.on("messageCreate", async(message) => {
  if (!message.guild || message.author.bot) return;
  const command = message.content.split(" ")[0];
  if (command == prefix + "ping") {
    const msg = Date.now() - message.createdTimestamp; // Made By: SLASH
    const api = Math.round(client.ws.ping);
    let states = "🟢 Excellent"; // Made By: SLASH
    let states2 = "🟢 Excellent";
    if (Number(msg) > 70) states = "🟢 Good"; // Made By: SLASH
    if (Number(msg) > 170) states = "🟡 Not Bad";
    if (Number(msg) > 350) states = "🔴 Soo Bad"; // Made By: SLASH
    if (Number(api) > 70) states2 = "🟢 Good";
    if (Number(api) > 170) states2 = "🟡 Not Bad"; // Made By: SLASH
    if (Number(api) > 350) states2 = "🔴 Soo Bad";
    const embed = new Discord.MessageEmbed() // Made By: SLASH
      .setAuthor({ name: `${client.user.username}`, iconURL: `${client.user.avatarURL({ format: 'png' })}` })
      .addField("**Time Taken:**", msg + " ms 📶 | " + states, true) // Made By: SLASH
      .addField("**WebSocket:**", api + " ms 📶 | " + states2, true)
      .setFooter({ text: `Made By: Newom Beta`, iconURL: `https://cdn.discordapp.com/attachments/1089005276943896616/1089005588379349062/witnet-foundation.png` }) // Made By: SLASH
      .setTimestamp();
    message.channel.send({ embeds: [embed] }).catch((err) => { return; }); // Made By: SLASH
  }
});
client.on('messageCreate', magrm => {
 if (magrm.author.bot) return;
 if (magrm.content.startsWith("السلام عليكم")) {
   magrm.reply({
     content: "وعليكم السلام ورحمة الله وبركاته",
     allowedMentions: { repliedUser: false }
   })
  }
})



client.on("guildMemberRemove", async function(member){
let rolesaam = member.roles.cache.filter((roles) => roles.id !== member.guild.id).map((roleaa) => roleaa.id)
db.set(`roleaddaaa_${member.user.id}` , rolesaam)});   
client.on("guildMemberAdd", async function(member){
roleamr = db.get(`roleaddaaa_${member.user.id}`)
if (roleamr!== undefined) return member.roles.add(roleamr).catch(e =>{return console.log(`There is an error in the permissions .. I need to get an administrator role`)});});
   


var lnk = "https://media.discordapp.net/attachments/933453835463184454/1178813361962619012/welcom.png?ex=6577827e&is=65650d7e&hm=8ea79e06ad299f63358168e80f25884fdab031ac84f71405a4463ba1a534f704&=&format=webp&width=1288&height=675"
const db= require("pro.db")
const Canvas = require('@napi-rs/canvas');
var idd = "1081825534041935882" //ايدي شات الترحيب
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
 client.user.setActivity(`AK `, { type: 'STREAMING', url: 'https://www.twitch.tv/ak' })  

});


var { inviteTracker } = require("discord-inviter"),tracker = new inviteTracker(client);
tracker.on('guildMemberAdd', async (member,inviter) => {
    console.log(1)
        let x1 = db.get("x") || 0
        let y1 = db.get("y") || 0
        let dy1 = db.get("dy") || 10
        let dx1 = db.get("dx") || 10
        //if(!x || !y ||!dy||!dx) return
        
    console.log(2)
    db.add(inviter.id,1)
        const background = await Canvas.loadImage(lnk);
        const canvas = Canvas.createCanvas(background.width, background.height);
        const context = canvas.getContext('2d')
        context.drawImage(background, 0, 0, canvas.width, canvas.height);
        const avatar = await Canvas.loadImage(member.user.displayAvatarURL({size:1024}));
        const canvas1 = Canvas.createCanvas(512, 512);
        const ctx = canvas1.getContext('2d')
        ctx.beginPath();
        ctx.arc(256, 256, 200, 0, Math.PI * 2);
        ctx.clip();
        await ctx.drawImage(avatar, 0, 0, canvas1.width, canvas1.height)
        let circle = canvas1.encodeSync('png')
        if (circle) {
            circle = await Canvas.loadImage(circle)
            context.drawImage(circle, Math.floor(x1), Math.floor(y1), Math.floor(dx1),Math.floor(dy1))
        }
        const attachment = new Discord.MessageAttachment(await canvas.encode('png'), 'profile-image.png' );
        client.channels.cache.find(x=>x.id==idd).send({
            content:` 
  ⊰・───・𝓐𝓚・───・⊱
  > ♕ ￤𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐓𝐎 𝐒𝐄𝐑𝐕𝐄𝐑 :${member.guild.name}
  > 
  > ♕ ￤𝐌𝐄𝐌𝐁𝐄𝐑 :➔  ${member.user}          
  > 
  > ♕ ￤𝐈𝐍𝐕𝐈𝐓𝐄𝐑 :➔  <@!${inviter.id}>
  > 
  > ♕ ￤𝑴𝑬𝑴𝑫𝑬𝑹 𝑪𝑶𝑼𝑵𝑻 :➔ ${member.guild.memberCount}
  ⊰・───・𝓐𝓚・───・⊱`,
            files:[attachment]
        })
})

client.on("messageCreate",async m=>{
    if(m.content == "#set-welcome"){
        let x = db.get("x")
        let y = db.get("y")
        let dy = db.get("dy")
        let dx = db.get("dx")
        const background = await Canvas.loadImage(lnk);
        const canvas = Canvas.createCanvas(background.width, background.height);
        db.set("h",background.height)
        db.set("w",background.width)
        const context = canvas.getContext('2d');
        context.drawImage(background, 0, 0, canvas.width, canvas.height);
        const avatar = await Canvas.loadImage(m.member.user.displayAvatarURL({size:1024}));
        const canvas1 = Canvas.createCanvas(512, 512);
        const ctx = canvas1.getContext('2d')
        ctx.beginPath();
        ctx.arc(256, 256, 200, 0, Math.PI * 2);
        ctx.clip();
        await ctx.drawImage(avatar, 0, 0, canvas1.width, canvas1.height)
        let circle = canvas1.encodeSync('png')
        if(!x){ x= canvas.width/2
        db.set("x",x)
    }
        if(!y){
             y= canvas.height/2
             db.set("y",y)
        }
        if(!dx){
             dx = canvas.width/5
             db.set("dx",dx)
        }
        if(!dy){
             dy = canvas.width/5
             db.set("dy",dy)
        }
        if (circle) {
            circle = await Canvas.loadImage(circle)
            context.drawImage(circle, x, y, dx,dy)
        }
        const attachment = new Discord.MessageAttachment(await canvas.encode('png'), 'profile-image.png' );
        const row = new Discord.MessageActionRow()
        .addComponents(
            new Discord.MessageButton()
            .setCustomId("left")
            .setLabel("◀")
            .setStyle("PRIMARY"),
            new Discord.MessageButton()
            .setCustomId("right")
            .setLabel("▶")
            .setStyle("PRIMARY"),
            new Discord.MessageButton()
            .setCustomId("up")
            .setLabel("🔼")
            .setStyle("SECONDARY"),
            new Discord.MessageButton()
            .setCustomId("down")
            .setLabel("🔽")
            .setStyle("SECONDARY")
        )
        const row2 = new Discord.MessageActionRow()
        .addComponents(
            new Discord.MessageButton()
            .setCustomId("big")
            .setLabel("➕")
            .setStyle("PRIMARY"),
            new Discord.MessageButton()
            .setCustomId("small")
            .setLabel("➖")
            .setStyle("PRIMARY")
        )
        m.reply({
            files: [attachment],
            components : [row,row2]
        })
    }
})

client.on("interactionCreate",async i=>{
    if(!i.isButton()) return
    i.deferUpdate()
    if(!["914591800767942658","id2"].includes(i.user.id)) return
    if(i.customId == "left"){
        db.add("x",0-db.get("w")/20)
        let x = db.get("x")
        let y = db.get("y")
        let dy = db.get("dy")
        let dx = db.get("dx")
        const background = await Canvas.loadImage(lnk);
        const canvas = Canvas.createCanvas(background.width, background.height);
        const context = canvas.getContext('2d');
        context.drawImage(background, 0, 0, canvas.width, canvas.height);
        const avatar = await Canvas.loadImage(i.member.user.displayAvatarURL({size:1024}));
        const canvas1 = Canvas.createCanvas(512, 512);
        const ctx = canvas1.getContext('2d')
        ctx.beginPath();
        ctx.arc(256, 256, 200, 0, Math.PI * 2);
        ctx.clip();
        await ctx.drawImage(avatar, 0, 0, canvas1.width, canvas1.height)
        let circle = canvas1.encodeSync('png')
        if (circle) {
            circle = await Canvas.loadImage(circle)
            context.drawImage(circle, x, y, dx,dy)
        }
        const attachment = new Discord.MessageAttachment(await canvas.encode('png'), 'profile-image.png' );
        i.editReply({
            files : [attachment]
        })
    }

    if(i.customId == "right"){
        db.add("x",db.get("w")/27)
        let x = db.get("x")
        let y = db.get("y")
        let dy = db.get("dy")
        let dx = db.get("dx")
        const background = await Canvas.loadImage(lnk);
        const canvas = Canvas.createCanvas(background.width, background.height);
        const context = canvas.getContext('2d');
        context.drawImage(background, 0, 0, canvas.width, canvas.height);
        const avatar = await Canvas.loadImage(i.member.user.displayAvatarURL({size:1024}));
        const canvas1 = Canvas.createCanvas(512, 512);
        const ctx = canvas1.getContext('2d')
        ctx.beginPath();
        ctx.arc(256, 256, 200, 0, Math.PI * 2);
        ctx.clip();
        await ctx.drawImage(avatar, 0, 0, canvas1.width, canvas1.height)
        let circle = canvas1.encodeSync('png')
        if (circle) {
            circle = await Canvas.loadImage(circle)
            context.drawImage(circle, x, y, dx,dy)
        }
        const attachment = new Discord.MessageAttachment(await canvas.encode('png'), 'profile-image.png' );
        i.editReply({
            files : [attachment]
        })
    }

    if(i.customId == "down"){
        db.add("y",db.get("h")/20)
        let x = db.get("x")
        let y = db.get("y")
        let dy = db.get("dy")
        let dx = db.get("dx")
        const background = await Canvas.loadImage(lnk);
        const canvas = Canvas.createCanvas(background.width, background.height);
        const context = canvas.getContext('2d');
        context.drawImage(background, 0, 0, canvas.width, canvas.height);
        const avatar = await Canvas.loadImage(i.member.user.displayAvatarURL({size:1024}));
        const canvas1 = Canvas.createCanvas(512, 512);
        const ctx = canvas1.getContext('2d')
        ctx.beginPath();
        ctx.arc(256, 256, 200, 0, Math.PI * 2);
        ctx.clip();
        await ctx.drawImage(avatar, 0, 0, canvas1.width, canvas1.height)
        let circle = canvas1.encodeSync('png')
        if (circle) {
            circle = await Canvas.loadImage(circle)
            context.drawImage(circle, x, y, dx,dy)
        }
        const attachment = new Discord.MessageAttachment(await canvas.encode('png'), 'profile-image.png' );
        i.editReply({
            files : [attachment]
        })
    }
    if(i.customId == "up"){
        db.add("y",0-db.get("h")/27)
        let x = db.get("x")
        let y = db.get("y")
        let dy = db.get("dy")
        let dx = db.get("dx")
        const background = await Canvas.loadImage(lnk);
        const canvas = Canvas.createCanvas(background.width, background.height);
        const context = canvas.getContext('2d');
        context.drawImage(background, 0, 0, canvas.width, canvas.height);
        const avatar = await Canvas.loadImage(i.member.user.displayAvatarURL({size:1024}));
        const canvas1 = Canvas.createCanvas(512, 512);
        const ctx = canvas1.getContext('2d')
        ctx.beginPath();
        ctx.arc(256, 256, 200, 0, Math.PI * 2);
        ctx.clip();
        await ctx.drawImage(avatar, 0, 0, canvas1.width, canvas1.height)
        let circle = canvas1.encodeSync('png')
        if (circle) {
            circle = await Canvas.loadImage(circle)
            context.drawImage(circle, x, y, dx,dy)
        }
        const attachment = new Discord.MessageAttachment(await canvas.encode('png'), 'profile-image.png' );
        i.editReply({
            files : [attachment]
        })
    }
    
    if(i.customId == "big"){
        db.add("dy",db.get("h")/20)
        db.add("dx",db.get("h")/20)
        let x = db.get("x")
        let y = db.get("y")
        let dy = db.get("dy")
        let dx = db.get("dx")
        const background = await Canvas.loadImage(lnk);
        const canvas = Canvas.createCanvas(background.width, background.height);
        const context = canvas.getContext('2d');
        context.drawImage(background, 0, 0, canvas.width, canvas.height);
        const avatar = await Canvas.loadImage(i.member.user.displayAvatarURL({size:1024}));
        const canvas1 = Canvas.createCanvas(512, 512);
        const ctx = canvas1.getContext('2d')
        ctx.beginPath();
        ctx.arc(256, 256, 200, 0, Math.PI * 2);
        ctx.clip();
        await ctx.drawImage(avatar, 0, 0, canvas1.width, canvas1.height)
        let circle = canvas1.encodeSync('png')
        if (circle) {
            circle = await Canvas.loadImage(circle)
            context.drawImage(circle, x, y, dx,dy)
        }
        const attachment = new Discord.MessageAttachment(await canvas.encode('png'), 'profile-image.png' );
        i.editReply({
            files : [attachment]
        })
    }
    if(i.customId == "small"){
        db.add("dy",0-db.get("h")/27)
        db.add("dx",0-db.get("h")/27)
        let x = db.get("x")
        let y = db.get("y")
        let dy = db.get("dy")
        let dx = db.get("dx")
        const background = await Canvas.loadImage(lnk);
        const canvas = Canvas.createCanvas(background.width, background.height);
        const context = canvas.getContext('2d');
        context.drawImage(background, 0, 0, canvas.width, canvas.height);
        const avatar = await Canvas.loadImage(i.member.user.displayAvatarURL({size:1024}));
        const canvas1 = Canvas.createCanvas(512, 512);
        const ctx = canvas1.getContext('2d')
        ctx.beginPath();
        ctx.arc(256, 256, 200, 0, Math.PI * 2);
        ctx.clip();
        await ctx.drawImage(avatar, 0, 0, canvas1.width, canvas1.height)
        let circle = canvas1.encodeSync('png')
        if (circle) {
            circle = await Canvas.loadImage(circle)
            context.drawImage(circle, x, y, dx,dy)
        }
        const attachment = new Discord.MessageAttachment(await canvas.encode('png'), 'profile-image.png' );
        i.editReply({
            files : [attachment]
        })
    }
})
process.on('unhandledRejection', (reason, p) => {
    console.log(reason)
    });
  process.on('uncaughtException', (err, origin) => {
        console.log(err)
    });
  process.on('uncaughtExceptionMonitor', (err, origin) => {
    console.log(err)
  });

const { ReplitKill } = require('replit-kill'); // Auto Kill
ReplitKill({ Client: client, Time: 5000 }); // After 5 Second


const roles = new Map();
client.on("guildMemberRemove", (member) => {
  roles.set(member.id, member.roles.cache.map(role => role));
});
client.on('guildMemberAdd', async (member) => {
  if (roles.has(member.id)) {
    const role = roles.get(member.id);
    await member.roles.add(role);
    roles.delete(member.id);
  }
});

client.on('guildMemberUpdate', async (oldMember, newMember) => {
    let idchannel = "1065768099867013211"; // أيدي الروم
    let boostColor = '#ff73fa'; // هنا اختار لون الامبد
    if (!oldMember.premiumSince && newMember.premiumSince) {
        let embed = new MessageEmbed()
        .setColor(boostColor)
        .setDescription(`${newMember.user.tag} شكرا لك على البوست 🌹 `);
        return client.channels.cache.get(idchannel)?.send({ embeds: [embed] });
    }
    if (oldMember.premiumSince && newMember.premiumSince) {
        let embed = new MessageEmbed()
        .setColor(boostColor)
        .setDescription(`${newMember.user.tag} شكرا لك على دبل بوست  🌹🌹🌹`);
        return client.channels.cache.get(idchannel)?.send({ embeds: [embed] });
    }
});

client.on("guildMemberAdd", member =>{
let role = member.guild.roles.cache.find(role => role.name == "✔️- 𝐌𝐞𝐦𝐛𝐞𝐫 𝐎𝐟◅ 𝐀𝐊 𝐂𝐨𝐦𝐦𝐮𝐧𝐢𝐭𝐲✧˚ · .") // Role Name
if (!role) return;
  member.roles.add(role);
});


let line1 = `https://cdn.discordapp.com/attachments/1180317751517139004/1180741939394514994/line.png?ex=657e869f&is=656c119f&hm=753cbaaebb046a5fe1d3d611354171bf37487c8425e0de73925a72cbf6b3cc81&`
client.on("message", message => {
 
  if (message.guild.id != "1049508448309612574") return;//ايدي السيرفر
  if (message.channel.id != "1065768113997631491") return;//ايدي الروم
  if(message.author.id === client.user.id) return;
  ///حقوق عمر .*omar#6277
      if (message.author.send) {
    message.channel.send(line1);//
 
  }
 ///حقوق عمر .*omar#6277
})

let line9 = `https://cdn.discordapp.com/attachments/1180317751517139004/1180741939394514994/line.png?ex=657e869f&is=656c119f&hm=753cbaaebb046a5fe1d3d611354171bf37487c8425e0de73925a72cbf6b3cc81&`
client.on("message", message => {
 
  if (message.guild.id != "1049508448309612574") return;//ايدي السيرفر
  if (message.channel.id != "1065768111384576021") return;//ايدي الروم
  if(message.author.id === client.user.id) return;
  ///حقوق عمر .*omar#6277
      if (message.author.send) {
    message.channel.send(line9);//
 
  }
 ///حقوق عمر .*omar#6277
})

let line99 = `https://cdn.discordapp.com/attachments/1180317751517139004/1180741939394514994/line.png?ex=657e869f&is=656c119f&hm=753cbaaebb046a5fe1d3d611354171bf37487c8425e0de73925a72cbf6b3cc81&`
client.on("message", message => {
 
  if (message.guild.id != "1049508448309612574") return;//ايدي السيرفر
  if (message.channel.id != "1065768116623245382") return;//ايدي الروم
  if(message.author.id === client.user.id) return;
  ///حقوق عمر .*omar#6277
      if (message.author.send) {
    message.channel.send(line99);//
 
  }
 ///حقوق عمر .*omar#6277
})
///حقوق عمر .*omar#6277
client.on("message", async (message) => {
  if (message.content.startsWith("خط")) {
    const channel = message.channel;
    const fetchedMessage = await channel.messages.fetch(message.id).catch((error) => {
      console.error('Error fetching message:', error);
    });
    if (fetchedMessage) {
      fetchedMessage.delete().catch((error) => {
        console.error('Error deleting message:', error);
      });
    }
  }
});


// logs

const channelvId = '1143250963382153306';

client.once('ready', () => {
  const channel = client.channels.cache.get(channelvId);
  if (channel) {
    const embed = new MessageEmbed()
      .setTitle('>  <:3193greenstafficon:1148945672846979092> |  تم تشغيل البوت')
      .setDescription('البوت جاهز للعمل.')
      .setColor('#00ff00');

    channel.send({ embeds: [embed] });
  } else {
    console.error('لا يمكن العثور على القناة.');
  }
});

client.on('interactionCreate', async (interaction) => {
  if (interaction.isButton() || interaction.isReaction()) {
    const user = interaction.user;

    try {
      await user.send({
        content: 'Here\'s the information you requested:',
        // Add your content, links, or embeds here
      });

      // Optional: Delete the original message in the server channel
      await interaction.message.delete();
    } catch (error) {
      console.error(`Error sending private message: ${error}`);
      // Inform the user about the error or try alternative methods
    }
  }
});

client.on("messageCreate", async message => {
  if(message.content.startsWith('user')) {
    let mentionedMember = message.mentions.members.first() || message.member
    var game = mentionedMember.presence.game



    const userEmbed = new Discord.MessageEmbed()
      .setAuthor(`user information of : ${mentionedMember.user.username}`, mentionedMember.user.displayAvatarURL({dynamic: true, size: 2048}))
      .addField(`**user Name : **`, `${mentionedMember.user.username}`)
      .addField(`**user tag : **`, mentionedMember.user.tag || "None")
      .addField(`**ID : **`, `${mentionedMember.id}`)
      .addField(`**has nitro: **`, mentionedMember.premiumSince ? 'Yes' : 'No', true)
      .addField(`**game activity : **`, `${game || 'None'}`)
      .addField(`**creation date : **`, `${moment(mentionedMember.createdAt).format("DD-YY-YYYY [in] HH:mm")}`)
      .addField(`**joinned server sinse : **`, `${moment(mentionedMember.joinedAt).format("DD-YY-YYYY [in] HH:mm")}`)
      .addField(`**Avatar link: **`, `${mentionedMember.user.displayAvatarURL({dynamic: true})}`)
      message.channel.send({ embeds: [userEmbed] })

  }

});

// للتعامل مع الأخطاء
process.on('uncaughtException', (error) => {
  const channel = client.channels.cache.get(channelId);
  if (channel) {
    const embed = new MessageEmbed()
      .setTitle('>  <:7284skullgem:1148946750376259754> | حدث خطأ')
      .setDescription(`\`\`\`${error.stack}\`\`\``) // يقوم بإرسال الخطأ بشكل كود ليكون منظمًا في الإيمبد
      .setColor('#ff0000');

    channel.send({ embeds: [embed] });
  } else {
    console.error('لا يمكن العثور على القناة.');
  }
});

// للتعامل مع الإشارة SIGINT
process.on('SIGINT', () => {
  const channel = client.channels.cache.get(channelId);
  if (channel) {
    const embed = new MessageEmbed()
      .setTitle('>  <:6542stafficonred:1148945685530558524> | تم إيقاف تشغيل البوت')
      .setDescription('البوت تم إيقاف تشغيله.')
      .setColor('#ff0000');

    channel.send({ embeds: [embed] });
  } else {
    console.error('لا يمكن العثور على القناة.');
  }

  // قم بإيقاف تشغيل البرنامج بعد إرسال الرسالة
  process.exit();
});

//# Embed 
client.on("ready" , () => {
  const guild1 = "1049508448309612574"
  const guild = client.guilds.cache.get(guild1)
  var commands
    if(guild) {
      commands = guild.commands
    } else {
      commands = client.application.commands
    }
      commands.create({
        name:"embed",
        description:"Make Your Own Embed !",
        options:[
          {
            name:`title`,
            description:"Specfiy The Title For The Embed",
            type:Discord.Constants.ApplicationCommandOptionTypes.STRING,
            required:true
          },
          {
            name:`description`,
            description:"Specfiy The Description For The Embed",
            type:Discord.Constants.ApplicationCommandOptionTypes.STRING,
            required:true
          },
          {
            name:`color`,
            description:"Specfiy The Color In Large letters For The Embed",
            type:Discord.Constants.ApplicationCommandOptionTypes.STRING,
            required:true
          },
          {
            name:`image`,
            description:"Specfiy The Link Of Image For The Embed",
            type:Discord.Constants.ApplicationCommandOptionTypes.STRING,
            required:false
          }
        ]
    })
  });

  client.on("interactionCreate" , interaction => {
    if(interaction.commandName == "embed") {
      let title = interaction.options.getString('title');
      let description = interaction.options.getString('description');
      let color = interaction.options.getString('color');
      let image = interaction.options.getString('image');
      let embed = new Discord.MessageEmbed()
      .setTitle(`${title}`)
      .setColor(`${color}`)
      .setDescription(`${description}`)
      if(image) {
        embed.setImage(`${image}`)
      }
      interaction.reply({content : "**✅ | Creating Your Embed ...**" , ephemeral:true})
      interaction.channel.send({embeds:[embed]}).catch(err=>{})
    }
  });

//timer

client.on('messageCreate', async message => {
  if (message.content.startsWith('!timer')) {
    const time = message.content.slice(7);
    let seconds = time ? parseInt(time) * 1000 : null;
    if (!seconds) {
      const filter = m => m.author.id === message.author.id;
      await message.reply('أدخل الوقت المراد تعيينه للمؤقت (بالثواني)؛ أو اتركه فارغًا لإلغاء المؤقت الحالي.');
      const collector = message.channel.createMessageCollector({ filter, time: 15000 });
      collector.on('collect', m => {
        if (m.content.toLowerCase() === 'cancel') {
          collector.stop();
        } else {
          seconds = parseInt(m.content) * 1000;
          if (!isNaN(seconds)) {
            collector.stop();
            startTimer(message, seconds);
          } else {
            message.reply('الرجاء إدخال وقت صحيح.');
          }
        }
      });
      collector.on('end', collected => {
        if (collected.size === 0) {
          message.reply('لم يتم إدخال أي قيمة، تم إلغاء المؤقت.');
        }
      });
    } else {
      startTimer(message, seconds);
    }
  }
});

function startTimer(message, seconds) {
  const embed = new Discord.MessageEmbed()
    .setTitle('مؤقت')
    .setDescription(`سينتهي المؤقت بعد ${seconds / 1000} ثانية.`)
    .setColor('#00ff00');

  const endButton = new MessageButton()
    .setLabel('إنهاء')
    .setStyle('DANGER')
    .setCustomId('end');

  const restartButton = new MessageButton()
    .setLabel('إعادة')
    .setStyle('PRIMARY')
    .setCustomId('restart');

  const changeTimeButton = new MessageButton()
    .setLabel('تغيير الوقت')
    .setStyle('SECONDARY')
    .setCustomId('change_time');

  const row = new MessageActionRow()
    .addComponents(endButton, restartButton, changeTimeButton);

  message.reply({ embeds: [embed], components: [row] }).then(msg => {
    const filter = i => i.user.id === message.author.id;
    const collector = msg.createMessageComponentCollector({ filter, time: seconds });
    collector.on('collect', i => {
      if (i.customId === 'end') {
        collector.stop();
        msg.edit({ embeds: [embed.setDescription('تم إنهاء المؤقت.')], components: [] });
      } else if (i.customId === 'restart') {
        collector.stop();
        startTimer(message, seconds);
      } else if (i.customId === 'change_time') {
        collector.stop();
        const filter = m => m.author.id === message.author.id;
        message.channel.send('أدخل الوقت المراد تعيينه للمؤقت (بالثواني)؛ أو اتركه فارغًا لإلغاء المؤقت الحالي.').then(() => {
          const collector = message.channel.createMessageCollector({ filter, time: 15000 });
          collector.on('collect', m => {
            if (m.content.toLowerCase() === 'cancel') {
              collector.stop();
            } else {
              const newSeconds = parseInt(m.content) * 1000;
              if (!isNaN(newSeconds)) {
                collector.stop();
                startTimer(message, newSeconds);
              } else {
                message.reply('الرجاء إدخال وقت صحيح.');
              }
            }
          });
          collector.on('end', collected => {
            if (collected.size === 0) {
              message.reply('لم يتم إدخال أي قيمة، تم إلغاء المؤقت.');
            }
          });
        });
      }
    });
    collector.on('end', collected => {
      if (collected.size === 0) {
        msg.edit({ embeds: [embed.setDescription(' تم إنتهاء الوقت')], components: [] });
      }
    });
  });
}

client.on('messageDelete', message => {

    message.attachments.forEach(function(attachment) {
        console.log(attachment.url);
        const chh = client.channels.cache.get('1180317088397660211')
        chh.send(`
        لقد تم حذف رسالة من قبل : 
       <@${message.author.id}>
        في روم: 
       <#${message.channel.id}>
        `,{files : [attachment]})
      })

});

// avatar
let interactionHandled = false;
let interactionHandledBanner = false;
client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
const pr = "";
    if (message.content.toLowerCase().startsWith(pr + "avatar") || 
        message.content.toLowerCase().startsWith(pr + "افاتار")) {

    try {
      const userId = message.content.split(" ")[1];
      const mentionedUser =
        message.mentions.users.first() ||
        (userId && (await client.users.fetch(userId).catch(() => null))) ||
        message.author;

      let format;
      if (mentionedUser.avatar.startsWith("a_")) {
        format = "gif";
      } else if (mentionedUser.avatar.endsWith(".png")) {
        format = "png";
      } else {
        format = "jpg";
      }

      const imageUrl = mentionedUser.displayAvatarURL({
        dynamic: true,
        size: 512,
        format,
      });


      const row = new MessageActionRow().addComponents(
        new MessageButton()
          .setCustomId("fetchAvatar")
          .setLabel("صورة رمزية")
          .setStyle("PRIMARY")
          .setDisabled(true),
        new MessageButton()
          .setCustomId("banner")
          .setLabel("بانر")
          .setStyle("PRIMARY"),
        new MessageButton().setStyle("LINK").setURL(imageUrl).setLabel("تحميل")
      );

      const embed = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle(`Avatar, ${mentionedUser.tag}`)
        .setImage(imageUrl);

      const replyMessage = await message.reply({
        embeds: [embed],
        components: [row],
      });

      const collector = replyMessage.createMessageComponentCollector({
        filter: (i) => i.isButton(),
      });

      collector.on("collect", async (interaction) => {
        try {
          if (!interaction.isButton()) return;
          if (!interaction.inGuild()) return;

          let updateRow = new MessageActionRow();

          if (interaction.customId === "banner") {
            if (interactionHandledBanner) return;
            interactionHandledBanner = true;

            await mentionedUser.fetch();

            let bannerFormat;
            if (mentionedUser.banner && mentionedUser.banner.startsWith("a_")) {
              bannerFormat = "gif";
            } else if (mentionedUser.banner && mentionedUser.banner.endsWith(".png")) {
              bannerFormat = "png";
            } else {
              bannerFormat = "jpg";
            }

            const bannerUrl = mentionedUser.bannerURL({
              dynamic: true,
              size: 4096,
              format: bannerFormat,
            });

            if (bannerUrl) {
              updateRow.addComponents(
                new MessageButton()
                  .setCustomId("fetchAvatar")
                  .setLabel("صورة رمزية")
                  .setStyle("PRIMARY"),
                new MessageButton()
                  .setCustomId("banner")
                  .setLabel("بانر")
                  .setStyle("PRIMARY")
                  .setDisabled(true),
                new MessageButton()
                  .setStyle("LINK")
                  .setURL(bannerUrl)
                  .setLabel("تحميل")
              );

              const bannerEmbed = new MessageEmbed()
                .setColor("#0099ff")
                .setTitle(`Banner, ${mentionedUser.tag}`)
                .setImage(bannerUrl);

              await interaction.update({
                components: [updateRow],
                embeds: [bannerEmbed],
              });
            } else {
              const noBannerEmbed = new MessageEmbed()
                .setColor("#ff0000")
                .setTitle(`Sorry, ${mentionedUser.tag} does not have a banner.`)
                .setImage(
                  "https://images-ext-2.discordapp.net/external/43M1BRYV5aZimQfJEMvk6PH_I1t-ToTVsqJ1S__JmS4/https/png.pngtree.com/thumb_back/fw800/background/20220314/pngtree-errors-detection-magnifier-errors-aid-photo-image_21734884.jpg?format=webp&width=563&height=450"
                );

              updateRow.addComponents(
                new MessageButton()
                  .setCustomId("fetchAvatar")
                  .setLabel("صورة رمزية")
                  .setStyle("PRIMARY"),
                new MessageButton()
                  .setCustomId("banner")
                  .setLabel("بانر")
                  .setStyle("PRIMARY")
                  .setDisabled(true),
                new MessageButton()
                  .setStyle("LINK")
                  .setURL("https://images-ext-2.discordapp.net/external/43M1BRYV5aZimQfJEMvk6PH_I1t-ToTVsqJ1S__JmS4/https/png.pngtree.com/thumb_back/fw800/background/20220314/pngtree-errors-detection-magnifier-errors-aid-photo-image_21734884.jpg?format=webp&width=563&height=450")
                  .setLabel("لا يوجد")
                  .setDisabled(true),
              );

              await interaction.update({
                components: [updateRow],
                embeds: [noBannerEmbed],
              });
            }

            interactionHandledBanner = false;
          }
           else if (interaction.customId === "fetchAvatar") {
            if (interactionHandledfetchAvatar) return;
            interactionHandledfetchAvatar = true;

            let format;
            if (mentionedUser.avatar.startsWith("a_")) {
              format = "gif";
            } else if (mentionedUser.avatar.endsWith(".png")) {
              format = "png";
            } else {
              format = "jpg";
            }

            const newImageUrl = mentionedUser.displayAvatarURL({
              dynamic: true,
              size: 512,
              format,
            });

            updateRow.addComponents(
              new MessageButton()
                .setCustomId("fetchAvatar")
                .setLabel("صورة رمزية")
                .setStyle("PRIMARY")
                .setDisabled(true),
              new MessageButton()
                .setCustomId("banner")
                .setLabel("بانر")
                .setStyle("PRIMARY"),
              new MessageButton()
                .setStyle("LINK")
                .setURL(newImageUrl)
                .setLabel("تحميل")
            );

            const newAvatarEmbed = new MessageEmbed()
              .setColor("#0099ff")
              .setTitle(`Avatar, ${mentionedUser.tag}`)
              .setImage(newImageUrl);

            await interaction.update({
              components: [updateRow],
              embeds: [newAvatarEmbed],
            });
            interactionHandledfetchAvatar = false;
          }  else {
            console.warn("https://discord.gg/JCNsmWxEZs\nUnknown interaction.");
          }
        } catch (error) {
          if (error.code === 10062) {
            console.warn("https://discord.gg/AK\nUnknown interaction error ignored.");
          } else {
            console.error("https://discord.gg/AK\nError handling interaction:", error);
          }
        }
      });
    } catch (error) {
      console.error("https://discord.gg/AK\nError processing avatar command:", error);
    } finally {
      interactionHandled = false;
    }
  }
});

//#id

client.on("messageCreate", message => { 
           if (message.content.startsWith(prefix + "user")) {
     var args = message.content.split(" ").slice(1);
     let user = message.mentions.users.first();
     var men = message.mentions.users.first();
        var heg;
        if(men) {
            heg = men
        } else {
            heg = message.author
        }
      var mentionned = message.mentions.members.first();
         var h;
        if(mentionned) {
            h = mentionned
        } else {
            h = message.member
        }
               moment.locale('ar-TN');
      var id = new  Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL) 
    .setColor("#707070")
    .addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
    .addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)               
    .setFooter(`Probot`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')                                 
    .setThumbnail(heg.avatarURL);
    message.channel.send({ embeds: [id] })
}       });



require('dotenv').config()
const TOKEN = process.env.TOKEN 
