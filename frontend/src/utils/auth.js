export const isAuthanticated=()=>{
    return localStorage.getItem("email")=="mb124969@gmail.com";
}
export const logout=()=>{
    return localStorage.clear();
}
// export const isAuthenticated = () => {
//     return localStorage.getItem('token') !== null;
//   };
  
//   export const logout = () => {
//     localStorage.removeItem('token');
//   };