export function formatRelativeDate(isoString) {
  const now = new Date();
  const target = new Date(isoString);

  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const targetDay = new Date(
    target.getFullYear(),
    target.getMonth(),
    target.getDate(),
  );

  const diffTime = today - targetDay;
  const diffDay = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDay <= 0) return '오늘';
  if (diffDay === 1) return '어제';
  if (diffDay < 7) return `${diffDay}일전`;

  const diffWeek = Math.floor(diffDay / 7);
  if (diffWeek === 1) return '1주전';
  if (diffWeek === 2) return '2주전';
  if (diffWeek === 3) return '3주전';

  const diffMonth = Math.floor(diffDay / 30);
  if (diffMonth === 1) return '1달 전';
  if (diffMonth < 12) return `${diffMonth}달전`;

  const diffYear = Math.floor(diffDay / 365);
  if (diffYear === 1) return '1년전';

  return `${diffYear}년전`;
}
