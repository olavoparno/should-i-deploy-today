export const getArgumentValue = (argName: string): boolean => {
  const args = process.argv
    .filter((item) => {
      if (item.indexOf(argName) >= 0) {
        return item;
      }

      return '';
    })
    .toString();

  const envs = process.env[argName.toUpperCase()] || process.env[argName.toLowerCase()];

  return !!args || !!envs;
};
