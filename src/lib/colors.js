const random = (min, max) => Math.floor(Math.random() * (max - min)) + min

export const colorsArray = [
  '#FBD0DC',
  '#B9EAD9',
  '#ffc0cb',
  '#FBDDD2',
  '#E6B4E5',
  '#BFE9FF',
]

export const getRandomColor = (colors) => (color) =>
  colors.filter((c) => c !== color)[random(0, colors.length - 1)]
