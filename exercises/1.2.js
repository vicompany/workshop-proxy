// Example ruleset:
//
// ruleset = {
//     password: [
//         (value) => {
//             if (value.length >= 6) {
//                 return null;
//             }
//
//             return 'Password should be at least 6 characters';
//         },
//         (value) => {
//             if (
//                 value.match(/[a-z]/) &&
//                 value.match(/[A-Z]/) &&
//                 value.match(/\d/)
//             )
//
//             return 'Password should at least contain one lowercase letter, uppercase letter and a digit';
//         }
//     ]
// };

module.exports = ruleset => (field, value) => {
	// If no rules are defined for this field, no errors
	if (
		!(field in ruleset) ||
		!Array.isArray(ruleset[field]) ||
		ruleset[field].length === 0
	) {
		return [];
	}

	// Get errors from all rules
	return ruleset[field]
		.map(rule => rule(value))
		.filter(rule => rule !== null);
};
