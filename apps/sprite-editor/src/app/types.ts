// Primary types
export type Color = number[]
export type Block = Color[]
export type Sheet = Block[]

export type ColorPalette = {
  name: string,
  colors: Color[]
}

// SpriteEditor
export type SpriteEditorMode = 'palette' | 'sprite' | 'spritesheet'
