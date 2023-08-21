import { useState } from "react"

const baseUrl = 'https://apibloggui.vercel.app'
export default function RegisterPage(){
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
   async function register(ev){
       ev.preventDefault()
     const response = await fetch(`${baseUrl}/register`, {
        mode: "no-cors",
            method: 'POST',
            body: JSON.stringify({userName, password}),
            headers: {'Content-Type':'application/json'},
           }) 
           if(response.status === 200){
            alert('Registration sucessful')
           }else{
            alert('Registration failed')
           }
       
    }
    return (
        <form className="register" onSubmit={register} >
            <h1>Register</h1>
            <input type="text" 
            placeholder="username"
            value={userName} 
            onChange={event => setUserName(event.target.value)}
            />
            <input  
            type="password"
             placeholder="password"
             value={password}
             onChange={event => setPassword(event.target.value)}
             />
            <button>Register</button>
            
        </form>
    )
}