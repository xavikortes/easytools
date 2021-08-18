// Primary types
export type Color = number[]
export type Sprite = (Color | null)[]
export type SpriteSheet = Sprite[]

export type ColorPalette = {
  name: string,
  colors: Color[]
}
