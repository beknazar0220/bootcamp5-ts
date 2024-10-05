import './App.css'
import About from './About'
import { RouterProvider } from 'react-router-dom'
import myRouter from './router'

function App() {

  return (
    <>
      Hello
      <About title="Alma" price={22}/>
      <About title='kartoshka' price={36}/>

      <RouterProvider router={myRouter}/>
    </>
  )
}

export default App
