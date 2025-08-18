module.exports = {
  config: {
    name: "dick",
    version: "1.0",
    author: "Goku",
    countDown: 5,
    role: 0,
    shortDescription: "no prefix",
    longDescription: "no prefix",
    category: "no prefix",
  }, 

  onStart: async function(){}, 

  onChat: async function({ event, message, getLang }) {
    if (event.body && event.body.toLowerCase() === "dick") {
      const img = "https://i.postimg.cc/Nf37L5WT/Messenger-creation-718-C9-DDE-AC23-431-C-A180-3411-E2-E7-C6-BC.jpg";
      const text = "💩🔥 Dick 💖✨";

      return message.reply({
        body: text,
        attachment: await global.utils.getStreamFromURL(img)
      });
    }
  }
}
