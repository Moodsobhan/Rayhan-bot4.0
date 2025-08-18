module.exports = {
  config: {
    name: "fair&lovly",
    version: "1.1",
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

    // Trigger for "fair&lovly"
    if (text.includes("fair&lovly")) {
      const img = "https://i.postimg.cc/rydrWqG9/Messenger-creation-656-C8729-62-AD-4-B27-98-E2-4-C47768-CF38-E.jpg";

      return message.reply({
        body: "✨💖 Fair&lovly 💖✨",
        attachment: await global.utils.getStreamFromURL(img)
      });
    }
  }
}
