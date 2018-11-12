module.exports = ruleset => (field, value) => {
	// If no rules are defined for this field, no errors
	if (
		!Reflect.has(ruleset, field) ||
		!Array.isArray(Reflect.get(ruleset, field)) ||
		Reflect.get(ruleset, field).length === 0
	) {
		return [];
	}

	// Get errors from all rules
	return Reflect.get(ruleset, field)
		.map(rule => rule(value))
		.filter(rule => rule !== null);
};
