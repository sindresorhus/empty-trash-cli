#!/usr/bin/env node
import meow from 'meow';
import emptyTrash from 'empty-trash';

meow(`
	Usage
	  $ empty-trash
`, {
	importMeta: import.meta,
});

emptyTrash();
