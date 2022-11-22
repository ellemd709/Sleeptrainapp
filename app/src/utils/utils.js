export const register =(user)=>{
const users = JSON.parse(localStorage.getItem('users')) || []
users.push(user)
localStorage.setItem('users', JSON.stringify(users))
}

export const login =(data)=>{
    const users = JSON.parse(localStorage.getItem('users')) || []
    const user = users.findIndex((user)=>user.UserName===data.UserName && user.Password===data.Password)
    if (user!=-1){return true}
    return false 
}
