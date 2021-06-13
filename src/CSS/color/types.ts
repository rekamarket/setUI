import type { Type } from './styles.css'

export type ColorProps =
  | {
      primary?: boolean
    }
  | {
      secondary?: boolean
    }
  | {
      red?: boolean
    }
  | {
      red50?: boolean
    }
  | {
      red100?: boolean
    }
  | {
      red200?: boolean
    }
  | {
      red300?: boolean
    }
  | {
      red400?: boolean
    }
  | {
      red500?: boolean
    }
  | {
      red600?: boolean
    }
  | {
      red700?: boolean
    }
  | {
      red800?: boolean
    }
  | {
      red900?: boolean
    }
  | {
      redA100?: boolean
    }
  | {
      redA200?: boolean
    }
  | {
      redA400?: boolean
    }
  | {
      redA700?: boolean
    }
  | {
      pink?: boolean
    }
  | {
      pink50?: boolean
    }
  | {
      pink100?: boolean
    }
  | {
      pink200?: boolean
    }
  | {
      pink300?: boolean
    }
  | {
      pink400?: boolean
    }
  | {
      pink500?: boolean
    }
  | {
      pink600?: boolean
    }
  | {
      pink700?: boolean
    }
  | {
      pink800?: boolean
    }
  | {
      pink900?: boolean
    }
  | {
      pinkA100?: boolean
    }
  | {
      pinkA200?: boolean
    }
  | {
      pinkA400?: boolean
    }
  | {
      pinkA700?: boolean
    }
  | {
      purple?: boolean
    }
  | {
      purple50?: boolean
    }
  | {
      purple100?: boolean
    }
  | {
      purple200?: boolean
    }
  | {
      purple300?: boolean
    }
  | {
      purple400?: boolean
    }
  | {
      purple500?: boolean
    }
  | {
      purple600?: boolean
    }
  | {
      purple700?: boolean
    }
  | {
      purple800?: boolean
    }
  | {
      purple900?: boolean
    }
  | {
      purpleA100?: boolean
    }
  | {
      purpleA200?: boolean
    }
  | {
      purpleA400?: boolean
    }
  | {
      purpleA700?: boolean
    }
  | {
      deepPurple?: boolean
    }
  | {
      deepPurple50?: boolean
    }
  | {
      deepPurple100?: boolean
    }
  | {
      deepPurple200?: boolean
    }
  | {
      deepPurple300?: boolean
    }
  | {
      deepPurple400?: boolean
    }
  | {
      deepPurple500?: boolean
    }
  | {
      deepPurple600?: boolean
    }
  | {
      deepPurple700?: boolean
    }
  | {
      deepPurple800?: boolean
    }
  | {
      deepPurple900?: boolean
    }
  | {
      deepPurpleA100?: boolean
    }
  | {
      deepPurpleA200?: boolean
    }
  | {
      deepPurpleA400?: boolean
    }
  | {
      deepPurpleA700?: boolean
    }
  | {
      indigo?: boolean
    }
  | {
      indigo50?: boolean
    }
  | {
      indigo100?: boolean
    }
  | {
      indigo200?: boolean
    }
  | {
      indigo300?: boolean
    }
  | {
      indigo400?: boolean
    }
  | {
      indigo500?: boolean
    }
  | {
      indigo600?: boolean
    }
  | {
      indigo700?: boolean
    }
  | {
      indigo800?: boolean
    }
  | {
      indigo900?: boolean
    }
  | {
      indigoA100?: boolean
    }
  | {
      indigoA200?: boolean
    }
  | {
      indigoA400?: boolean
    }
  | {
      indigoA700?: boolean
    }
  | {
      blue?: boolean
    }
  | {
      blue50?: boolean
    }
  | {
      blue100?: boolean
    }
  | {
      blue200?: boolean
    }
  | {
      blue300?: boolean
    }
  | {
      blue400?: boolean
    }
  | {
      blue500?: boolean
    }
  | {
      blue600?: boolean
    }
  | {
      blue700?: boolean
    }
  | {
      blue800?: boolean
    }
  | {
      blue900?: boolean
    }
  | {
      blueA100?: boolean
    }
  | {
      blueA200?: boolean
    }
  | {
      blueA400?: boolean
    }
  | {
      blueA700?: boolean
    }
  | {
      lightBlue?: boolean
    }
  | {
      lightBlue50?: boolean
    }
  | {
      lightBlue100?: boolean
    }
  | {
      lightBlue200?: boolean
    }
  | {
      lightBlue300?: boolean
    }
  | {
      lightBlue400?: boolean
    }
  | {
      lightBlue500?: boolean
    }
  | {
      lightBlue600?: boolean
    }
  | {
      lightBlue700?: boolean
    }
  | {
      lightBlue800?: boolean
    }
  | {
      lightBlue900?: boolean
    }
  | {
      lightBlueA100?: boolean
    }
  | {
      lightBlueA200?: boolean
    }
  | {
      lightBlueA400?: boolean
    }
  | {
      lightBlueA700?: boolean
    }
  | {
      cyan?: boolean
    }
  | {
      cyan50?: boolean
    }
  | {
      cyan100?: boolean
    }
  | {
      cyan200?: boolean
    }
  | {
      cyan300?: boolean
    }
  | {
      cyan400?: boolean
    }
  | {
      cyan500?: boolean
    }
  | {
      cyan600?: boolean
    }
  | {
      cyan700?: boolean
    }
  | {
      cyan800?: boolean
    }
  | {
      cyan900?: boolean
    }
  | {
      cyanA100?: boolean
    }
  | {
      cyanA200?: boolean
    }
  | {
      cyanA400?: boolean
    }
  | {
      cyanA700?: boolean
    }
  | {
      teal?: boolean
    }
  | {
      teal50?: boolean
    }
  | {
      teal100?: boolean
    }
  | {
      teal200?: boolean
    }
  | {
      teal300?: boolean
    }
  | {
      teal400?: boolean
    }
  | {
      teal500?: boolean
    }
  | {
      teal600?: boolean
    }
  | {
      teal700?: boolean
    }
  | {
      teal800?: boolean
    }
  | {
      teal900?: boolean
    }
  | {
      tealA100?: boolean
    }
  | {
      tealA200?: boolean
    }
  | {
      tealA400?: boolean
    }
  | {
      tealA700?: boolean
    }
  | {
      green?: boolean
    }
  | {
      green50?: boolean
    }
  | {
      green100?: boolean
    }
  | {
      green200?: boolean
    }
  | {
      green300?: boolean
    }
  | {
      green400?: boolean
    }
  | {
      green500?: boolean
    }
  | {
      green600?: boolean
    }
  | {
      green700?: boolean
    }
  | {
      green800?: boolean
    }
  | {
      green900?: boolean
    }
  | {
      greenA100?: boolean
    }
  | {
      greenA200?: boolean
    }
  | {
      greenA400?: boolean
    }
  | {
      greenA700?: boolean
    }
  | {
      lightGreen?: boolean
    }
  | {
      lightGreen50?: boolean
    }
  | {
      lightGreen100?: boolean
    }
  | {
      lightGreen200?: boolean
    }
  | {
      lightGreen300?: boolean
    }
  | {
      lightGreen400?: boolean
    }
  | {
      lightGreen500?: boolean
    }
  | {
      lightGreen600?: boolean
    }
  | {
      lightGreen700?: boolean
    }
  | {
      lightGreen800?: boolean
    }
  | {
      lightGreen900?: boolean
    }
  | {
      lightGreenA100?: boolean
    }
  | {
      lightGreenA200?: boolean
    }
  | {
      lightGreenA400?: boolean
    }
  | {
      lightGreenA700?: boolean
    }
  | {
      lime?: boolean
    }
  | {
      lime50?: boolean
    }
  | {
      lime100?: boolean
    }
  | {
      lime200?: boolean
    }
  | {
      lime300?: boolean
    }
  | {
      lime400?: boolean
    }
  | {
      lime500?: boolean
    }
  | {
      lime600?: boolean
    }
  | {
      lime700?: boolean
    }
  | {
      lime800?: boolean
    }
  | {
      lime900?: boolean
    }
  | {
      limeA100?: boolean
    }
  | {
      limeA200?: boolean
    }
  | {
      limeA400?: boolean
    }
  | {
      limeA700?: boolean
    }
  | {
      yellow?: boolean
    }
  | {
      yellow50?: boolean
    }
  | {
      yellow100?: boolean
    }
  | {
      yellow200?: boolean
    }
  | {
      yellow300?: boolean
    }
  | {
      yellow400?: boolean
    }
  | {
      yellow500?: boolean
    }
  | {
      yellow600?: boolean
    }
  | {
      yellow700?: boolean
    }
  | {
      yellow800?: boolean
    }
  | {
      yellow900?: boolean
    }
  | {
      yellowA100?: boolean
    }
  | {
      yellowA200?: boolean
    }
  | {
      yellowA400?: boolean
    }
  | {
      yellowA700?: boolean
    }
  | {
      amber?: boolean
    }
  | {
      amber50?: boolean
    }
  | {
      amber100?: boolean
    }
  | {
      amber200?: boolean
    }
  | {
      amber300?: boolean
    }
  | {
      amber400?: boolean
    }
  | {
      amber500?: boolean
    }
  | {
      amber600?: boolean
    }
  | {
      amber700?: boolean
    }
  | {
      amber800?: boolean
    }
  | {
      amber900?: boolean
    }
  | {
      amberA100?: boolean
    }
  | {
      amberA200?: boolean
    }
  | {
      amberA400?: boolean
    }
  | {
      amberA700?: boolean
    }
  | {
      orange?: boolean
    }
  | {
      orange50?: boolean
    }
  | {
      orange100?: boolean
    }
  | {
      orange200?: boolean
    }
  | {
      orange300?: boolean
    }
  | {
      orange400?: boolean
    }
  | {
      orange500?: boolean
    }
  | {
      orange600?: boolean
    }
  | {
      orange700?: boolean
    }
  | {
      orange800?: boolean
    }
  | {
      orange900?: boolean
    }
  | {
      orangeA100?: boolean
    }
  | {
      orangeA200?: boolean
    }
  | {
      orangeA400?: boolean
    }
  | {
      orangeA700?: boolean
    }
  | {
      deepOrange?: boolean
    }
  | {
      deepOrange50?: boolean
    }
  | {
      deepOrange100?: boolean
    }
  | {
      deepOrange200?: boolean
    }
  | {
      deepOrange300?: boolean
    }
  | {
      deepOrange400?: boolean
    }
  | {
      deepOrange500?: boolean
    }
  | {
      deepOrange600?: boolean
    }
  | {
      deepOrange700?: boolean
    }
  | {
      deepOrange800?: boolean
    }
  | {
      deepOrange900?: boolean
    }
  | {
      deepOrangeA100?: boolean
    }
  | {
      deepOrangeA200?: boolean
    }
  | {
      deepOrangeA400?: boolean
    }
  | {
      deepOrangeA700?: boolean
    }
  | {
      brown?: boolean
    }
  | {
      brown50?: boolean
    }
  | {
      brown100?: boolean
    }
  | {
      brown200?: boolean
    }
  | {
      brown300?: boolean
    }
  | {
      brown400?: boolean
    }
  | {
      brown500?: boolean
    }
  | {
      brown600?: boolean
    }
  | {
      brown700?: boolean
    }
  | {
      brown800?: boolean
    }
  | {
      brown900?: boolean
    }
  | {
      grey?: boolean
    }
  | {
      grey50?: boolean
    }
  | {
      grey100?: boolean
    }
  | {
      grey200?: boolean
    }
  | {
      grey300?: boolean
    }
  | {
      grey400?: boolean
    }
  | {
      grey500?: boolean
    }
  | {
      grey600?: boolean
    }
  | {
      grey700?: boolean
    }
  | {
      grey800?: boolean
    }
  | {
      grey900?: boolean
    }
  | {
      blueGrey?: boolean
    }
  | {
      blueGrey50?: boolean
    }
  | {
      blueGrey100?: boolean
    }
  | {
      blueGrey200?: boolean
    }
  | {
      blueGrey300?: boolean
    }
  | {
      blueGrey400?: boolean
    }
  | {
      blueGrey500?: boolean
    }
  | {
      blueGrey600?: boolean
    }
  | {
      blueGrey700?: boolean
    }
  | {
      blueGrey800?: boolean
    }
  | {
      blueGrey900?: boolean
    }
  | {
      black?: boolean
    }
  | {
      white?: boolean
    }
  | {
      color?: Type
    }
