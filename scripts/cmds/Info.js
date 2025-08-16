const fs = require('fs');
const moment = require('moment-timezone');
const NepaliDate = require('nepali-date');

module.exports = {
  config: {
    name: "info",
    version: "1.6",
    author: "AceGun",
    countDown: 5,
    role: 0,
    shortDescription: {
      vi: "",
      en: "Sends information about the bot and admin along with an image."
    },
    longDescription: {
      vi: "",
      en: "Sends information about the bot and admin along with an image."
    },
    category: "utility",
    guide: {
      en: "{pn} or {n}"
    },
    envConfig: {}
  },

  onStart: async function ({ message }) {
    const botName = "𝗕𝗟𝗔𝗭𝗘-𝗦𝗘𝗡𝗦𝗘𝗜𖣘࿐";
    const botPrefix = "-";
    const authorName = "𝙍𝙖𝙮𝙝𝙖𝙣 𝘾𝙝𝙤𝙬𝙙𝙝𝙪𝙧𝙮";
    const authorFB = "https://www.facebook.com/god.damn.rayhan";
    const authorInsta = "instagram://user/?username=god_damn_rayhan";
    const status = "Single🙂 ";
    const imgURLs = [
      "https://i.postimg.cc/13kt5dNx/IMG-20240612-151851-918.jpg",
    ];


    const now = moment().tz('Asia/Dhaka');
    const date = now.format('MMMM Do YYYY');
    const time = now.format('h:mm:ss A');
    const nepaliDate = new NepaliDate(now.toDate());
    const bsDateStr = nepaliDate.format("dddd, DD MMMM");
    const uptime = process.uptime();
    const seconds = Math.floor(uptime % 60);
    const minutes = Math.floor((uptime / 60) % 60);
    const hours = Math.floor((uptime / (60 * 60)) % 24);
    const days = Math.floor(uptime / (60 * 60 * 24));
    const uptimeString = `${hours}hrs: ${minutes}min: ${seconds}sec`;
    const ping = Math.floor(Math.random() * (400 - 20 + 1)) + 20;
    const selectedImgURL = imgURLs[Math.floor(Math.random() * imgURLs.length)];

    message.reply({
      body: `===「 Bot & Owner Info 」===\n🤖 | Bot Name: ${botName}\n🌐 | Bot Prefix: ${botPrefix}\n🙋‍♂ | AuthorName: ${authorName}\n💙 | FB: ${authorFB}\n🩷 | Insta: ${authorInsta}\n📌 | Status: ${status}\n🗓 | Date: ${date}\n📆 | BsDate:  ${bsDateStr}\n⏰ | Time: ${time}\n✅ | Bot Running: ${uptimeString}\n🛜 | Ping: ${ping}ms\n=====================`,
      attachment: await global.utils.getStreamFromURL(selectedImgURL)
    });
  },

  onChat: async function({ event, message, getLang }) {
    if (event.body && event.body.toLowerCase() === "info") {
      this.onStart({ message });
    }
  }
};
