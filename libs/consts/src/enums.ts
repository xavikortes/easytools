export enum Strings {
  NewPaletteButton = '+ Nueva Paleta',
  NewPaletteName = 'Nueva Paleta',
  CopiedPaletteName = 'Copy',
  PaintMode='Painter',
  EraseMode='Eraser',
  PickMode='Picker',
  FillMode='Filler',
  Delete='Delete',
  Copy='Copy',
  Download='Download',
  Restore='Restore Default',

  Palette='Palette',
  Sprite='Sprite',
  SpriteSheet='SpriteSheet',

  NotImplemented='Not Implemented',

  ShiftRight='Hor. Offset',
  ShiftDown='Ver. Offset',
  Blur='Blur',
  Spread='Spread',
  Color='Color',
  Opacity='Opacity',
  Inset='Inset',
  TargetColor='Target Color',

  Yes='Yes',
  No='No',
}

export enum Numbers {
  SpriteSheetWidth = 8,
  SpriteSheetHeight = 11,
  SpriteSize = 16
}

export enum AssetsImg {
  Paint='assets/pencil.png',
  Erase='assets/erase.png',
  Pick='assets/picker.png',
  Fill='assets/filler.png',
  Delete='assets/trash.png',
  Copy='assets/copy.png',
  Download='assets/download.png',
  Restore='assets/restore.png',

  Palette='assets/palette.png',
  Sprite='assets/pikachu.png',
  SpriteSheet='assets/caterpie.png',
}

export enum AppScreen {
  Palette = 1,
  Sprite,
  SpriteSheet,
}

export enum SpriteEditorMode {
  Paint = 1,
  Erase,
  Pick,
  Fill,
}

export enum DbName {
  PaletteList = 'paletteList',
}
