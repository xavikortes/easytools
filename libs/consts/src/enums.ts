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

  TopLeft='Top Left',
  TopRight='Top Right',
  BottomRight='Bottom Right',
  BottomLeft='Bottom Left',

  Yes='Yes',
  No='No',

  Home='Home',

  AppTitle='Easy Tools',
  SpriteEditorAppTitle='Sprite Editor',
  BoxShadowAppTitle='Box-Shadow Generator',
  BorderRadiusAppTitle='Border-Radius Generator',
}

export enum Numbers {
  SpriteSheetWidth = 8,
  SpriteSheetHeight = 11,
  SpriteSize = 16
}

export enum Colors {
  InitialBoxShadowColor='#000',
  InitialBoxShadowTargetColor='#a99379'
}

export enum AssetsImg {
  Home='assets/home.png',

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

  BoxShadow='assets/box-shadow.png',
  BorderRadius='assets/border-radius.png',
}

export enum SpriteEditorScreen {
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

export enum Apps {
  Home = 1,
  SpriteEditor,
  BoxShadow,
  BorderRadius,
}

export enum Routes {
  Home='/',
  SpriteEditor='/sprite-editor',
  BoxShadow='/box-shadow',
  BorderRadius='/border-radius',
}

export enum DbName {
  PaletteList='paletteList',
}
