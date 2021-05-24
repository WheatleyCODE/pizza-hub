export const reduce = (type: any, data?: any) => {
  if (data) return ({ type, payload: data });
  return ({ type });
};
