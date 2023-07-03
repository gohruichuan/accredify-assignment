const getJWT = () =>{
  return localStorage.getItem('jwtToken')
}

export { getJWT }
