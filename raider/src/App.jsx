import Mark_White from './assets/Mark_White.webp'
import './App.css'




function App() {

 const getScore = async () => {
  const txtRegion = document.getElementById("RegionValue").value;
  let regionWow = txtRegion;

  const txtRealm = document.getElementById("RealmValue").value;
  let realmWow = txtRealm;
  
  const txtcharName = document.getElementById("charNameValue").value;
  let charNameWow = txtcharName;

  const URL = 
  (`https://raider.io/api/v1/characters/profile?region=${regionWow}&realm=${realmWow}&name=${charNameWow}&fields=mythic_plus_scores`);
    const response = await fetch(URL);

 const body = await response.json();

 const res = body.mythic_plus_scores.all;
 

 const resImage = body.thumbnail_url;
 console.log(resImage)

 console.log(res)


 document.getElementById("scoreText").innerHTML = res;
 if (res >= 1 && res <= 1000) {
  document.getElementById("scoreText").style.color = "lightgreen";
 }else if (res > 1000 && res < 3000) {
  document.getElementById("scoreText").style.color = "rgb(131, 81, 232)";
 }else{
  document.getElementById("scoreText").style.color = "rgb(251, 121, 46)";
} 

 document.getElementById("imageURL").src= resImage;;
   
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
  <select name="region" id='RegionValue' className="buttonn">
  <option value="us">US</option>
  <option value="eu">EU</option>
  <option value="tw">TW</option>
  <option value="kr">KR</option>
  <option value="cn">CN</option>
</select>


<label>
  
<input id='RealmValue' className="tex" type="text" placeholder='Realm name' name="realm"/>
</label>

  <label>
    <input id='charNameValue' className="tex" type="text" placeholder='Character name' name="char" />
  </label>
      </div>
      
      <button className="subm" onClick={getScore}>Check Score</button>

     <div>
      <img id='imageURL' src="" alt="" />
     <h3 id='scoreText'>  </h3>
     <div></div>
     </div>

    </div>
    
  )
  
}



export default App
