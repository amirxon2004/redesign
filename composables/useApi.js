
export const useApi = (path, options={}) => { 
  const token=useCookie('auth_token')
  if(token.value){ 
     options.headers={
      ...useRequestHeaders(),
      'Authorization':`Bearer ${token.value}`
    }
  }
  options.baseURL="https://api.cabinet.smart-market.uz/"
  return $fetch(path, options)
}