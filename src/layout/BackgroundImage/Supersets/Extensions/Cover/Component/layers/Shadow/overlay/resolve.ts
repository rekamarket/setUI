export function resolve<T>(props: T) {
  switch (true) {
    // case 'primary' in props: {
    //   return 'primary'
    // }
    // case 'secondary' in props: {
    //   return 'secondary'
    // }
    // case 'red' in props: {
    //   return 'red'
    // }
    // case 'pink' in props: {
    //   return 'pink'
    // }
    // case 'purple' in props: {
    //   return 'purple'
    // }
    // case 'deepPurple' in props: {
    //   return 'deepPurple'
    // }
    // case 'indigo' in props: {
    //   return 'indigo'
    // }
    // case 'blue' in props: {
    //   return 'blue'
    // }
    // case 'lightBlue' in props: {
    //   return 'lightBlue'
    // }
    // case 'cyan' in props: {
    //   return 'cyan'
    // }
    // case 'teal' in props: {
    //   return 'teal'
    // }
    // case 'green' in props: {
    //   return 'green'
    // }
    // case 'lightGreen' in props: {
    //   return 'lightGreen'
    // }
    // case 'lime' in props: {
    //   return 'lime'
    // }
    // case 'yellow' in props: {
    //   return 'yellow'
    // }
    // case 'amber' in props: {
    //   return 'amber'
    // }
    // case 'orange' in props: {
    //   return 'orange'
    // }
    // case 'deepOrange' in props: {
    //   return 'deepOrange'
    // }
    // case 'brown' in props: {
    //   return 'brown'
    // }
    // case 'grey' in props: {
    //   return 'grey'
    // }
    // case 'blueGrey' in props: {
    //   return 'blueGrey'
    // }
    // case 'black' in props: {
    //   return 'black'
    // }
    // case 'white' in props: {
    //   return 'white'
    // }
    case 'overlay' in props: {
      return props['overlay']
    }
    default: {
      return undefined
    }
  }
}
