import { SpriteEditorScreen, AssetsImg, Strings, Apps as App, Routes } from './enums'


export const Apps = [
  {
    app: App.SpriteEditor,
    icon: AssetsImg.Sprite,
    title: Strings.SpriteEditorAppTitle,
    path: Routes.SpriteEditor
  },
  {
    app: App.BoxShadow,
    icon: AssetsImg.BoxShadow,
    title: Strings.BoxShadowAppTitle,
    path: Routes.BoxShadow
  }
]

export const SpriteEditorScreenTags = [
  {
    screen: SpriteEditorScreen.Palette,
    icon: AssetsImg.Palette,
    title: Strings.Palette
  },
  {
    screen: SpriteEditorScreen.Sprite,
    icon: AssetsImg.Sprite,
    title: Strings.Sprite
  },
  {
    screen: SpriteEditorScreen.SpriteSheet,
    icon: AssetsImg.SpriteSheet,
    title: Strings.SpriteSheet
  }
]

export const initialPaletteList = {
  'Sweetie': {
    name: 'Sweetie',
    colors: [
      [26, 28, 44, 1],
      [93, 39, 93, 1],
      [177, 62, 83, 1],
      [239, 125, 87, 1],
      [255, 205, 117, 1],
      [167, 240, 112, 1],
      [56, 183, 100, 1],
      [37, 113, 121, 1],
      [41, 54, 111, 1],
      [59, 93, 201, 1],
      [65, 166, 246, 1],
      [115, 239, 247, 1],
      [244, 244, 244, 1],
      [148, 176, 194, 1],
      [86, 108, 134, 1],
      [51, 60, 87, 1]
    ]
  },
  'Island Joy': {
    name: 'Island Joy',
    colors: [
      [255, 255, 255, 1],
      [109, 247, 193, 1],
      [17, 173, 193, 1],
      [96, 108, 129, 1],
      [57, 52, 87, 1],
      [30, 136, 117, 1],
      [91, 179, 97, 1],
      [161, 229, 90, 1],
      [247, 228, 118, 1],
      [249, 146, 82, 1],
      [203, 77, 104, 1],
      [106, 55, 113, 1],
      [201, 36, 100, 1],
      [244, 140, 182, 1],
      [247, 182, 158, 1],
      [155, 156, 130, 1]
    ]
  },
  'Endesga': {
    name: 'Endesga',
    colors: [
      [228, 165, 114, 1],
      [184, 111, 80, 1],
      [116, 63, 57, 1],
      [63, 40, 50, 1],
      [158, 40, 53, 1],
      [229, 59, 68, 1],
      [251, 146, 43, 1],
      [255, 231, 98, 1],
      [99, 198, 77, 1],
      [50, 115, 69, 1],
      [25, 61, 63, 1],
      [79, 103, 129, 1],
      [175, 191, 210, 1],
      [255, 255, 255, 1],
      [44, 232, 244, 1],
      [4, 132, 209, 1]
    ]
  },
  'Bubblegum': {
    name: 'Bubblegum',
    colors: [
      [22, 23, 26, 1],
      [127, 6, 34, 1],
      [214, 36, 17, 1],
      [255, 132, 38, 1],
      [255, 209, 0, 1],
      [250, 253, 255, 1],
      [255, 128, 164, 1],
      [255, 38, 116, 1],
      [148, 33, 106, 1],
      [67, 0, 103, 1],
      [35, 73, 117, 1],
      [104, 174, 212, 1],
      [191, 255, 60, 1],
      [16, 210, 117, 1],
      [0, 120, 153, 1],
      [0, 40, 89, 1]
    ]
  },
  'Pico-8': {
    name: 'Pico-8',
    colors: [
      [0, 0, 0, 1],
      [29, 43, 83, 1],
      [126, 37, 83, 1],
      [0, 135, 81, 1],
      [171, 82, 54, 1],
      [95, 87, 79, 1],
      [194, 195, 199, 1],
      [255, 241, 232, 1],
      [255, 0, 77, 1],
      [255, 163, 0, 1],
      [255, 236, 39, 1],
      [0, 228, 54, 1],
      [41, 173, 255, 1],
      [131, 118, 156, 1],
      [255, 119, 168, 1],
      [255, 204, 170, 1]
    ]
  }
}
