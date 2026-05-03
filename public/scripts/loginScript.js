/**
 * Function used to call node js server in order to log in platform
 */
async function login(){
    try{
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const message = document.getElementById('message');
    
        const response = await fetch('http://localhost:3000/auth/login',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email : email, password : password})
        })
        const data = await response.json();
        if(!response.ok){
            throw new Error(data.message);
        }
    } catch(error){
        message.textContent = error.message;
    }

}