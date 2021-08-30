const composeHOC =
	(...funcs) =>
	(comp) => {
		return funcs.reduceRight((wrapped, f) => f(wrapped), comp)
	}

export default composeHOC
