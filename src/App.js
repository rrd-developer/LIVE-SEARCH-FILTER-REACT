
import { useEffect,useState } from "react";

import Axios from "axios"
function App() {

  const [users,setUsers] = useState([])
  const[name,setName]  = useState("")

  useEffect(()=>{
    Axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res=>setUsers(res.data))
  })


  return (
    <div className="App">
      <h1>LIVE-SEARCH-FILTER</h1>
      <input type="text" placeholder="ENTER NAME..." value={name} onChange={(e)=>setName(e.target.value)}/>
     {name.length > 0 &&users.map(e=>(
      <div key={e.id}>
        { e.name.toLowerCase().includes(name.toLowerCase()) ? e.name : ""}
      </div>
     ))}

     
    </div>
  );
}

export default App;
