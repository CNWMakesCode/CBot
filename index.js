const mc = require("minecraft-protocol")

const client = mc.createClient({
    username: "CBotV2",
    host: "sus.shhnowisnottheti.me"
})

client.on('chat', function(packet) {
    var jsonMsg = JSON.parse(packet.message)
    console.log(jsonMsg)
    }
  );
