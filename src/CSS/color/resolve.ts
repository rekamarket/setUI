import { Style } from './styles.css'

export function resolve<T>(props: T) {
  switch (true) {
    case 'primary' in props: {
      return Style.primary
    }
    case 'secondary' in props: {
      return Style.secondary
    }
    case 'red' in props: {
      return Style.red
    }
    case 'red50' in props: {
      return Style.red50
    }
    case 'red100' in props: {
      return Style.red100
    }
    case 'red200' in props: {
      return Style.red200
    }
    case 'red300' in props: {
      return Style.red300
    }
    case 'red400' in props: {
      return Style.red400
    }
    case 'red500' in props: {
      return Style.red500
    }
    case 'red600' in props: {
      return Style.red600
    }
    case 'red700' in props: {
      return Style.red700
    }
    case 'red800' in props: {
      return Style.red800
    }
    case 'red900' in props: {
      return Style.red900
    }
    case 'redA100' in props: {
      return Style.redA100
    }
    case 'redA200' in props: {
      return Style.redA200
    }
    case 'redA400' in props: {
      return Style.redA400
    }
    case 'redA700' in props: {
      return Style.redA700
    }
    case 'pink' in props: {
      return Style.pink
    }
    case 'pink50' in props: {
      return Style.pink50
    }
    case 'pink100' in props: {
      return Style.pink100
    }
    case 'pink200' in props: {
      return Style.pink200
    }
    case 'pink300' in props: {
      return Style.pink300
    }
    case 'pink400' in props: {
      return Style.pink400
    }
    case 'pink500' in props: {
      return Style.pink500
    }
    case 'pink600' in props: {
      return Style.pink600
    }
    case 'pink700' in props: {
      return Style.pink700
    }
    case 'pink800' in props: {
      return Style.pink800
    }
    case 'pink900' in props: {
      return Style.pink900
    }
    case 'pinkA100' in props: {
      return Style.pinkA100
    }
    case 'pinkA200' in props: {
      return Style.pinkA200
    }
    case 'pinkA400' in props: {
      return Style.pinkA400
    }
    case 'pinkA700' in props: {
      return Style.pinkA700
    }
    case 'purple' in props: {
      return Style.purple
    }
    case 'purple50' in props: {
      return Style.purple50
    }
    case 'purple100' in props: {
      return Style.purple100
    }
    case 'purple200' in props: {
      return Style.purple200
    }
    case 'purple300' in props: {
      return Style.purple300
    }
    case 'purple400' in props: {
      return Style.purple400
    }
    case 'purple500' in props: {
      return Style.purple500
    }
    case 'purple600' in props: {
      return Style.purple600
    }
    case 'purple700' in props: {
      return Style.purple700
    }
    case 'purple800' in props: {
      return Style.purple800
    }
    case 'purple900' in props: {
      return Style.purple900
    }
    case 'purpleA100' in props: {
      return Style.purpleA100
    }
    case 'purpleA200' in props: {
      return Style.purpleA200
    }
    case 'purpleA400' in props: {
      return Style.purpleA400
    }
    case 'purpleA700' in props: {
      return Style.purpleA700
    }
    case 'deepPurple' in props: {
      return Style.deepPurple
    }
    case 'deepPurple50' in props: {
      return Style.deepPurple50
    }
    case 'deepPurple100' in props: {
      return Style.deepPurple100
    }
    case 'deepPurple200' in props: {
      return Style.deepPurple200
    }
    case 'deepPurple300' in props: {
      return Style.deepPurple300
    }
    case 'deepPurple400' in props: {
      return Style.deepPurple400
    }
    case 'deepPurple500' in props: {
      return Style.deepPurple500
    }
    case 'deepPurple600' in props: {
      return Style.deepPurple600
    }
    case 'deepPurple700' in props: {
      return Style.deepPurple700
    }
    case 'deepPurple800' in props: {
      return Style.deepPurple800
    }
    case 'deepPurple900' in props: {
      return Style.deepPurple900
    }
    case 'deepPurpleA100' in props: {
      return Style.deepPurpleA100
    }
    case 'deepPurpleA200' in props: {
      return Style.deepPurpleA200
    }
    case 'deepPurpleA400' in props: {
      return Style.deepPurpleA400
    }
    case 'deepPurpleA700' in props: {
      return Style.deepPurpleA700
    }
    case 'indigo' in props: {
      return Style.indigo
    }
    case 'indigo50' in props: {
      return Style.indigo50
    }
    case 'indigo100' in props: {
      return Style.indigo100
    }
    case 'indigo200' in props: {
      return Style.indigo200
    }
    case 'indigo300' in props: {
      return Style.indigo300
    }
    case 'indigo400' in props: {
      return Style.indigo400
    }
    case 'indigo500' in props: {
      return Style.indigo500
    }
    case 'indigo600' in props: {
      return Style.indigo600
    }
    case 'indigo700' in props: {
      return Style.indigo700
    }
    case 'indigo800' in props: {
      return Style.indigo800
    }
    case 'indigo900' in props: {
      return Style.indigo900
    }
    case 'indigoA100' in props: {
      return Style.indigoA100
    }
    case 'indigoA200' in props: {
      return Style.indigoA200
    }
    case 'indigoA400' in props: {
      return Style.indigoA400
    }
    case 'indigoA700' in props: {
      return Style.indigoA700
    }
    case 'blue' in props: {
      return Style.blue
    }
    case 'blue50' in props: {
      return Style.blue50
    }
    case 'blue100' in props: {
      return Style.blue100
    }
    case 'blue200' in props: {
      return Style.blue200
    }
    case 'blue300' in props: {
      return Style.blue300
    }
    case 'blue400' in props: {
      return Style.blue400
    }
    case 'blue500' in props: {
      return Style.blue500
    }
    case 'blue600' in props: {
      return Style.blue600
    }
    case 'blue700' in props: {
      return Style.blue700
    }
    case 'blue800' in props: {
      return Style.blue800
    }
    case 'blue900' in props: {
      return Style.blue900
    }
    case 'blueA100' in props: {
      return Style.blueA100
    }
    case 'blueA200' in props: {
      return Style.blueA200
    }
    case 'blueA400' in props: {
      return Style.blueA400
    }
    case 'blueA700' in props: {
      return Style.blueA700
    }
    case 'lightBlue' in props: {
      return Style.lightBlue
    }
    case 'lightBlue50' in props: {
      return Style.lightBlue50
    }
    case 'lightBlue100' in props: {
      return Style.lightBlue100
    }
    case 'lightBlue200' in props: {
      return Style.lightBlue200
    }
    case 'lightBlue300' in props: {
      return Style.lightBlue300
    }
    case 'lightBlue400' in props: {
      return Style.lightBlue400
    }
    case 'lightBlue500' in props: {
      return Style.lightBlue500
    }
    case 'lightBlue600' in props: {
      return Style.lightBlue600
    }
    case 'lightBlue700' in props: {
      return Style.lightBlue700
    }
    case 'lightBlue800' in props: {
      return Style.lightBlue800
    }
    case 'lightBlue900' in props: {
      return Style.lightBlue900
    }
    case 'lightBlueA100' in props: {
      return Style.lightBlueA100
    }
    case 'lightBlueA200' in props: {
      return Style.lightBlueA200
    }
    case 'lightBlueA400' in props: {
      return Style.lightBlueA400
    }
    case 'lightBlueA700' in props: {
      return Style.lightBlueA700
    }
    case 'cyan' in props: {
      return Style.cyan
    }
    case 'cyan50' in props: {
      return Style.cyan50
    }
    case 'cyan100' in props: {
      return Style.cyan100
    }
    case 'cyan200' in props: {
      return Style.cyan200
    }
    case 'cyan300' in props: {
      return Style.cyan300
    }
    case 'cyan400' in props: {
      return Style.cyan400
    }
    case 'cyan500' in props: {
      return Style.cyan500
    }
    case 'cyan600' in props: {
      return Style.cyan600
    }
    case 'cyan700' in props: {
      return Style.cyan700
    }
    case 'cyan800' in props: {
      return Style.cyan800
    }
    case 'cyan900' in props: {
      return Style.cyan900
    }
    case 'cyanA100' in props: {
      return Style.cyanA100
    }
    case 'cyanA200' in props: {
      return Style.cyanA200
    }
    case 'cyanA400' in props: {
      return Style.cyanA400
    }
    case 'cyanA700' in props: {
      return Style.cyanA700
    }
    case 'teal' in props: {
      return Style.teal
    }
    case 'teal50' in props: {
      return Style.teal50
    }
    case 'teal100' in props: {
      return Style.teal100
    }
    case 'teal200' in props: {
      return Style.teal200
    }
    case 'teal300' in props: {
      return Style.teal300
    }
    case 'teal400' in props: {
      return Style.teal400
    }
    case 'teal500' in props: {
      return Style.teal500
    }
    case 'teal600' in props: {
      return Style.teal600
    }
    case 'teal700' in props: {
      return Style.teal700
    }
    case 'teal800' in props: {
      return Style.teal800
    }
    case 'teal900' in props: {
      return Style.teal900
    }
    case 'tealA100' in props: {
      return Style.tealA100
    }
    case 'tealA200' in props: {
      return Style.tealA200
    }
    case 'tealA400' in props: {
      return Style.tealA400
    }
    case 'tealA700' in props: {
      return Style.tealA700
    }
    case 'green' in props: {
      return Style.green
    }
    case 'green50' in props: {
      return Style.green50
    }
    case 'green100' in props: {
      return Style.green100
    }
    case 'green200' in props: {
      return Style.green200
    }
    case 'green300' in props: {
      return Style.green300
    }
    case 'green400' in props: {
      return Style.green400
    }
    case 'green500' in props: {
      return Style.green500
    }
    case 'green600' in props: {
      return Style.green600
    }
    case 'green700' in props: {
      return Style.green700
    }
    case 'green800' in props: {
      return Style.green800
    }
    case 'green900' in props: {
      return Style.green900
    }
    case 'greenA100' in props: {
      return Style.greenA100
    }
    case 'greenA200' in props: {
      return Style.greenA200
    }
    case 'greenA400' in props: {
      return Style.greenA400
    }
    case 'greenA700' in props: {
      return Style.greenA700
    }
    case 'lightGreen' in props: {
      return Style.lightGreen
    }
    case 'lightGreen50' in props: {
      return Style.lightGreen50
    }
    case 'lightGreen100' in props: {
      return Style.lightGreen100
    }
    case 'lightGreen200' in props: {
      return Style.lightGreen200
    }
    case 'lightGreen300' in props: {
      return Style.lightGreen300
    }
    case 'lightGreen400' in props: {
      return Style.lightGreen400
    }
    case 'lightGreen500' in props: {
      return Style.lightGreen500
    }
    case 'lightGreen600' in props: {
      return Style.lightGreen600
    }
    case 'lightGreen700' in props: {
      return Style.lightGreen700
    }
    case 'lightGreen800' in props: {
      return Style.lightGreen800
    }
    case 'lightGreen900' in props: {
      return Style.lightGreen900
    }
    case 'lightGreenA100' in props: {
      return Style.lightGreenA100
    }
    case 'lightGreenA200' in props: {
      return Style.lightGreenA200
    }
    case 'lightGreenA400' in props: {
      return Style.lightGreenA400
    }
    case 'lightGreenA700' in props: {
      return Style.lightGreenA700
    }
    case 'lime' in props: {
      return Style.lime
    }
    case 'lime50' in props: {
      return Style.lime50
    }
    case 'lime100' in props: {
      return Style.lime100
    }
    case 'lime200' in props: {
      return Style.lime200
    }
    case 'lime300' in props: {
      return Style.lime300
    }
    case 'lime400' in props: {
      return Style.lime400
    }
    case 'lime500' in props: {
      return Style.lime500
    }
    case 'lime600' in props: {
      return Style.lime600
    }
    case 'lime700' in props: {
      return Style.lime700
    }
    case 'lime800' in props: {
      return Style.lime800
    }
    case 'lime900' in props: {
      return Style.lime900
    }
    case 'limeA100' in props: {
      return Style.limeA100
    }
    case 'limeA200' in props: {
      return Style.limeA200
    }
    case 'limeA400' in props: {
      return Style.limeA400
    }
    case 'limeA700' in props: {
      return Style.limeA700
    }
    case 'yellow' in props: {
      return Style.yellow
    }
    case 'yellow50' in props: {
      return Style.yellow50
    }
    case 'yellow100' in props: {
      return Style.yellow100
    }
    case 'yellow200' in props: {
      return Style.yellow200
    }
    case 'yellow300' in props: {
      return Style.yellow300
    }
    case 'yellow400' in props: {
      return Style.yellow400
    }
    case 'yellow500' in props: {
      return Style.yellow500
    }
    case 'yellow600' in props: {
      return Style.yellow600
    }
    case 'yellow700' in props: {
      return Style.yellow700
    }
    case 'yellow800' in props: {
      return Style.yellow800
    }
    case 'yellow900' in props: {
      return Style.yellow900
    }
    case 'yellowA100' in props: {
      return Style.yellowA100
    }
    case 'yellowA200' in props: {
      return Style.yellowA200
    }
    case 'yellowA400' in props: {
      return Style.yellowA400
    }
    case 'yellowA700' in props: {
      return Style.yellowA700
    }
    case 'amber' in props: {
      return Style.amber
    }
    case 'amber50' in props: {
      return Style.amber50
    }
    case 'amber100' in props: {
      return Style.amber100
    }
    case 'amber200' in props: {
      return Style.amber200
    }
    case 'amber300' in props: {
      return Style.amber300
    }
    case 'amber400' in props: {
      return Style.amber400
    }
    case 'amber500' in props: {
      return Style.amber500
    }
    case 'amber600' in props: {
      return Style.amber600
    }
    case 'amber700' in props: {
      return Style.amber700
    }
    case 'amber800' in props: {
      return Style.amber800
    }
    case 'amber900' in props: {
      return Style.amber900
    }
    case 'amberA100' in props: {
      return Style.amberA100
    }
    case 'amberA200' in props: {
      return Style.amberA200
    }
    case 'amberA400' in props: {
      return Style.amberA400
    }
    case 'amberA700' in props: {
      return Style.amberA700
    }
    case 'orange' in props: {
      return Style.orange
    }
    case 'orange50' in props: {
      return Style.orange50
    }
    case 'orange100' in props: {
      return Style.orange100
    }
    case 'orange200' in props: {
      return Style.orange200
    }
    case 'orange300' in props: {
      return Style.orange300
    }
    case 'orange400' in props: {
      return Style.orange400
    }
    case 'orange500' in props: {
      return Style.orange500
    }
    case 'orange600' in props: {
      return Style.orange600
    }
    case 'orange700' in props: {
      return Style.orange700
    }
    case 'orange800' in props: {
      return Style.orange800
    }
    case 'orange900' in props: {
      return Style.orange900
    }
    case 'orangeA100' in props: {
      return Style.orangeA100
    }
    case 'orangeA200' in props: {
      return Style.orangeA200
    }
    case 'orangeA400' in props: {
      return Style.orangeA400
    }
    case 'orangeA700' in props: {
      return Style.orangeA700
    }
    case 'deepOrange' in props: {
      return Style.deepOrange
    }
    case 'deepOrange50' in props: {
      return Style.deepOrange50
    }
    case 'deepOrange100' in props: {
      return Style.deepOrange100
    }
    case 'deepOrange200' in props: {
      return Style.deepOrange200
    }
    case 'deepOrange300' in props: {
      return Style.deepOrange300
    }
    case 'deepOrange400' in props: {
      return Style.deepOrange400
    }
    case 'deepOrange500' in props: {
      return Style.deepOrange500
    }
    case 'deepOrange600' in props: {
      return Style.deepOrange600
    }
    case 'deepOrange700' in props: {
      return Style.deepOrange700
    }
    case 'deepOrange800' in props: {
      return Style.deepOrange800
    }
    case 'deepOrange900' in props: {
      return Style.deepOrange900
    }
    case 'deepOrangeA100' in props: {
      return Style.deepOrangeA100
    }
    case 'deepOrangeA200' in props: {
      return Style.deepOrangeA200
    }
    case 'deepOrangeA400' in props: {
      return Style.deepOrangeA400
    }
    case 'deepOrangeA700' in props: {
      return Style.deepOrangeA700
    }
    case 'brown' in props: {
      return Style.brown
    }
    case 'brown50' in props: {
      return Style.brown50
    }
    case 'brown100' in props: {
      return Style.brown100
    }
    case 'brown200' in props: {
      return Style.brown200
    }
    case 'brown300' in props: {
      return Style.brown300
    }
    case 'brown400' in props: {
      return Style.brown400
    }
    case 'brown500' in props: {
      return Style.brown500
    }
    case 'brown600' in props: {
      return Style.brown600
    }
    case 'brown700' in props: {
      return Style.brown700
    }
    case 'brown800' in props: {
      return Style.brown800
    }
    case 'brown900' in props: {
      return Style.brown900
    }
    case 'grey' in props: {
      return Style.grey
    }
    case 'grey50' in props: {
      return Style.grey50
    }
    case 'grey100' in props: {
      return Style.grey100
    }
    case 'grey200' in props: {
      return Style.grey200
    }
    case 'grey300' in props: {
      return Style.grey300
    }
    case 'grey400' in props: {
      return Style.grey400
    }
    case 'grey500' in props: {
      return Style.grey500
    }
    case 'grey600' in props: {
      return Style.grey600
    }
    case 'grey700' in props: {
      return Style.grey700
    }
    case 'grey800' in props: {
      return Style.grey800
    }
    case 'grey900' in props: {
      return Style.grey900
    }
    case 'blueGrey' in props: {
      return Style.blueGrey
    }
    case 'blueGrey50' in props: {
      return Style.blueGrey50
    }
    case 'blueGrey100' in props: {
      return Style.blueGrey100
    }
    case 'blueGrey200' in props: {
      return Style.blueGrey200
    }
    case 'blueGrey300' in props: {
      return Style.blueGrey300
    }
    case 'blueGrey400' in props: {
      return Style.blueGrey400
    }
    case 'blueGrey500' in props: {
      return Style.blueGrey500
    }
    case 'blueGrey600' in props: {
      return Style.blueGrey600
    }
    case 'blueGrey700' in props: {
      return Style.blueGrey700
    }
    case 'blueGrey800' in props: {
      return Style.blueGrey800
    }
    case 'blueGrey900' in props: {
      return Style.blueGrey900
    }
    case 'black' in props: {
      return Style.black
    }
    case 'white' in props: {
      return Style.white
    }
    case 'color' in props: {
      return Style[props['color']]
    }
    default: {
      return Style.initial
    }
  }
}
