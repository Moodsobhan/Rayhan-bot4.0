module.exports = {
  config: {
    name: "guu",
    version: "1.2",
    author: "Goku",
    countDown: 5,
    role: 0,
    shortDescription: "no prefix",
    longDescription: "no prefix",
    category: "no prefix",
  },

  onStart: async function(){},

  onChat: async function({ event, message }) {
    if (!event.body) return;
    const text = event.body.toLowerCase();

    // Trigger for "guu"
    if (text.includes("guu")) {
      const img = "https://i.postimg.cc/28GrSZq9/Messenger-creation-2-F90-D7-F5-9836-49-C1-AFFF-4-A11-CF9854-EC.jpg";

      return message.reply({
        body: "✨💖 Guu 💖💩✨",
        attachment: await global.utils.getStreamFromURL(img)
      });
    }
  }
}
