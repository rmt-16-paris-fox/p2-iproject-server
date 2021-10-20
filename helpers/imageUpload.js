const FormData = require('form-data')
const axios = require('axios')
const imageUpload = async (file) => {
  try {
    const image = file.buffer.toString("base64")
    const form = new FormData()
    form.append('image', image)
    const resp = await axios({
      method: 'post',
      url: `https://freeimage.host/api/1/upload?key=${process.env.PRIVATE_KEY}`,
      headers: form.getHeaders(),
      data: form
    })
    if (!resp.data.image.url) {
      throw ({ name: "upploadErr" })
    }
    return resp.data.image.url
  } catch (err) {
    throw(err)
  }
}

module.exports = imageUpload