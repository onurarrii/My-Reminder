import moment from 'moment';

export const uid = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

export const formatDate = (date: Date) => {
  return moment(date).format('DD MMM YYYY HH:mm');
};

export const getTimeDifferenceText = ({
  startDate = new Date(),
  endDate,
}: {
  startDate?: Date;
  endDate: Date;
}): string | undefined => {
  type UnitType = 'YEAR' | 'MONTH' | 'DAY' | 'HOUR' | 'MINUTE';
  // eslint-disable-next-line no-bitwise
  const toInt = (n: number) => n | 0;

  const oneMinute = 60 * 1000;
  const oneHour = oneMinute * 60;
  const oneDay = oneHour * 24;
  const oneMonth = oneDay * 30;
  const oneYear = oneDay * 365;

  const UNITS = {
    YEAR: { valueInMs: oneYear, singularText: 'year', pluralText: 'years' },
    MONTH: { valueInMs: oneMonth, singularText: 'month', pluralText: 'months' },
    DAY: { valueInMs: oneDay, singularText: 'day', pluralText: 'days' },
    HOUR: { valueInMs: oneHour, singularText: 'hour', pluralText: 'hours' },
    MINUTE: {
      valueInMs: oneMinute,
      singularText: 'minute',
      pluralText: 'minutes',
    },
  };
  const timeDifference = endDate.getTime() - startDate.getTime();

  const getUnitText = (value: number, unit: UnitType) => {
    if (value === 0) {
      return '';
    }
    const selectedUnit = UNITS[unit];
    return `${value} ${
      value === 1 ? selectedUnit.singularText : selectedUnit.pluralText
    }`;
  };

  const getCombinedText = (primaryUnit: UnitType, secondaryUnit?: UnitType) => {
    const primaryValue = UNITS[primaryUnit].valueInMs;
    const secondaryValue = secondaryUnit && UNITS[secondaryUnit].valueInMs;

    return [
      getUnitText(toInt(timeDifference / primaryValue), primaryUnit),
      secondaryUnit && secondaryValue
        ? getUnitText(
            toInt((timeDifference % primaryValue) / secondaryValue),
            secondaryUnit,
          )
        : '',
    ].join(' ');
  };

  if (timeDifference < 0) {
    return undefined;
  } else if (timeDifference > oneYear) {
    return getCombinedText('YEAR', 'MONTH');
  } else if (timeDifference > oneMonth) {
    return getCombinedText('MONTH', 'DAY');
  } else if (timeDifference > oneDay) {
    return getCombinedText('DAY', 'HOUR');
  } else if (timeDifference > oneHour) {
    return getCombinedText('HOUR', 'MINUTE');
  } else if (timeDifference > oneMinute) {
    return getCombinedText('MINUTE', 'MINUTE');
  } else {
    return 'less than 1 minute.';
  }
};
