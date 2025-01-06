import { join } from 'node:path';
import { MeinuSharding } from '..';

const current_file = import.meta.url.replace('file://', '');

MeinuSharding.init(join(current_file, '../index.ts'));
