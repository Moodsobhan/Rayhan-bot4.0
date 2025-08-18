module.exports = {
  config: {
    name: "balersong",
    version: "1.0",
    author: "Goku",
    countDown: 5,
    role: 0,
    shortDescription: "no prefix",
    longDescription: "sends baler song video",
    category: "no prefix",
  }, 

  onStart: async function(){}, 

  onChat: async function({ event, message }) {
    if (event.body && event.body.toLowerCase() === "baler song") {
      const video = "https://files.catbox.moe/rcftim.mp4";

      return message.reply({
        body: "🎶🎤 Baler Song 🎤🎶",
        attachment: await global.utils.getStreamFromURL(video)
      });
    }
  }
}
