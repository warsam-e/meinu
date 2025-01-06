import type { Meinu } from '../index.js';
import echo from './echo.js';
import evalc from './evalc.js';
import ping from './ping.js';

/**
 * returns the default commands available.
 *
 * It may looks kinda silly, but this is for when you want to override the main type for Meinu.
 *
 * Like if you've extended Meinu, you can do the following to get the correct type:
 * @example
 * ```ts
 * const { echo, eval, ping } = get_default_cmds<MyMeinu>();
 *
 * // the following assumes you setup a static start
 * // method on your extended Meinu class
 * const bot = await MyMeinu.start({
 *    cmds: [ echo, eval, ping ],
 * });
 *
 * ```
 */
export const get_default_cmds = <T extends Meinu>() => ({
	echo: echo<T>(),
	eval: evalc<T>(),
	ping: ping<T>(),
});
