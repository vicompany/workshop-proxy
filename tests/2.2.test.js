import sinon from 'sinon';
import test from 'ava';

import getFileHash from './functions/get-file-hash';
import answer from '../answers/2.2';
import exercise from '../exercises/2.2';

const EXERCISE_FILE = `${__dirname}/../exercises/2.2.js`;
const EXERCISE_FILE_HASH = '57c3b6534ca1653d720046fcddcd399b';

const isFileUpdated = () => EXERCISE_FILE_HASH !== getFileHash(EXERCISE_FILE);

class MyClass {
	constructor(name) {
		this.name = name;
	}

	greet() {
		return `Hello ${this.name}`;
	}
}

function greet(name) {
	return `Hello ${name}`;
}

test.beforeEach((t) => {
	t.context.loggers = {
		answer: {
			log: sinon.spy(),
		},
		exercise: {
			log: sinon.spy(),
		},
	};
});

test('Exercise 2.2 doesn\'t throw', (t) => {
	t.notThrows(() => answer(greet, t.context.loggers.answer));
	t.notThrows(() => answer(greet, t.context.loggers.answer)());

	if (isFileUpdated()) {
		t.notThrows(() => exercise(greet, t.context.loggers.exercise));
		t.notThrows(() => exercise(greet, t.context.loggers.exercise)());
	}
});

test('Exercise 2.2 logs function invocations', (t) => {
	const proxyAnswer = answer(greet, t.context.loggers.answer);

	proxyAnswer('hello', 'world');
	t.true(t.context.loggers.answer.log.calledOnce);

	if (isFileUpdated()) {
		const proxyExercise = exercise(greet, t.context.loggers.exercise);

		proxyExercise('hello', 'world');
		t.true(t.context.loggers.exercise.log.calledOnce);
	}
});

test('Exercise 2.2 logs class method invocations', (t) => {
	const proxyAnswer = answer(new MyClass('dave'), t.context.loggers.answer);

	proxyAnswer.greet('hello', 'world');
	t.true(t.context.loggers.answer.log.calledOnce);

	if (isFileUpdated()) {
		const proxyExercise = exercise(new MyClass('dave'), t.context.loggers.exercise);

		proxyExercise.greet('hello', 'world');
		t.true(t.context.loggers.exercise.log.calledOnce);
	}
});
