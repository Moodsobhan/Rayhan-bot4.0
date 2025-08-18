module.exports = {
  config: {
    name: "nowakhailla",
    version: "1.4",
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

    // Trigger for "nowakhailla"
    if (text.includes("nowakhailla")) {
      const nowakhaillaPic = "https://i.postimg.cc/25CXgRKJ/Messenger-creation-0741-AA58-75-D1-4241-B21-F-827-C6-F330-F5-B.jpg";

      return message.reply({
        body: "Nowakhailla",
        attachment: await global.utils.getStreamFromURL(nowakhaillaPic)
      });
    }
  }
}
