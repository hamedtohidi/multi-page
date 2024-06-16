import { useNavigate, useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import  { useEffect } from 'react'

export default function Home() {
    const {id} = useParams()
    const url = 'https://jsonplaceholder.typicode.com/posts/' +id
    const{data:article,isLoading, error } = useFetch(url)
    const navigate = useNavigate()
    useEffect(() =>{
      if(error){
        setTimeout(()=> navigate('/'), 2000)
      }
    }, [error])
  return (
    <div>
      {isLoading &&<div>Loading...</div>}
      {error &&<div>{error}</div>}
      {article && (
        <div>
          <h2>{article.title}</h2>
          <p><strong>Author</strong>: User #{article.userId}</p>
          <p>{article.body}</p>
        </div>
      )}
      
    </div>

  )
}
