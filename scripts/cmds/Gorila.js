module.exports = {
  config: {
    name: "gorila",
    version: "1.0",
    author: "Mahi--",
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

    // Trigger for "gorila"
    if (text.includes("gorila")) {
      const gorilaPic = "https://i.postimg.cc/4NytKBSj/1712721417023.jpg";
      return message.reply({
        body: "🦍 Gorila Bhubon 🦍",
        attachment: await global.utils.getStreamFromURL(gorilaPic)
      });
    }
  }
}
