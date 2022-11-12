export const getFormatedDate = (date) => {
  const splitDate = date.split(',');
  const splitDMY = splitDate[0].split('.');
  const reverseSplitDMY = splitDMY.reverse();
  const reverseDMY = reverseSplitDMY.join('.');
  const formatedDate = reverseDMY + splitDate[1];

  return formatedDate;
};
