import { Routes,Route } from "react-router-dom";
import Opencode from "./Opencode";

export default function Home() {
    return (
      <div>
          <h2>About</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta delectus, pariatur labore ipsa harum laudantium quae aliquam id hic aspernatur. Necessitatibus, eos fuga deserunt natus repellendus velit fugit sapiente ipsam.</p>
          <Routes>
            <Route path='opencode' element={<Opencode/>}/>
          </Routes>
        
      </div>
    )
  }