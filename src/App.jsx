import './App.css'
import {useState} from 'react'
import { puppyList } from './data.js'
import './css.css'
function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  console.log(featuredPup)
  return (
      <div className='App'>
        <h1>Puppy Pals</h1>
        <img src="https://pics.craiyon.com/2023-06-02/fb79d3efe4684398899742ec54b95b3c.webp" alt="" />
        <h3>Click on each puppy to see more!</h3>
        {
        puppies.map((puppy) => {
          return <p onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>;
        })
        }
        { featPupId && (
          <div className='Feat'>
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
              </ul>
            </div> )}
      </div>
  )
}

export default App
