export const IN_SUCESS = "@user/IN_SUCESS";

export function inSucess(user) {
  return {
    type: IN_SUCESS,
    payload: {
      user: user,
    },
  };
}
