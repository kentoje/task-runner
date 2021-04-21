const colorsArray = ['#CF443c', '#CFB838', '#CAA1BC', '#21506A', '#38B3CF', '#BE5CBF']

const pickColor = (num = 0, max = colorsArray.length) =>
  num < max ? colorsArray[Math.floor(num)] : pickColor(num / 2, max)

export { pickColor }
