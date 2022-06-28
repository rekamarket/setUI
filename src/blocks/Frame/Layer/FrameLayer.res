@genType
let resolve = (~size: FrameSize.t) => Cn.make([FrameSizeResolver.make(. size)])
