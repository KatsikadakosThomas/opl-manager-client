


export const loginAction= payload=>({
    type: "login",
    payload:{
        email:payload.email,
        password:payload.password
    }

})

