import { get_default_cmds } from '../..';
import ac from './ac';
import buttons from './buttons';
import cm from './cm';
import locale_test from './locale_test';
import modal from './modal';
import nsfw_cmd from './nsfw_cmd';
import profile from './profile';
import scrollable from './scrollable';
import sub from './sub';
import user from './user';

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
