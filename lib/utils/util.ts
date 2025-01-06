import type { RoleSelectMenuBuilder, StringSelectMenuBuilder, UserSelectMenuBuilder } from 'discord.js';

export type AnySelectMenuBuilder = StringSelectMenuBuilder | RoleSelectMenuBuilder | UserSelectMenuBuilder;
