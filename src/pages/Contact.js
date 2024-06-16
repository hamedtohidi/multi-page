import { useLocation } from "react-router-dom"
export default function Home() {
  const queryString = useLocation().search
  console.log(queryString)
  const queryParams = new URLSearchParams(queryString)
  const name = queryParams.get('name')
    return (
      <div>
          {name && <h2>Hello {name},Contact us Here...</h2>}
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta delectus, pariatur labore ipsa harum laudantium quae aliquam id hic aspernatur. Necessitatibus, eos fuga deserunt natus repellendus velit fugit sapiente ipsam.</p>
        
      </div>
    )
  }
