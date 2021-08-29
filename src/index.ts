#!/usr/bin/env node

import { getRandom, dayHelper, returnFalseOrExit1 } from './helpers';
import { shouldIDeployFactory } from './factory';
import { logger } from './logger';
import { time } from './time';

export const shouldIDeploy = shouldIDeployFactory({
  logger,
  getRandom,
  dayHelper,
  time,
  returnFalseOrExit1,
});

process.on('uncaughtException', () => {
  process.exit(1);
});

shouldIDeploy();
