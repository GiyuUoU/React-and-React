import { useState } from 'react'


function App() {
  const [count, setCount] = useState('royalblue')

  return (
    <>
    <div className='flex h-screen w-screen duration-200' style={{backgroundColor: count}}>
      <div className='bg-white h-20 w-100 mb-20 rounded-md m-auto flex justify-center items-center gap-5'>
        <button className='h-15 w-20 text-white rounded-md' onClick={()=>{setCount('red')}} style={{background : 'red'}}>Red</button>
        <button className='h-15 w-20 text-white rounded-md' onClick={()=>{setCount('yellow')}} style={{background : 'yellow'}}>Yellow</button>
        <button className='h-15 w-20 text-white rounded-md' onClick={()=>{setCount('blue')}} style={{background : 'blue'}}>Blue</button>
        <button className='h-15 w-20 text-white rounded-md' onClick={()=>{setCount('green')}} style={{background : 'green'}}>Green</button>
      </div>
    </div>
    </>
  )
}

export default App
