const axios = require("axios").default

async function randomName(gender){
  try {
  const resp = await axios({
      method: 'GET',
      url: 'https://dawn2k-random-german-profiles-and-names-generator-v1.p.rapidapi.com/',
      params: {
        format: 'json',
        gender: `${gender}`
      },
      headers: {
        'x-rapidapi-host': 'dawn2k-random-german-profiles-and-names-generator-v1.p.rapidapi.com',
        'x-rapidapi-key': '159bf06ba2mshfcdcde21f796b32p1951a0jsn18df1002f37a'
      }
    })
  
    if (!resp.data) {
      throw ({ name: "fakeNameErr" });
    }
    return resp.data[0].firstname;
  } catch (err) {
    throw (err)
  }
}

module.exports = randomName
