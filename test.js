import test from 'ava';
import isInCi from './index.js';

test('main', t => {
	t.true(isInCi);
});
