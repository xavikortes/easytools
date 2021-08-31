export type Color = number[]
export type Pixel = Color | null

export type ColorPalette = {
  name: string,
  colors: Color[]
}

export type PaletteList = {
  [key: string]: ColorPalette
}

export type Sprite = {
  number: number,
  pixels: Pixel[]
}

export type SpriteSheet = Sprite[]
