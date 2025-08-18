module.exports = {
  config: {
    name: "madaripur er mogachoda",
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

    // Trigger for "madaripur er mogachoda"
    if (text.includes("madaripur er mogachoda")) {
      const img = "https://i.postimg.cc/N0hTGS2x/Messenger-creation-7-AB6-D88-E-E217-4553-9-FB8-2-C0-D5-F6-EA846.jpg";

      return message.reply({
        body: "🔥 Madaripur er Mogachoda 😂",
        attachment: await global.utils.getStreamFromURL(img)
      });
    }
  }
}
