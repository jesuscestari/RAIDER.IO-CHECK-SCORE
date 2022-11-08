import { useState } from 'react'
import Mark_White from './assets/Mark_White.webp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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

      <select className="button">
  <option selected value="us">US</option>
  <option value="eu">EU</option>
  <option value="tw">TW</option>
  <option value="kr">KR</option>
  <option value="cn">CN</option>
</select>
<label>
<input className="tex" type="text" placeholder='Realm name' name="name" />
</label>

  <label>
    <input className="tex" type="text" placeholder='Character name' name="name" />
  </label>

  <div></div>

  <input className="subm" type="submit" value="Check Score" />
      
      </div>
      </form>
     
    </div>
  )
}

export default App
