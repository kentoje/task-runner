const random = (min, max) => Math.floor(Math.random() * (max - min)) + min

const colorsArray = [
  '#CF443c',
  '#CFB838',
  '#CAA1BC',
  '#21506A',
  '#38B3CF',
  '#B851F',
  '#BE5CBF',
]

export const getRandomColor = () =>
  colorsArray[random(0, colorsArray.length - 1)]
