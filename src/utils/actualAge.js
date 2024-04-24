export default function actualAge() {
  const bornDate = new Date('2005-01-28');
  const today = new Date();

  const bornYear = bornDate.getFullYear();
  const todayYear = today.getFullYear();

  const diff = todayYear - bornYear;

  return diff;
}
