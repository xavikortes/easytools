import { Types } from '@easytools/consts'

export const spriteToPng = (sprite: Types.Sprite, width: number, height: number) => {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height

  const context = canvas.getContext('2d')
  const imageData = context!.createImageData(width, height)
  const data = imageData.data

  sprite.pixels.forEach((item, idx) => {
    data[idx * 4 + 0] = item?.[0] ?? 0
    data[idx * 4 + 1] = item?.[1] ?? 0
    data[idx * 4 + 2] = item?.[2] ?? 0
    data[idx * 4 + 3] = (item?.[3] ?? 0) * 255
  })

  context!.putImageData(imageData, 0, 0)

  return canvas
}
