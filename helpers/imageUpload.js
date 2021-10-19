const FormData = require('form-data')
const axios = require('axios')
const imageUpload = async (file) => {
  try {
    const image = file.buffer.toString("base64")
    const form = new FormData()
    form.append('image', image)
    const resp = await axios({
      method: 'post',
      url: 'https://api.imgbb.com/1/upload?key=f5c170cf945c74f479efb126ba6c0dfe',
      headers: form.getHeaders(),
      data: form
    })
    if (!resp.data.data.url) {
      throw ({ name: "upploadErr" })
    }
    return resp.data.data.url
  } catch (err) {
    throw(err)
  }
}

module.exports = imageUpload