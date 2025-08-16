const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
config: {
  name: "owner",
  aurthor:"MR.AYAN",// Convert By Goatbot MR.AYAN 
   role: 0,
  shortDescription: " ",
  longDescription: "",
  category: "admin",
  guide: "{pn}"
},

  onStart: async function ({ api, event }) {
  try {
    const ownerInfo = {
      name: '𝚁𝙰𝚈𝙷𝙰𝙽 𝙲𝙷𝙾𝚆𝙳𝙷𝚄𝚁𝚈',
      gender: '𝙼𝙰𝙻𝙴',
      age: '𝟭𝟴+',
      height: 'secret',
      facebookLink: 'https://www.facebook.com/god.damn.rayhan',
      nick: '°×𝗕𝗟𝗔𝗭𝗘-𝗦𝗘𝗡𝗦𝗘𝗜×°'
    };

    const bold = 'https://i.postimg.cc/j5jpDwyt/Messenger-creation-0404-FF87-11-CC-432-C-963-A-6-E1-FCEA9-E6-BE.jpg '; // Replace with your Google Drive videoid link https://drive.google.com/uc?export=download&id=here put your video id

    const tmpFolderPath = path.join(__dirname, 'tmp');

    if (!fs.existsSync(tmpFolderPath)) {
      fs.mkdirSync(tmpFolderPath);
    }

    const videoResponse = await axios.get(bold, { responseType: 'arraybuffer' });
    const videoPath = path.join(tmpFolderPath, 'owner_video.gif');

    fs.writeFileSync(videoPath, Buffer.from(videoResponse.data, 'binary'));

    const response = `
Owner Information:🧾
Name: ${ownerInfo.name}
Gender: ${ownerInfo.gender}
Age: ${ownerInfo.age}
Height: ${ownerInfo.height}
Facebook: ${ownerInfo.facebookLink}
Nick: ${ownerInfo.nick}
`;


    await api.sendMessage({
      body: response,
      attachment: fs.createReadStream(videoPath)
    }, event.threadID, event.messageID);

    if (event.body.toLowerCase().includes('ownerinfo')) {
      api.setMessageReaction('✅', event.messageID, (err) => {}, true);
    }
  } catch (error) {
    console.error('Error in ownerinfo command:', error);
    return api.sendMessage('An error occurred while processing the command.', event.threadID);
  }
},
};
