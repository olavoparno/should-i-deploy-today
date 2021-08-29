export type Time = {
  isAfternoon: () => boolean;
  isFriday: () => boolean;
  isFriday13th: () => boolean;
  isFridayAfternoon: () => boolean;
  isThursdayAfternoon: () => boolean;
  isWeekend: () => boolean;
};

export function time(): Time {
  const time = new Date();

  const isAfternoon = () => time.getHours() >= 12 && time.getHours() < 17;
  const isFriday = () => time.getDay() === 5;
  const isFriday13th = () => isFriday() && time.getDate() === 13;
  const isFridayAfternoon = () => isFriday() && isAfternoon();
  const isThursdayAfternoon = () => time.getDay() === 4 && isAfternoon();
  const isWeekend = () => time.getDay() === 0 || time.getDay() === 6;

  return {
    isAfternoon,
    isFriday,
    isFriday13th,
    isFridayAfternoon,
    isThursdayAfternoon,
    isWeekend,
  };
}
