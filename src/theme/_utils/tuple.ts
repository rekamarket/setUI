const tuple = <T extends Array<string>>(...args: T) => args
const tupleNumeric = <T extends Array<number>>(...args: T) => args

tuple.numeric = tupleNumeric

export default tuple
