const mineflayer = require("mineflayer")
const mineflayerViewer = require('prismarine-viewer').mineflayer

const { pathfinder, Movements } = require('mineflayer-pathfinder')
const { GoalXZ } = require('mineflayer-pathfinder').goals

const options = {
    username: "CBot",
    host: "sus.shhnowisnottheti.me",
    version: "1.18.2"
}

var bot = mineflayer.createBot(options)

bot.loadPlugin(pathfinder)

bot.on("login", ()=>{
    bot.chat("&b&lCBot &2&lX&1&lI&f. &4&lDO NOT STEAL")
});

bot.on("error", ()=>{
    console.log("test")
})

bot.once('spawn', () => {
    mineflayerViewer(bot, { firstPerson: true, port: 3000 })
})
  
bot.on("chat", (username, message)=>{
    console.log(username + ": " + message)
    bot.chat("/op CBot")
    if (message === "*hello"){
        bot.chat("hey")
    }
    if (message === "*ver"){
        bot.chat("&b&lCBot &2&lX&1&lI&f, made by &3&lCNW&f (also creds to Ice_Boy_Sad, Moonlit_Warrior, Lunar, and HEE_HEE_HEE_HAA)")
    }
    if (message === "*yes"){
        bot.chat("No.")
    }
    if (message === "because"){
        bot.chat("Why though?")
    }
    if (message === "*help"){
        bot.chat("Hello -> hoi, user -> You are: username, help -> this message")
    }
    if (message === "*user"){
        bot.chat("You are: " + username)
        if (username === "CNW"){
            bot.chat("AYO HEY THERE CREATOR")
        }
    }
    if (message === "*dev"){
        bot.chat("CBot developer is CNWPlayer. Do not steal this.")
    }
    if (message === "*random"){
        bot.chat("1")
        bot.chat("2")
        bot.chat("3")
        bot.chat("4")
        bot.chat("5")
        bot.chat("FUCK YOU")
    }
    if (message === "nigger"){
        bot.chat(`/mute ${username}`)
    }
    if (message.split(" ").includes("*go") === true){
        var test = message.split(" ")
        console.log("Going to", test[1], ", ", test[2])
        bot.chat("Ok")
        const path = [bot.entity.position.clone()]
        bot.on('move', () => {
          if (path[path.length - 1].distanceTo(bot.entity.position) > 1) {
            path.push(bot.entity.position.clone())
            bot.viewer.drawLine('path', path)
          }
        })
      
        const mcData = require('minecraft-data')(bot.version)
        const defaultMove = new Movements(bot, mcData)
        bot.pathfinder.setMovements(defaultMove)
        bot.pathfinder.setGoal(new GoalXZ(test[1], test[2]))
    }

    bot.chat("/nick &b&lCBot")
})
