const tuple = <T extends Array<string>>(...args: T) => args
const tupleNumeric = <T extends Array<number>>(...args: T) => args
const tupleMixed = <T extends Array<string | number>>(...args: T) => args

tuple.numeric = tupleNumeric
tuple.mixed = tupleMixed

export default tuple
