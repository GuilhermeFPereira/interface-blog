
import { formatISO9075 } from 'date-fns'
import { Link } from 'react-router-dom'
 // import Logo from '../src/assets/cra vs vite.png'

export default function Post({_id,title,summary, cover, content,createdAt, author}){
    return (
        <div className='post' >
        <div className='image' >
          <Link to={`/post/${_id}`}>
          <img src={`http://localhost:4000/` + cover} alt='' />
          </Link>
        
        </div>
        <div className='texts'>
          <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
          </Link>
        
        <p className='info'>
          <a className='author' >{author.userName}</a>
          <time>{formatISO9075(new Date(createdAt), 'd MMM, yyy HH:mm ')}</time>
        </p>
        <p className='summary' >{summary}</p>
        </div>
       
      
       
      </div>

    )
}