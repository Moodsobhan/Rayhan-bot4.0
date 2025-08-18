module.exports = {
  config: {
    name: "lewrafat",
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
    if (event.body && event.body.toLowerCase() === "lewrafat") {
      const img = "https://i.postimg.cc/0j4vBVf6/Messenger-creation-3-D62910-D-9-E8-C-4-BCB-87-EF-D692-C95126-A3.jpg";
      const text = "⚡💀 Lewrafat 🔥👑";

      return message.reply({
        body: text,
        attachment: await global.utils.getStreamFromURL(img)
      });
    }
  }
}
