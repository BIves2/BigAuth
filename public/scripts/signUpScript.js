/**
 * Function used to send a request of signing up type
*/
async function signUp(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    try{
        const response = await fetch('http://localhost:3000/auth/signup', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                name:name, 
                email:email, 
                password:password
            })
        })
        const data = await response.json();
        if(!response.ok){
            throw new Error(data.message);
        }
    } catch(error){
        message.textContent = error.message;
        console.log("Error :", error.message);
    }
}