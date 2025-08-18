module.exports = {
  config: {
    name: "tournai",
    version: "1.0",
    author: "Goku",
    countDown: 5,
    role: 0,
    shortDescription: "no prefix",
    longDescription: "sends Tour Nai video",
    category: "no prefix",
  }, 

  onStart: async function(){}, 

  onChat: async function({ event, message }) {
    if (event.body && event.body.toLowerCase() === "tour nai") {
      const video = "https://files.catbox.moe/d536to.mp4";

      return message.reply({
        body: "🤣🚌 Tour Nai 🚌🤣",
        attachment: await global.utils.getStreamFromURL(video)
      });
    }
  }
}
