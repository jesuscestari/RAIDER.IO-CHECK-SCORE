import { useState } from 'react'
import Axios from 'axios'
import Mark_White from './assets/Mark_White.webp'
import './App.css'
import { useEffect } from 'react'



function App() {

  const URL = "https://raider.io/api/v1/characters/profile?region=us&realm=area-52&name=NerfTank&fields=mythic_plus_scores";

 const getScore = async () => {
 const response = await fetch(URL);

 const body = await response.json();

 return body.mythic_plus_scores.all;

};

  const [count, setCount] = useState(0)

  const [region, setRegion] = useState("");

  const [realm, setRealm] = useState("");

  const [name, setName] = useState("");

  const [score, setScore] = useState("");

  const [url ,setUrl] = useState(null);

  const onClickHandler = async () => {
    const url = await getScore();

    setUrl(url);
  };





  return (
    <div className="App">
      <div>
        <a href="#">
          <img src={Mark_White} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Check Raider.IO</h1>

  <div className="card">
  
  <select name="region" className="buttonn" onChange={event => setRegion(event.target.value)}>
  <option value="us">US</option>
  <option value="eu">EU</option>
  <option value="tw">TW</option>
  <option value="kr">KR</option>
  <option value="cn">CN</option>
  
</select> 

<label>
<input className="tex" type="text" placeholder='Realm name' name="realm" onChange={event => setRealm(event.target.value)}/>
</label>

  <label>
    <input className="tex" type="text" placeholder='Character name' name="char" onChange={event => setName(event.target.value)} />
  </label>

  <div></div>

      </div>
      
      <button className="subm" onClick={onClickHandler}>Check Score</button>
     <div>
     <h3 id='scoreText'> {url} </h3>
     <div></div>
     </div>

    </div>
    
  )
  
}



export default App
