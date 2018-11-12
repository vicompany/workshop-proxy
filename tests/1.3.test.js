import sinon from 'sinon';
import test from 'ava';

import getFileHash from './functions/get-file-hash';
import answer from '../answers/1.3';
import exercise from '../exercises/1.3';

const EXERCISE_FILE = `${__dirname}/../exercises/1.3.js`;
const EXERCISE_FILE_HASH = '73793a28688c7dbffe61733a595190b2';

const isFileUpdated = () => EXERCISE_FILE_HASH !== getFileHash(EXERCISE_FILE);

function fibonacci(n) {
	return n < 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

test('Exercise 1.3 handles normal case correctly', (t) => {
	const spyAnswer = sinon.spy(fibonacci);
	const spyExercise = sinon.spy(fibonacci);

	const fibAnswer = answer(spyAnswer);
	const fibExercise = exercise(spyExercise);

	fibAnswer(10);
	fibAnswer(10);
	fibExercise(10);
	fibExercise(10);

	t.is(spyAnswer.callCount, 1);
	t.is(spyExercise.callCount, 1);
});

test('Exercise 1.3 throws when argument is not a function', (t) => {
	t.throws(() => answer(null));
	t.throws(() => exercise(null));
});

test('Exercise 1.3 handles when fn.apply is not a function', (t) => {
	const fibonacciWithoutApply = n => fibonacci(n);

	fibonacciWithoutApply.apply = null;

	t.notThrows(() => answer(fibonacciWithoutApply)(10));
	t.notThrows(() => answer(fibonacci)(10));

	if (isFileUpdated()) {
		t.notThrows(() => exercise(fibonacciWithoutApply)(10));
		t.notThrows(() => exercise(fibonacci)(10));
	}
});
