const avatar = (name) => {
  const option = ['male', 'female', 'human', 'identicon', 'initials', 'bottts','avataaars','jdenticon','gridy','micah']
  const sprites = option[Math.floor(Math.random() * option.length)]
  const imgUrl = `https://avatars.dicebear.com/api/${sprites}/${name}.svg`
  return imgUrl
}

module.exports = avatar