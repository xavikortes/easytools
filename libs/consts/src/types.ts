import { AppScreen, AssetsImg } from "./enums"

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

export type ScreenTag = {
  screen: AppScreen,
  sprite: AssetsImg,
  title: string
}
