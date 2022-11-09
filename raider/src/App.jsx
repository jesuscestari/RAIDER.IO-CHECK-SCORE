import { useState } from 'react'
import Axios from 'axios'
import Mark_White from './assets/Mark_White.webp'
import './App.css'
import { useEffect } from 'react'


function App() {
  const [count, setCount] = useState(0)

  const [wAffix, setWAffix] = useState("");


  const fetchwAffix = () => {
    Axios.get(`https://raider.io/api/v1/mythic-plus/affixes?region=us&locale=en`).then((res) => {
    setWAffix(res.data.title);
  });
}

  
  return (
    <div className="App">
      <div>
        <a href="#">
          <img src={Mark_White} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Check Raider.IO</h1>

      <form>
      <div className="card">

  <select name="region"  className="buttonn">
  <option value="us">US</option>
  <option value="eu">EU</option>
  <option value="tw">TW</option>
  <option value="kr">KR</option>
  <option value="cn">CN</option>
</select>

<label>
<input className="tex" type="text" placeholder='Realm name' name="realm"/>
</label>

  <label>
    <input className="tex" type="text" placeholder='Character name' name="char"  />
  </label>

  <div></div>

  <button type="submit" className="subm" onClick={fetchwAffix}>Check Score</button>
      
      </div>
      
      </form>
     <div>
     <p>{wAffix}</p>
     </div>

    </div>
    
  )
  
}



export default App
