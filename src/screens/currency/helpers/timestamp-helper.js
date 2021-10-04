const nowTs = Math.round(new Date().getTime() / 1000);
const oneDay = 24 * 3600; // one day seconds

const prevDayTs = nowTs - oneDay;
const prevWeekTs = nowTs - oneDay * 7;
const prevMonthTs = nowTs - oneDay * 30;
const prevYearTs = nowTs - oneDay * 365;

export {nowTs, prevDayTs, prevWeekTs, prevMonthTs, prevYearTs};
