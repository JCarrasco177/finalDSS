const forbidden = [
    "parseInt", "document.write", "eval", "isNaN", "unescape", "escape",
    "parseFloat", "parseInt", "eval", "isNaN", "onload", "alert", "script",
    "<",  ">", "onload", "=", "(", ")", '"' ,"'" ,"/"]

const getForbidden = () =>{
    return forbidden
}
const btoa = (text) => {
    return Buffer.from(text, 'binary').toString('base64');
};

const atob = (base64) => {
    return Buffer.from(base64, 'base64').toString('binary');
};
const reemplazarTodos = (palabra,reemplazar) =>{

    while(palabra.includes(reemplazar)){
        console.log(`Se ha reemplazado ${reemplazar} en ${palabra}`)
        palabra = palabra.replace(reemplazar,'')
    }
    return palabra
}

 const limpiarRequest = (data) =>{
    
    forbidden.forEach(word => {
        var usuario = data.usuario
        var password = data.password 
        usuario = reemplazarTodos(usuario,word)
        password = reemplazarTodos(password,word)
        data = {
            usuario,
            password
        }
    })
    return data
    
}
module.exports = {
    getForbidden,
    reemplazarTodos,
    limpiarRequest,
    btoa,
    atob,
}



