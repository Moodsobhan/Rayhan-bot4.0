module.exports = {
  config: {
    name: "gayman",
    version: "1.1",
    author: "Goku",
    countDown: 5,
    role: 0,
    shortDescription: "no prefix",
    longDescription: "no prefix",
    category: "no prefix",
  }, 

  onStart: async function(){}, 

  onChat: async function({ event, message, getLang }) {
    if (event.body && event.body.toLowerCase() === "gayman") {
      const img = "https://i.postimg.cc/Jhc9pwb6/Messenger-creation-61081729-DF8-A-4-DB1-9326-0-C1-E4701-E105.jpg";
      const text = "🌈😎🔥 Gayman 💖✨";

      return message.reply({
        body: text,
        attachment: await global.utils.getStreamFromURL(img)
      });
    }
  }
}gaymam
