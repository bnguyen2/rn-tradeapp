export const getUserIdFromDecodeToken = (decodedUser) =>
  parseInt(decodedUser?.['https://hasura.io/jwt/claims']?.['x-hasura-user-id']);

const usdNumberFormat = new Intl.NumberFormat('en-US', {
  currency: 'USD',
  style: 'currency',
});

export const formatDollars = (number) => usdNumberFormat.format(number);
