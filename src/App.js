//import LetteCounter from "./LetterCounter"
//import LetteCounter from "./LetterCounter"
//import RandomNumbers from "./RandomnNumbers"
import React,{ useEffect,useState} from 'react'

const App = () => {
  const [data, setData] = useState(0)
  const [para,setPara]= useState(true)
  useEffect(() => {
    console.log("iam useEffect")
  })
  return (
    <div>
      <center>
        <h1>useEffecthello</h1>
        <h1 onClick={()=>{setPara(!para)}}>{para?"dax":"solo"}</h1>
        <button onClick={() =>  setData(data + 1) }>click</button>
        {data}
      </center>
     
      </div>
  )

  
}
   

export default App