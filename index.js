require('dotenv').config()
const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  if (msg.content === '!haico') {
    msg.channel.send('-clear')
    msg.channel.send('-play rustig rustig bassie en adriaan')
  }
})

client.login(process.env.BOT_TOKEN)