const mineflayer = require("mineflayer")

const options = {
    username: "CBot",
    host: "sus.shhnowisnottheti.me"
}

var bot = mineflayer.createBot(options)

bot.on("chat", (username, message)=>{
    console.log(username + ": " + message)
    if (message === "hello"){
        bot.chat("Hi m8!")
    }
    if (message === "ver"){
    bot.chat("CBot version 3.0, made by CNWPlayer")
    }
    if (message === "yes"){
        bot.chat("No.")
    }
    if (message === "because"){
        bot.chat("Why though?")
    }
    if (message === "help"){
        bot.chat("Hello -> hoi, user -> You are: username, help -> this message")
    }
    if (message === "user"){
        bot.chat("You are: " + username)
    }
    if (message === "dev"){
        bot.chat("CBot developer is CNWPlayer. Do not steal this.")
    }
})
