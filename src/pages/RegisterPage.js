import { useState } from "react"

export default function RegisterPage(){
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
   async function register(ev){
       ev.preventDefault()
      await fetch('http://localhost:4000/register', {
        method: 'POST',
        body: JSON.stringify({userName, password}),
        headers: {'Content-Type':'application/json'},
       }) 
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