module.exports = {
  config: {
    name: "lengtayousuf",
    version: "1.0",
    author: "Goku",
    countDown: 5,
    role: 0,
    shortDescription: "no prefix",
    longDescription: "sends video",
    category: "no prefix",
  }, 

  onStart: async function(){}, 

  onChat: async function({ event, message }) {
    if (event.body && event.body.toLowerCase() === "lengta yousuf") {
      const video = "https://files.catbox.moe/i3s9ta.mp4";

      return message.reply({
        body: "📹 Lengta Yousuf is here!",
        attachment: await global.utils.getStreamFromURL(video)
      });
    }
  }
}
