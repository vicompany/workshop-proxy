import test from 'ava';

import getFileHash from './functions/get-file-hash';
import answer from '../answers/2.3';
import exercise from '../exercises/2.3';

const EXERCISE_FILE = `${__dirname}/../exercises/2.3.js`;
const EXERCISE_FILE_HASH = 'b7af8d98b925a8abde1122a8e2e0792e';

const isFileUpdated = () => EXERCISE_FILE_HASH !== getFileHash(EXERCISE_FILE);

test('Exercise 2.3 keeps original properties intact', (t) => {
	t.is(answer([1, 2, 3, 4]).length, 4);

	if (isFileUpdated()) {
		t.is(exercise([1, 2, 3, 4]).length, 4);
	}
});

test('Exercise 2.3 slices given range', (t) => {
	t.deepEqual(answer([1, 2, 3, 4])['1:2'], [2, 3]);

	if (isFileUpdated()) {
		t.deepEqual(exercise([1, 2, 3, 4])['1:2'], [2, 3]);
	}
});
