import chalk from 'chalk';
import type { Awaitable, Echo } from '..';

export const echo_color = chalk.rgb(114, 137, 218);

export async function _echo_log(
	{
		title,
		cb,
		bot,
	}: {
		title: string;
		cb?: Awaitable<any>;
		bot: Echo | null;
	},
	...message: any[]
) {
	const _title = bot?.isSharding ? `#${bot.shard?.ids.join(',')}_${title}` : title;
	if (typeof cb === 'undefined') return console.log(echo_color(`[Echo / ${_title}]`), ...message);
	console.time(...message);
	await cb;
	console.timeEnd(...message);
}

const { green, red } = chalk;

export { green, red };
