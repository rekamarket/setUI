@as("default")
let default = Belt.Array.concatMany([
  // List
  ListPlayroom.make,
  UlPlayroom.make,
  // Frame
  FramePlayroom.make,
  // BlockQuote
  BlockQuotePlayroom.make,
  // Liton Default
  ButtonPlayroom.make,
  // Heading
  HeadingPlayroom.make,
  H1Playroom.make,
  H2Playroom.make,
  H3Playroom.make,
  H4Playroom.make,
  H5Playroom.make,
  H6Playroom.make,
  // Link
  APlayroom.make,
  // Text
  TextPlayroom.make,
  AbbrPlayroom.make,
  DataPlayroom.make,
  DdPlayroom.make,
  DtPlayroom.make,
  BPlayroom.make,
  IPlayroom.make,
  SmallPlayroom.make,
  SpanPlayroom.make,
  StrongPlayroom.make,
  // Paragraph
  ParagraphPlayroom.make,
  // Time
  TimePlayroom.make,
])
