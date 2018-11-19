import test from 'ava';

import getFileHash from './functions/get-file-hash';
import answer from '../answers/2.1';
import exercise from '../exercises/2.1';

const EXERCISE_FILE = `${__dirname}/../exercises/2.1.js`;
const EXERCISE_FILE_HASH = 'e98111f981f105629dc29e3bdee1f82e';

const isFileUpdated = () => EXERCISE_FILE_HASH !== getFileHash(EXERCISE_FILE);

test.beforeEach((t) => {
	const obj = {
		currency: 'EUR',
		value: 100,
	};

	t.context.proxyAnswer = answer({ ...obj });
	t.context.proxyExercise = exercise({ ...obj });
});

test('Exercise 2.1 successful overwrites properties', (t) => {
	t.notThrows(() => {
		t.context.proxyAnswer.value = 101;
	});

	if (isFileUpdated()) {
		t.notThrows(() => {
			t.context.proxyExercise.value = 101;
		});
	}
});

test('Exercise 2.1 throws when setting properties with a different type', (t) => {
	t.throws(() => {
		t.context.proxyAnswer.value = '101';
	});

	if (isFileUpdated()) {
		t.throws(() => {
			t.context.proxyExercise.value = '101';
		});
	}
});
