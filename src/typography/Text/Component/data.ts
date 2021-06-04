export const component = {
  p: 'p', // should be a subset (since it should use margin)
  div: 'div', // should be a subset (since it should use margin)
  span: 'span',
  strong: 'strong',
  em: 'em',
  i: 'i',
  b: 'b',
  dfn: 'dfn',
  abbr: 'abbr',
  sup: 'sup',
  sub: 'sub',
  time: 'time',
  mark: 'mark',
  q: 'q',
  blockquote: 'blockquote', // should be a subset (since it should use margin)
  cite: 'cite',
  del: 'del',
  ins: 'ins',
  label: 'label',
  legend: 'legend',
  u: 'u',
  s: 's',
  small: 'small',
}

// todo
// maybe group some subsets, like Code Variable KeyboardInput SampleOutput
// Or even move them from `<Text />` to `<Code />`
