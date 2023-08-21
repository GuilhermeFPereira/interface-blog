import { useContext, useState } from "react"
import { Navigate } from "react-router-dom"
import { UserContext } from "../UserContext"

const baseUrl = 'https://apibloggui.vercel.app'

export default function LoginPage(){
    const [userName, setUserName] = useState()
    const [password, setPassword] = useState()
    const [redirect, setRedirect] = useState(false)
    const {setUserInfo} = useContext(UserContext)
  async  function login(ev){
        ev.preventDefault()
    const response = await fetch(`${baseUrl}/login` , {
            mode: "no-cors",
            method: 'POST',
            body: JSON.stringify({userName, password}),
            headers: {'Content-Type':'application/json', 'Access-Control-Allow-Origin': '*'},
            credentials: 'include',
        })
        if(response.ok){
            response.json().then(userInfo =>{
                setUserInfo(userInfo)
                setRedirect(true)
            })
            
        } else{
            alert('Credenciais incorreta')
        }
    }

    if (redirect){
        return <Navigate to={'/'} />
    }
    return (
        <form className="login" onSubmit={login} >
            <h1>Login</h1>
            <input type="text" 
            placeholder="username" 
            value={userName} 
            onChange={event => setUserName(event.target.value)} />

            <input  type="password" 
            placeholder="password" 
            value={password} 
            onChange={event => setPassword(event.target.value)} />
            <button>Login</button>
            
        </form>
    )
}