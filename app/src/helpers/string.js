export const getUserIdFromDecodeToken = (decodedUser) =>
  parseInt(decodedUser?.['https://hasura.io/jwt/claims']?.['x-hasura-user-id']);
