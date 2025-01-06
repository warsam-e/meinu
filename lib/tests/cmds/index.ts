import { get_default_cmds } from '../../index.js';
import ac from './ac.js';
import buttons from './buttons.js';
import cm from './cm.js';
import locale_test from './locale_test.js';
import modal from './modal.js';
import nsfw_cmd from './nsfw_cmd.js';
import profile from './profile.js';
import scrollable from './scrollable.js';
import sub from './sub.js';
import user from './user.js';

const default_cmds = get_default_cmds();

export default [
	ac,
	buttons,
	cm,
	locale_test,
	modal,
	profile,
	scrollable,
	sub,
	nsfw_cmd,
	user,
	...Object.values(default_cmds),
];
