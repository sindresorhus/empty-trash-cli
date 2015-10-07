import childProcess from 'child_process';
import test from 'ava';

test(t => {
	childProcess.execFile('./cli.js', {cwd: __dirname}, err => {
		t.ifError(err);
		t.end();
	});
});
