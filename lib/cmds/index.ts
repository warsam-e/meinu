import type { Echo } from '..';
import echo from './echo';
import evalc from './evalc';
import ping from './ping';

/**
 * returns the default commands available.
 *
 * It may looks kinda silly, but this is for when you want to override the main type for Echo.
 *
 * Like if you've extended Echo, you can do the following to get the correct type:
 * @example
 * ```ts
 * const { echo, eval, ping } = get_default_cmds<MyEcho>();
 *
 * // the following assumes you setup a static start
 * // method on your extended Echo class
 * const bot = new MyEcho()
 * 		.registerCmds([ echo, eval, ping ])
 * 		.init();
 *
 * ```
 */
export const get_default_cmds = <T extends Echo>() => ({
	echo: echo<T>(),
	eval: evalc<T>(),
	ping: ping<T>(),
});
