import { ActivityType, Meinu } from '../index.js';
import cmds from './cmds/index.js';

const bot = await new Meinu({
	name: 'Meinu',
	color: 'LuminousVividPink',
})
	.registerCommands(cmds)
	.init();

const [guilds, users] = await Promise.all([bot.guildCount(), bot.memberCount()]);

bot.user?.setActivity({
	type: ActivityType.Watching,
	name: `${guilds.toLocaleString()} guilds | ${users.toLocaleString()} users`,
});
