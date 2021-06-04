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
  samp: 'samp',
  code: 'code',
  time: 'time',
  var: 'var',
  mark: 'mark',
  kbd: 'kbd',
  q: 'q',
  blockquote: 'blockquote', // should be a subset (since it should use margin)
  cite: 'cite',
  del: 'del',
  ins: 'ins',
  label: 'label',
  // small: 'small',
  // s: 's',
  // u: 'u',
}

// todo
// maybe group some subsets, like Code Variable KeyboardInput SampleOutput
// Or even move them from `<Text />` to `<Code />`
