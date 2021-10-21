var axios = require("axios").default;

var options = {
  method: "POST",
  url: "https://pronunciation-assessment1.p.rapidapi.com/pronunciation",
  headers: {
    "content-type": "application/json",
    "x-rapidapi-host": "pronunciation-assessment1.p.rapidapi.com",
    "x-rapidapi-key": "d629ea3015msh4bb89c7a93a2a1bp142119jsnd2acbbe1de47",
  },
};

const assesment = async (base64, task) => {
  try {
    options.data = {
      audio_base64: base64,
      audio_format: "mp3",
      text: task,
    };
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { assesment };
