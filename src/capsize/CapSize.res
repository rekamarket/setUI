type fontMetrics = {
  familyName: string,
  capHeight: int,
  ascent: int,
  descent: int,
  lineGap: int,
  unitsPerEm: int,
  xHeight: int,
}

type t = {
  capHeight: int,
  lineGap: int,
  fontMetrics,
}

type before = {
  content: string,
  marginBottom: string,
  display: string,
}

type after = {
  content: string,
  marginTop: string,
  display: string,
}

type styleObject = {
  lineHeight: string,
  fontSize: string,
  \"::before": before,
  \"::after": after,
}

@module("@capsizecss/core") external createStyleObject: (t) => styleObject = "createStyleObject"
