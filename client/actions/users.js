export const INIT_USERS = 'INIT_USERS'

export function initUsers (user) {
  return {
    type: INIT_USERS,
    user
  }
}