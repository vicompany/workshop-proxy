import test from 'ava';

import answer from '../answers/1.2';
import exercise from '../exercises/1.2';

test('Exercise 1.2 handles ruleset correctly', (t) => {
	const ruleset = {
		field1: [
			(value) => {
				if (value.length >= 6) {
					return null;
				}

				return 'Value is not long enough';
			},
		],
		field2: [],
		field3: null,
	};

	t.deepEqual(answer(ruleset)('field1', 'foo'), ['Value is not long enough']);
	t.deepEqual(answer(ruleset)('field1', 'foobar'), []);
	t.deepEqual(answer(ruleset)('field2', 'foo'), []);
	t.deepEqual(answer(ruleset)('field3', 'foo'), []);

	t.deepEqual(exercise(ruleset)('field1', 'foo'), ['Value is not long enough']);
	t.deepEqual(exercise(ruleset)('field1', 'foobar'), []);
	t.deepEqual(exercise(ruleset)('field2', 'foo'), []);
	t.deepEqual(exercise(ruleset)('field3', 'foo'), []);
});
