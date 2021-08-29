import { Time } from './time';

type ShouldIDeployFactory = {
  logger: () => {
    logInfo: (message: string) => void;
    logWarn: (message: string) => void;
    logError: (message: string) => void;
  };
  getRandom: (list: string[]) => string;
  dayHelper: (time: Time) => string[];
  time: () => Time;
  returnFalseOrExit1: (impedimentMessage: string) => boolean;
};

function shouldIDeployFactory({
  logger,
  getRandom,
  dayHelper,
  time,
  returnFalseOrExit1,
}: ShouldIDeployFactory): () => boolean {
  const { logInfo, logError } = logger();
  const factoryTime = time();

  return () => {
    try {
      const canIDeployMessage = getRandom(dayHelper(factoryTime));

      logInfo(`You may deploy safely because... ${canIDeployMessage}`);
      return true;
    } catch (error) {
      const impedimentMessage = getRandom(error);

      logError(`You should not deploy. ${impedimentMessage}`);
      return returnFalseOrExit1(impedimentMessage);
    }
  };
}

export { shouldIDeployFactory };
