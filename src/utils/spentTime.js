export default function spentTime(startAt, endAt, current) {
  const endAtDate = current ? new Date() : new Date(endAt);
  const startAtDate = new Date(startAt);

  const difference = endAtDate - startAtDate;
  const seconds = Math.floor(difference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) {
    return `${years} Ano${years > 1 ? 's' : ''} ${
      months % 12 > 0
        ? months % 12 > 1
          ? (months % 12) + ' Meses'
          : (months % 12) + ' Mês'
        : ''
    }`;
  } else if (months > 0) {
    return `${months} ${months > 1 ? 'Meses' : 'Mês'}`;
  } else if (days > 0) {
    return `${days} Dia${days > 1 ? 's' : ''}`;
  } else if (hours > 0) {
    return `${hours} Hora${hours > 1 ? 's' : ''}`;
  } else if (minutes > 0) {
    return `${minutes} Minuto${minutes > 1 ? 's' : ''}`;
  } else {
    return `${seconds > 0 ? seconds : 1} Segundo${seconds > 1 ? 's' : ''}`;
  }
}
