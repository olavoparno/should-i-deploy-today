import { getArgumentValue } from './arguments';
import {
  REASONS_TO_DEPLOY,
  REASONS_TO_NOT_DEPLOY,
  REASONS_FOR_THURSDAY_AFTERNOON,
  REASONS_FOR_FRIDAY_AFTERNOON,
  REASONS_FOR_FRIDAY_13TH,
  REASONS_FOR_AFTERNOON,
  REASONS_FOR_WEEKEND,
} from './reasons';
import { Time } from './time';

function getRandom(list: string[]): string {
  return list[Math.floor(Math.random() * list.length)];
}

function dayHelper(time: Time): string[] {
  if (time.isFriday13th()) {
    throw REASONS_FOR_FRIDAY_13TH;
  }

  if (time.isFridayAfternoon()) {
    throw REASONS_FOR_FRIDAY_AFTERNOON;
  }

  if (time.isFriday()) {
    throw REASONS_TO_NOT_DEPLOY;
  }

  if (time.isThursdayAfternoon()) {
    throw REASONS_FOR_THURSDAY_AFTERNOON;
  }

  if (time.isAfternoon() && !time.isWeekend()) {
    throw REASONS_FOR_AFTERNOON;
  }

  if (time.isWeekend()) {
    throw REASONS_FOR_WEEKEND;
  }

  return REASONS_TO_DEPLOY;
}

function returnFalseOrExit1(impedimentMessage: string): boolean {
  const shouldExit = getArgumentValue('ci');

  if (shouldExit) {
    throw new Error(impedimentMessage);
  }

  return false;
}

export { getRandom, dayHelper, returnFalseOrExit1 };
