module.exports = {
  config: {
    name: "shahmagiyousuf",
    version: "1.0",
    author: "Goku",
    countDown: 5,
    role: 0,
    shortDescription: "no prefix",
    longDescription: "sends shahmagi yousuf video",
    category: "no prefix",
  }, 

  onStart: async function(){}, 

  onChat: async function({ event, message }) {
    if (event.body && event.body.toLowerCase() === "shahmagi yousuf") {
      const video = "https://files.catbox.moe/japty7.mp4";

      return message.reply({
        body: "⚡🔥 Shahmagi Yousuf 🔥⚡",
        attachment: await global.utils.getStreamFromURL(video)
      });
    }
  }
}
