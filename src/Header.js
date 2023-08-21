import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

const baseUrl = 'https://apibloggui.vercel.app'

export default function Header(){
  const {setUserInfo, userInfo} = useContext(UserContext)
  useEffect(()=>{
    fetch(`${baseUrl}/profile`,{
      // credentials: 'include',
      header: {'Access-Control-Allow-Origin': '*'},
    }).then(response =>{
      response.json().then(userInfo =>{
        setUserInfo(userInfo)
      })
    })
  },[])

  function logout(){
    fetch(`${baseUrl}/logout`, {
      mode: "no-cors",
      // credentials: 'include',
      method: 'POST',
      header:{'Access-Control-Allow-Origin': '*'},
    })
    setUserInfo(null)
  }

  const userName = userInfo?.userName
    return (
        <header>
        <Link to='/' className='logo' >MyBlog</Link>
        <nav>
          { userName && (
            <>
            <Link to="/create">Create New Post</Link>
            <a onClick={logout} >Logout ({userName}) </a>
            </>
          )}
          {!userName && (
            <>
            <Link to='/login' >Login</Link>
          <Link to='/register'>Register</Link>
            </>
          )}
          
        </nav>
      </header>
    )
}