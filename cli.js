#!/usr/bin/env node
'use strict';
const updateNotifier = require('update-notifier');
const meow = require('meow');
const emptyTrash = require('empty-trash');

const cli = meow(`
	Usage
	  $ empty-trash
`);

updateNotifier({pkg: cli.pkg}).notify();

emptyTrash();
