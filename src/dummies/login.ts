import { USER_TABLE } from './loginData'

export const login = (username:string, password:string) => {
  const user = USER_TABLE.find(user => (user.name === username && user.password === password))
  if (!user) return { error: 'Not Found' }
  return { token: user.token }
}
